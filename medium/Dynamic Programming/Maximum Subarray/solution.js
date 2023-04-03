const maxSubArray = function (nums) {
  let max = nums[0];
  let maxEnding = nums[0];
  for (let i = 0; i < nums.length; i++) {
    maxEnding = Math.max(nums[i], maxEnding + nums[i]);
    max = Math.max(maxEnding, max);
  }
  return max;
};

console.log(maxSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));
