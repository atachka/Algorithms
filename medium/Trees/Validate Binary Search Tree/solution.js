var isValidBST = function (root) {
  return isValidHelper(root, -Infinity, Infinity);
};
const isValidHelper = (node, low, high) => {
  if (!node) {
    return true;
  }
  val = node.val;
  if (
    val > low &&
    val < high &&
    isValidHelper(node.left, low, node.val) &&
    isValidHelper(node.right, node.val, high)
  ) {
    return true;
  }
  return false;
};
