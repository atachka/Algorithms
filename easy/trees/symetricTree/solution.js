//recursion
let isSymmetricRecursion = function (root) {
  let check = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }

    return check(left.left, right.right) && check(left.right, right.left);
  };

  return check(root.left, root.right);
};
//iteration
let isSymmetricItteration = function (root) {
  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }
  let q = [];
  q.unshift(root);
  q.unshift(root);
  let leftNode = 0;
  let rightNode = 0;
  while (q.length) {
    leftNode = q[0];
    q.shift();
    rightNode = q[0];
    q.shift();
    if (leftNode.val !== rightNode.val) {
      return false;
    }
    if (leftNode.left && rightNode.right) {
      q.unshift(leftNode.left);
      q.unshift(rightNode.right);
    } else if (leftNode.left || rightNode.right) {
      return false;
    }
    if (leftNode.right && rightNode.left) {
      q.unshift(leftNode.right);
      q.unshift(rightNode.left);
    } else if (leftNode.right || rightNode.left) {
      return false;
    }
  }
  return true;
};
