// Definition for a binary tree node
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val;
    this.left = this.right = null;
  }
}

function reverseBinaryTree(root: TreeNode) {
  //Base case
  if (!root) {
    return null
  }
  //Recursive case
  let temp = root.left
  root.left = root.right
  root.right = temp
  reverseBinaryTree(root.left)
  reverseBinaryTree(root.right)

  return root

}

// Example usage:
// Construct the example tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Print original tree structure
console.log("Original Tree:");
console.log(root);

// Reverse the binary tree
reverseBinaryTree(root);

// Print reversed tree structure
console.log("Reversed Tree:");
console.log(root);