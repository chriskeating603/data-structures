
// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObj = {
    value: node,
    edge: []
  };
  this.graph[node] = nodeObj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  var result = false;
  
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      result = true;
    }
  }
    
  return result;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.graph[node].edge.length; i++) {
    for (var k = 0; k < this.graph[this.graph[node].edge[i]].edge.length; k++) {
      console.log(this.graph[this.graph[node].edge[i]].edge[k]);
      console.log(this.graph[this.graph[node].edge[i]]);
      if (node === this.graph[this.graph[node].edge[i]].edge[k]) {
        this.graph[this.graph[node].edge[i]].edge.splice(k, 1);
      }
    }
  }
  delete this.graph[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.graph[fromNode].edge.forEach(function(element) {
    if (element === toNode) {
      result = true;
    }
  });

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge.push(toNode);
  
  this.graph[toNode].edge.push(fromNode);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graph[fromNode].edge.length; i++) {
    if (this.graph[fromNode].edge[i] === toNode) {
      delete this.graph[fromNode].edge[i];
    }
  }
  for (var j = 0; j < this.graph[toNode].edge.length; j++) {
    if (this.graph[toNode].edge[j] === fromNode) {
      delete this.graph[toNode].edge[j];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(this.graph[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


