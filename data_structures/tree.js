/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  //Given a n-ary tree of integers, return the sum of all the integers.

  // sumValues(rootNode = this.root, sum = 0) {
  //   if (!rootNode) return sum; // if the tree is empty, return 0
  //   let currentNode = rootNode.push(rootNode.val + this.sumValues(rootNode.children, sum));
  //   return currentNode;

  // }

  // sumValues() {
  //   let sum = 0;

  //   if (!this.root) {
  //     return sum;
  //   } else {
  //     const queue = [this.root];
  //     while (queue.length > 0) {
  //       const currentNode = queue.shift();
  //       sum += currentNode.val;
  //       for (let i = 0; i < currentNode.children.length; i++) {
  //         queue.push(currentNode.children[i]);
  //       }
  //     }
  //     return sum;
  //   }
  // }

  // sumValues(sum = 0) {
  //   if (!this.root) return sum;
  //   const treeStack = [this.root];
  //   while (treeStack.length) {
  //     const currentStack = treeStack.shift();
  //     if (currentStack.val) { //
  //       sum += currentStack.val;
  //     }
  //     for (let child of currentStack.children) {
  //       treeStack.push(child);
  //     }
  //   }

  //   return sum;
  // }

  // sumValues(val) {
  //   if (!this.root) return 0;
  //   let sum = 0;

  //   let toVisitQueue = [this.root];
  //   while (toVisitQueue.length) {
  //     let currentNode = toVisitQueue.shift();
  //     if (!currentNode) continue;
  //     sum += currentNode.val;
  //     for (let i = 0; i < currentNode.children.length; i++) {
  //       toVisitQueue.push(currentNode.children[i]);
  //     }
  //   }
  //   return sum;
  // }


  sumValues() {
    if (!this.root) return 0;
    let sum = 0;

    let toVisitQueue = [this.root]; // create a queue to hold the nodes to visit
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();
      if (!currentNode) return sum += currentNode.val;

      sum += currentNode.val;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */
  //Given a n-ary tree of integers, return the count of all the even integers.

  // countEvens(count = 0, rootNode = this.root) {
  //   if (!rootNode) return count; 
  //   let currentNode = rootNode.push(rootNode.val + this.countEvens(rootNode.children, count));
  //   return currentNode;
  // }



  // countEvens(count = 0) {
  //   if (!this.root) return count;
  //   let toVisitQueue = [this.root];
  //   while (toVisitQueue.length) {
  //     let currentNode = toVisitQueue.shift();
  //     if (!currentNode) continue;
  //     if (currentNode.val % 2 === 0) count++;
  //     for (let child of currentNode.children) {
  //       toVisitQueue.push(child);
  //     }
  //   }
  //   return count;
  // }


  countEvens() {
    // base case 
    if (!this.root) return 0;
    let count = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();
      if (!currentNode) continue;
      if (currentNode.val % 2 === 0) count++;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return count;
  }


  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();
      if (!currentNode) continue;
      if (currentNode.val > lowerBound) count++;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return count;

  }
}

module.exports = {
  Tree,
  TreeNode
};

emptyTree = new Tree();

// build small tree
let nSmall = new TreeNode(1);
let nSmall2 = new TreeNode(2);
nSmall.children.push(nSmall2);
smallTree = new Tree(nSmall);

// build large tree
let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);

console.log("Sum of smallTree:", smallTree.sumValues()); //3
console.log("Sum of largeTree:", largeTree.sumValues()); // 36
console.log("Count of evens in smallTree:", smallTree.countEvens()); //1
console.log("Count of evens in largeTree:", largeTree.countEvens()); //4
console.log("Count evens in smallTree:", smallTree.countEvens()); //1
console.log("Count evens in largeTree:", largeTree.countEvens()); //4
console.log("Small tree numGreater:", smallTree.numGreater(0)); //2 
console.log("Large tree numGreater:", largeTree.numGreater(0)); //8
console.log("Small tree numGreater:", smallTree.numGreater(1)); //1
console.log("Large tree numGreater:", largeTree.numGreater(1)); //7