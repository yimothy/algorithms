var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
// Write your code here
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  if(this.value === value) return true;
  this.children.forEach((child) => {
    if(child.contains(value)) return true;

  })


// Write your code here
}
