const nrWord = ['zero', 'one', 'two', 'three', 'four',  'five', 'six', 'seven', 'eight', 'nine'];


class FakeDatabaseAdapter {
  async getContent(id) {
    let result = '';
    for (let n of id.toString()) {
      result += `${nrWord[n]}.`;
    }

    await this.blocker(2);       // simulating 2 seconds of latency
    return result;
  }

  blocker(delaySec) {
    return new Promise((res) => {
      setTimeout(() => res(), delaySec * 1000)
    });
  }
}


const fakeDb = new FakeDatabaseAdapter();
export default fakeDb;
