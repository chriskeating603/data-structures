var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = Object.create(queueMethods);
  instanceOf.firstInLine = 1;
  instanceOf.lastInLine = 1;
  instanceOf.storage = {};
  return instanceOf;
};

var queueMethods = {
  size: function () {
    return this.lastInLine - this.firstInLine;
  }, 
  enqueue: function (value) {
    this.storage[this.lastInLine] = value;
    this.lastInLine++;
  },
  dequeue: function () {
    var deleted = this.storage[this.firstInLine];
    if (this.lastInLine > this.firstInLine) {
      delete this.storage[this.firstInLine];
      this.firstInLine++;
      return deleted;
    }
  } 
};


