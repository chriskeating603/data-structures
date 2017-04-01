var BinarySearchTree = function(value) {
  var tree = Object.create(binarySearchMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var binarySearchMethods = {
  insert: function (value) {
    var currentBranch = this;
    var search = function (value) {
      if (value > currentBranch.value) {
        if (currentBranch.right === null) {
          currentBranch.right = new BinarySearchTree(value);
        } else {
          currentBranch = currentBranch.right;
          search(value);
        }
      } else {
        if (currentBranch.left === null) {
          currentBranch.left = new BinarySearchTree(value);
        } else {
          currentBranch = currentBranch.left;
          search(value);
        }
      }
    };
    search(value);
  },
  contains: function (target) {
    var currentBranch = this;
    var search = function (target) {
      if (currentBranch.value === target) {
        return true;
      } else {
        if (currentBranch.value < target) {
          if (currentBranch.right === null) {
            return false;
          } else {
            currentBranch = currentBranch.right;
            return search(target);
          }
        } else {
          if (currentBranch.left === null) {
            return false;
          } else {
            currentBranch = currentBranch.left;
            return search(target);
          }
        }
      }

    };
    return search(target);
  },

  depthFirstLog: function (cb) {
    
    var currentBranch = this;

    var goRight = function () {
      currentBranch = currentBranch.right;
      leftOrRight(cb);
    };

    var goLeft = function () {
      currentBranch = currentBranch.left;
      leftOrRight(cb);
    };

    var leftOrRight = function (cb) {
      cb(currentBranch.value);
      if (currentBranch.left !== null) {
        goLeft();
      }
      if (currentBranch.right !== null) {
        goRight();
      }
    };

    leftOrRight(cb);

        
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
