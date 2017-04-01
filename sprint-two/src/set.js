var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.contains = function(item) {
  var result = false;
  if(this._storage[item]) {
    result = true;
  }
  return result;
};

setPrototype.add = function(item) {
  // check to see if set has item 
  if (!this._storage[item]){
    this._storage[item] = item;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
