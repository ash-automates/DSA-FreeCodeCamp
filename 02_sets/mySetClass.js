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
};
