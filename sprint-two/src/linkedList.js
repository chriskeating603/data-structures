var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(this.head === null){
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
    
  };

  list.removeHead = function() {
    var shiftValue = this.head.value;
    this.head = this.head.next;
    return shiftValue; 
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while(currentNode.value !== target){
      currentNode = currentNode.next;
      if(currentNode === null){
        return false;
      }
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
