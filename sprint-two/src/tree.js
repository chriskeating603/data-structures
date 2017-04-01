var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children.push(Tree(value));
  },

  contains: function(target) {

    var result = false;
    var person = this;
    var search = function (person, target) {
    // check to see if the person (target) exists
      if (person.value === target) {
        result = true;
      }
    // if children exist repeat test on children
      if (person.children.length > 0) {
        person.children.forEach(function(child) {
          search(child, target);
        });
      }
    };
    search(person, target);
    return result;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
