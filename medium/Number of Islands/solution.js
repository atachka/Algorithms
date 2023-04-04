const numIslands = function (grid) {
  // check if the grid is valid
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  // define the BFS function
  const bfs = (row, col) => {
    // initialize a queue with the current island cell
    const queue = [[row, col]];
    // mark the current island cell as visited
    grid[row][col] = "0";

    // iterate through the queue while it's not empty
    while (queue.length > 0) {
      // dequeue the current cell from the front of the queue
      const [currentRow, currentCol] = queue.shift();

      // check the four neighboring cells for unvisited island cells
      if (currentRow - 1 >= 0 && grid[currentRow - 1][currentCol] === "1") {
        // add the neighboring cell to the queue
        queue.push([currentRow - 1, currentCol]);
        // mark the neighboring cell as visited
        grid[currentRow - 1][currentCol] = "0";
      }

      if (
        currentRow + 1 < numRows &&
        grid[currentRow + 1][currentCol] === "1"
      ) {
        queue.push([currentRow + 1, currentCol]);
        grid[currentRow + 1][currentCol] = "0";
      }

      if (currentCol - 1 >= 0 && grid[currentRow][currentCol - 1] === "1") {
        queue.push([currentRow, currentCol - 1]);
        grid[currentRow][currentCol - 1] = "0";
      }

      if (
        currentCol + 1 < numCols &&
        grid[currentRow][currentCol + 1] === "1"
      ) {
        queue.push([currentRow, currentCol + 1]);
        grid[currentRow][currentCol + 1] = "0";
      }
    }
  };

  // iterate through each cell in the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // if the cell is an unvisited island cell
      if (grid[row][col] === "1") {
        // increment the island count
        count++;
        // call the BFS function on the current cell
        bfs(row, col);
      }
    }
  }

  // return the total number of islands
  return count;
};

// Time Complexity:

// The outer loop runs numRows * numCols times, which takes O(numRows * numCols) time.
// The inner BFS loop may visit each cell in the grid at most once, taking O(numRows * numCols) time overall in the worst case.
// Therefore, the total time complexity of the algorithm is O(numRows * numCols) + O(numRows * numCols) = O(numRows * numCols).
// Space Complexity:

// We use a queue to store the neighboring cells during BFS.
// The maximum size of the queue is the number of cells in the largest island, which can be at most O(numRows * numCols) in the worst case.
// Therefore, the space complexity of the algorithm is O(numRows * numCols).
// Overall, the algorithm has a time complexity of O(numRows * numCols) and a space complexity of O(numRows * numCols), which are both optimal bounds for this problem.
