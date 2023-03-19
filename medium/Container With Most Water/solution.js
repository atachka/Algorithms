var maxArea = function (height) {
  let left = 0; // left pointer
  let right = height.length - 1; // right pointer
  let maxArea = 0; // initialize maximum area variable

  while (left < right) {
    // continue until the pointers meet
    // calculate the area between the two pointers
    const area = Math.min(height[left], height[right]) * (right - left);
    // update maximum area if the calculated area is larger
    maxArea = Math.max(maxArea, area);

    // move the pointer with the smaller height inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea; // return the maximum area
};
