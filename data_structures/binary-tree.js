/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; // value of the node
    this.left = left; // left child node, left node is a leaf node
    this.right = right; // right child node, right node is a leaf node
    //Nodes that directly follow the root node are the children of the root node, right???
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root; // root node, 
  }


  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  //Given a binary tree, find its minimum depth. 
  //The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.

  // minDepth() {
  //   if (!this.root) return 0; // if the tree is empty, return 0


  //   function minDepthHelper(node, depth = 1) {
  //     if (!node.left && !node.right) return depth; // if the node is not a leaf, return the depth
  //     if (!node.left) return minDepth(node.right, depth + 1); // if the node has no left child, go to the right child
  //     if (!node.right) return minDepth(node.left, depth + 1); // if the node has no right child, go to the left child
  //     return Math.min(minDepth(node.left, depth + 1), minDepth(node.right, depth + 1)); // if the node has both children, go to the left child if the left child has a smaller depth, otherwise go to the right child
  //   }
  //   console.log(minDepth(this.root));
  //   return minDepth(this.root);
  // }

  minDepth(rootNode = this.root, depth = 0) {
    if (!rootNode) return depth; // if the tree is empty, return 0
    const leftDepth = this.minDepth(rootNode.left, depth + 1); // leftDepth equals the minimum depth of the left child node 
    const rightDepth = this.minDepth(rootNode.right, depth + 1); // rightDepth equals the minimum depth of the right child node
    // console.log(leftDepth, rightDepth);
    return Math.min(leftDepth, rightDepth); // return the minimum depth of the left child node and the right child node
  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(rootNode = this.root, depth = 0) {
    if (!rootNode) return depth; // if the tree is empty, return 0
    const leftDepth = this.maxDepth(rootNode.left, depth + 1);
    const rightDepth = this.maxDepth(rootNode.right, depth + 1);
    return Math.max(leftDepth, rightDepth); // return the maximum depth of the left child node & right child node

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  //Given a binary tree, find the maximum path sum. 
  //The path may start and end at any node in the tree, but no node can be visited more than once.

  //failed test case for handling complex trees and negative values
  // maxSum(rootNode = this.root) {
  //   //base case
  //   if (!rootNode) return 0;

  //   //recursive case
  //   let leftSum = this.maxSum(rootNode.left);
  //   let rightSum = this.maxSum(rootNode.right);
  //   let maxSum = Math.max(leftSum, rightSum);
  //   let returnMaxSum = rootNode.val + leftSum + rightSum;
  //   return Math.max(maxSum, returnMaxSum);
  // }

  // maxSum() {
  //   let sum = 0;

  //   function maxSumHelper(node) {
  //     if (!node) return 0;
  //     let leftSum = maxSumHelper(node.left);
  //     let rightSum = maxSumHelper(node.right);
  //     let maxSum = Math.max(leftSum, rightSum);
  //     let returnMaxSum = node.val + leftSum + rightSum;
  //     return Math.max(maxSum, returnMaxSum);
  //   }
  //   return maxSumHelper(this.root);
  // }

  maxSum() {
    let sum = 0;

    function maxSumHelper(node) {
      if (!node) return 0; // if the tree is empty, return 0
      let leftSum = maxSumHelper(node.left); // leftSum equals the maximum sum of the left child node
      let rightSum = maxSumHelper(node.right); // rightSum equals the maximum sum of the right child node
      sum = Math.max(sum, node.val + leftSum + rightSum); // sum equals the maximum sum of the left child node and the right child node
      return Math.max(0, leftSum, rightSum) + node.val; // return the maximum sum of the left child node and the right child node plus the value of the current node
    }
    maxSumHelper(this.root); // call the maxSumHelper function
    return sum;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  //Given a binary tree and a integer x. Find and return the value of the node with next larger element in the tree i.e. 
  //find a node with value just greater than x. Return null if no node is present with value greater than x.

  // nextLarger(lowerBound) {
  //   // base case
  //   if (!this.root) return null;

  //   let queue = [this.root]; // create a queue to store the nodes in the tree
  //   let nextLarger = null; // create a variable to store the next larger value

  //   while (queue.length) { // while the queue is not empty
  //     let currentNode = queue.shift(); // remove the first node in the queue and assign it to currentNode
  //     let currentValue = currentNode.val; // assign the value of the current node to currentValue
  //     let higherThanLowerBound = currentValue > lowerBound; // check if the current value is greater than the lower bound
  //     let lowerThanNextLarger = currentValue < nextLarger; // check if the current value is less than the next larger value
  //     if (higherThanLowerBound && lowerThanNextLarger) { // if the current value is greater than the lower bound and less than the next larger value
  //       nextLarger = currentValue; // assign the current value to the next larger value
  //     }
  //     if (currentNode.left) queue.push(currentNode.left); // if the current node has a left child, add/ push the left child to the queue
  //     if (currentNode.right) queue.push(currentNode.right); // if the current node has a right child, add/ push the right child to the queue
  //   }
  //   return nextLarger; // return the next larger value
  // }

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // let's use BFS for this!
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null; // 

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {

  // }
}

module.exports = {
  BinaryTree,
  BinaryTreeNode
};

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

console.log("1. Small tree min depth:", smallTree.minDepth(2)); // 3
console.log("2. Large tree min depth:", largeTree.minDepth(2)); // 3
console.log("3. Small tree max depth:", smallTree.maxDepth(2)); // 3
console.log("4. Large tree max depth:", largeTree.maxDepth(2)); // 5
console.log("5. Small tree max sum:", smallTree.maxSum()); // 16
console.log("6. Large tree max sum:", largeTree.maxSum()); // 21
console.log("7. Small tree next larger:", smallTree.nextLarger(5)); // 6
console.log("8. Large tree next larger:", largeTree.nextLarger(6)); // null