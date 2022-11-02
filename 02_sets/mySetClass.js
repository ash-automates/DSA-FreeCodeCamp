const MySet = function () {
  let collection = [];

  this.values = function () {
    return collection;
  };

  this.has = function (value) {
    return !collection.indexOf(value) !== -1;
  };

  this.push = function (value) {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    } else {
      return false;
    }
  };

  this.delete = function (value) {
    if (this.has(value)) {
      collection.splice(collection.indexOf(value), 1);
      return true;
    } else {
      return false;
    }
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    let unionSet = new MySet();
    this.values().forEach((element) => {
      unionSet.push(element);
    });
    otherSet.values().forEach((element) => {
      unionSet.push(element);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    let intersectionSet = new MySet();
    this.values().forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.push(element);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new MySet();
    this.values().forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.push(element);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    return this.values().every((element) => {
      return otherSet.has(element);
    });
  };
};
