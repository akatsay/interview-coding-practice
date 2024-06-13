// Definition for a binary tree node
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    return TreeNode;
}());
function reverseBinaryTree(root) {
    //Base case
    if (!root) {
        return null;
    }
    //Recursive case
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    reverseBinaryTree(root.left);
    reverseBinaryTree(root.right);
    return root;
}
// Example usage:
// Construct the example tree
var root = new TreeNode(1);
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
