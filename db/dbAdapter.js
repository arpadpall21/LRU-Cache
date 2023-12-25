var nrWord = ['zero', 'one', 'two', 'three', 'four',  'five', 'six', 'seven', 'eight', 'nine'];

export class FakeDatabaseAdapter {
  getContent(id) {
    let result = '';
    for (let n of id.toString()) {
      result += `${nrWord[n]}.`;
    }

    return result;
  }
}
