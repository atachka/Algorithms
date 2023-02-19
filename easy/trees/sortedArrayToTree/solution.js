function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//  * @param {number[]} nums
//  * @return {TreeNode}
//  */
var sortedArrayToBST = function (nums) {
  if (nums === null || !nums.length) {
    return null;
  }

  let middle = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[middle]);
  console.log(nums.slice(0, middle));
  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle + 1, nums.length));
  return node;
};

console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
