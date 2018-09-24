class Sorter {
  constructor() {
    // your implementation
      this.array = [];

  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index];
  }

  get length() {
    // your implementation
      return this.array.length;
  }

  toArray() {
    // your implementation
      return this.array;
  }

  sort(indices) {
    // your implementation
      let subArray = indices.sort().map(index => this.array[index]).sort(this.compareFunction || ((left, right) => left - right));
      indices.forEach((index, iterator) => this.array[index] = subArray[iterator]);
  }

  setComparator(compareFunction) {
    // your implementation
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;