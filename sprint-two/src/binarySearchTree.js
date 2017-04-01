var BinarySearchTree = function(value) {
  var tree = Object.create(binarySearchMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
};

var binarySearchMethods = {
  insert: function (value) {
    // Check if tree.value !== undefined
      // if tree.value is greater than our current value
        // if tree.left.value is greater than our current value ....
      // if no then if tree.right.value is greatter than our current value .....

      //
      

    // 
  },
  contains: function (value) {},
  depthFirstLog: function (cb) {}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
