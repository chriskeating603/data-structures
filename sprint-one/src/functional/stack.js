var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // add someInstance to the storage at count
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var remove = storage[count];
    if(count > 0){
      delete storage[count];
      count--;
      return remove;

    }
    // set var = storage at count - 1
    // if count is greater than 0 
      // delete storage at count
      // return var

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
