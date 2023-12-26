import { createClient } from 'redis';

const redisClient = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export async function getContentFromCache(id) {
  return await redisClient.get(id)
}

export async function setContentToCache(id, content) {
  return await redisClient.set(id, content)
}
