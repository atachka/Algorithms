function circularArrayLoop(nums) {
  const color = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (color[i] === 0 && DFS(nums, color, i)) {
      return true;
    }
  }
  return false;
}

// This is a helper function that performs a Depth-First Search (DFS) to find cycles
function DFS(nums, color, start) {
  if (color[start] === 2) {
    return false;
  }
  // Mark the current index 'start' as visited
  color[start] = 1;
  // Calculate the index of the next element in the cycle
  let next = start + nums[start];
  // Wrap around to the beginning of the array if necessary
  next = ((next % nums.length) + nums.length) % nums.length;
  // Check if the next element is the same as the starting element or if they have opposite signs (which means the cycle can't continue)
  if (next === start || nums[next] * nums[start] < 0) {
    // Mark the starting index as visited and return false to indicate that no cycle was found
    color[start] = 2;
    return false;
  }
  // If the next element has already been visited (which means a cycle was found), mark the starting index as visited and return true
  if (color[next] === 1) {
    return true;
  }
  // If the next element hasn't been visited yet, recursively call DFS on it
  if (DFS(nums, color, next)) {
    return true;
  }
  // If no cycle was found starting from the next element, mark the starting index as visited and return false
  color[start] = 2;
  return false;
}
