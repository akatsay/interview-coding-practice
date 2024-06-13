class TreeNode {
  val: number
  children: TreeNode[]
  constructor(val: number) {
    this.val = val;
    this.children = []
  }
}

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

  const stack = [root]

  while (stack.length > 0) {
    if (!root) {
      return null
    }

    const current = stack.pop()
    current.children.reverse()

    current.children.forEach((node) => {
      stack.push(node)
    })
  }

  return root
}

// Helper function to print N-ary tree
function printTree(root, level = 0) {
  if (!root) {
    return;
  }

  // @ts-ignore
  console.log(String(' ').repeat(level * 2) + root.val);
  for (let child of root.children) {
    printTree(child, level + 1);
  }
}



// Example usage:
// Construct the example tree
let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
root.children.push(node2, node3, node4);

let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
node2.children.push(node5, node6);

let node7 = new TreeNode(7);
let node8 = new TreeNode(8);
node3.children.push(node7, node8);

console.log("Original Tree:");
printTree(root);

// Invert the N-ary tree
reverseTree(root);

console.log("\nInverted Tree:");
printTree(root);