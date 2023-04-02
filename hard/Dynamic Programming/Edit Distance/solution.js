function editDistance(str1, str2) {
  // Determine which string is smaller and which is larger
  let smaller = str1.length < str2.length ? str1 : str2;
  let larger = str1.length >= str2.length ? str1 : str2;

  // Initialize the first row of the dynamic programming matrix
  const evenRow = new Array(smaller.length + 1).fill(null).map((_, idx) => idx);
  console.log(evenRow);
  const oddRow = new Array(smaller.length + 1).fill(null);

  // Iterate over each character in the larger string
  for (let i = 1; i <= larger.length; i++) {
    let currentRow, prevRow;
    // Determine which row of the matrix to use based on the current iteration index
    if (i % 2 === 0) {
      currentRow = evenRow;
      prevRow = oddRow;
    } else {
      currentRow = oddRow;
      prevRow = evenRow;
    }
    // Initialize the first element of the current row
    currentRow[0] = i;
    // Iterate over each character in the smaller string
    for (let j = 1; j <= smaller.length; j++) {
      // If the current characters in both strings match, copy the value from the previous diagonal element
      if (larger[i - 1] === smaller[j - 1]) {
        currentRow[j] = prevRow[j - 1];
      } else {
        // If the current characters in both strings do not match, take the minimum of the previous diagonal, horizontal, and vertical elements and add 1
        currentRow[j] =
          Math.min(prevRow[j - 1], prevRow[j], currentRow[j - 1]) + 1;
      }
    }
  }
  // Return the final element in the dynamic programming matrix
  return larger.length % 2 === 0
    ? evenRow[smaller.length]
    : oddRow[smaller.length];
}
