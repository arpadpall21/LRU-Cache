const nrWord = ['zero', 'one', 'two', 'three', 'four',  'five', 'six', 'seven', 'eight', 'nine'];

export class FakeDatabaseAdapter {
  async getContent(id) {
    let result = '';
    for (let n of id.toString()) {
      result += `${nrWord[n]}.`;
    }

    await blocker(2);       // simulating 2 seconds of latency
    return result;
  }
}

function blocker(delaySec) {
  return new Promise((res) => {
    setTimeout(() => res(), delaySec * 1000)
  });
}
