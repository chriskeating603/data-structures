var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.firstInLine = 1;
  this.lastInLine = 1;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.lastInLine - this.firstInLine;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastInLine] = value;
  this.lastInLine++;
};

Queue.prototype.dequeue = function() {
  var deleted = this.storage[this.firstInLine];
  if (this.lastInLine > this.firstInLine) {
    delete this.storage[this.firstInLine];
    this.firstInLine++;
    return deleted;
  }
};


