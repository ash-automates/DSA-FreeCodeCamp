const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.size = function () {
    return this.count;
  };

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count += 1;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count -= 1;
    const result = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    return result;
  };

  this.peek = function () {
    const result = this.storage[this.count - 1];
    return result;
  };
};
