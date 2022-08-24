/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
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
    console.log(leftDepth, rightDepth);
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

  maxSum(rootNode = this.root) {
    if (!this.root) return 0; // if the tree is empty, return 0
    const leftDepth = this.maxSum(this.root.left, 0); // leftDepth equals the maximum sum of the left child node 
    const rightDepth = this.maxSum(this.root.right, 0); // rightDepth equals the maximum sum of the right child node
    return Math.max(leftDepth, rightDepth); // return the maximum sum of the left child node & right child node
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = {
  BinaryTree,
  BinaryTreeNode
};