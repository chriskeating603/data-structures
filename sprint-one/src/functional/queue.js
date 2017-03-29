var Queue = function() {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 1;
  var lastInLine = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastInLine] = value;
    lastInLine++
  };

  someInstance.dequeue = function() {
    if (firstInLine !== lastInLine) {
      var deleteValue = storage[firstInLine];
      delete storage[firstInLine];
      firstInLine++;
      return deleteValue;
    }
  };

  someInstance.size = function() {
    return lastInLine - firstInLine;
  };

  return someInstance;
};
