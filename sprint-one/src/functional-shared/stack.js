var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = {
    storage: {},
    count: 0
  };
  _.extend(instanceOf, stackMethods);
  return instanceOf;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function (value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function () {
    var deleted = this.storage[this.count];
    if (this.count > 0) {
      delete this.storage[this.count];
      this.count--;
      return deleted;
    }
  } 
};


