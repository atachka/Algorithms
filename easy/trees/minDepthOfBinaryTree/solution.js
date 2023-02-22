var minDepth = function (root) {
  let min = Infinity;

  t(root, 1);
  return min === Infinity ? 0 : min;
  function t(node, cur) {
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      min = cur < min ? cur : min;
    }
    t(node.left, cur + 1);
    t(node.right, cur + 1);
    return;
  }
};
