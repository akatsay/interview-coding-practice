var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.children = [];
    }
    return TreeNode;
}());
// // recursion solution
// function reverseTree(root: TreeNode) {
//   // base case
//   if (!root) {
//     return null
//   }
//
//   root.children.reverse()
//
//   // recursive case
//   root.children.forEach((node: TreeNode) => {
//     reverseTree(node)
//   })
// }
// loop and stack solution
function reverseTree(root) {
    var stack = [root];
    while (stack.length > 0) {
        if (!root) {
            return null;
        }
        var current = stack.pop();
        current.children.reverse();
        current.children.forEach(function (node) {
            stack.push(node);
        });
    }
    return root;
}
// Helper function to print N-ary tree
function printTree(root, level) {
    if (level === void 0) { level = 0; }
    if (!root) {
        return;
    }
    // @ts-ignore
    console.log(String(' ').repeat(level * 2) + root.val);
    for (var _i = 0, _a = root.children; _i < _a.length; _i++) {
        var child = _a[_i];
        printTree(child, level + 1);
    }
}
// Example usage:
// Construct the example tree
var root = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
root.children.push(node2, node3, node4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
node2.children.push(node5, node6);
var node7 = new TreeNode(7);
var node8 = new TreeNode(8);
node3.children.push(node7, node8);
console.log("Original Tree:");
printTree(root);
// Invert the N-ary tree
reverseTree(root);
console.log("\nInverted Tree:");
printTree(root);
