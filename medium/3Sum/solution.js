function threeSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  // Initialize an empty array to hold the result
  const result = [];
  // Loop through each element of the array as the fixed element
  for (let i = 0; i < nums.length - 2; i++) {
    // If the fixed element is greater than zero, then there cannot be a triplet with a sum of zero
    if (nums[i] > 0) break;
    // Skip the duplicate fixed elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // Use two pointers to find the other two elements that add up to the negative of the fixed element
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      // Calculate the sum of the three elements
      const sum = nums[i] + nums[left] + nums[right];
      // If the sum is less than zero, increment the left pointer
      if (sum < 0) {
        do {
          left++;
        } while (left < right && nums[left] === nums[left - 1]); // Skip the duplicate left elements
      }
      // If the sum is greater than zero, decrement the right pointer
      else if (sum > 0) {
        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1]); // Skip the duplicate right elements
      }
      // If the sum is equal to zero, add the triplet to the result array and increment the left pointer and decrement the right pointer
      else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // Skip the duplicate left elements
        while (left < right && nums[left] === nums[left - 1]) left++;
        // Skip the duplicate right elements
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  // Return the result array
  return result;
}
