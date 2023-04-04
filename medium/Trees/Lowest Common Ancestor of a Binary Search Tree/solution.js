const lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};

// Time Complexity:

// The time complexity of the algorithm is O(log n), where n is the number of nodes in the binary search tree.
// Since we are traversing the tree in a top-down manner, we can only visit nodes on the path from the root to the lowest common ancestor.
// In a balanced binary search tree, the height of the tree is O(log n), so we can visit at most O(log n) nodes in the worst case.
// Therefore, the time complexity of the algorithm is O(log n).
// Space Complexity:

// The space complexity of the algorithm is O(1) because we are not using any additional data structures to store nodes.
// Therefore, the space complexity of the algorithm is O(1).
// Overall, this algorithm has the best possible time complexity of O(log n) and space complexity of O(1) for the problem of finding the lowest common ancestor of a binary search tree.
