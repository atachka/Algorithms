var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }
  let left = hasPathSum(root.left, targetSum - root.val);
  let right = hasPathSum(root.right, targetSum - root.val);
  if (left || right) {
    return true;
  }
  return false;
};
