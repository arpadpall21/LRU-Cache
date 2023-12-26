import { createClient as createRedisClient } from 'redis';


class CacheAdapter {
  constructor(arg) {
    this.cacheRank = 'cacheRank';
    this.redisClient = null;
    this.connect();
  }

  connect() {
    createRedisClient().on('error', err => console.log('Redis Client Error', err)).connect()
      .then(redisClient => {
        this.redisClient = redisClient;
        console.log('Redis connection OK');
      })
      .catch(err => console.error(`Redis connection failed: ${err}`))
  }

  async getContent(id) {
    const content = await this.redisClient.get(id);

    if (!content) {
      return null;
    }

    await this.redisClient.zIncrBy(this.cacheRank, '1', id);
    return content;
  }

  async setContent(id, content) {
    await this.redisClient.set(id, content);
    await this.redisClient.sendCommand(['ZADD', this.cacheRank, '1', id]);
  }

}

const cache = new CacheAdapter();
export default cache;