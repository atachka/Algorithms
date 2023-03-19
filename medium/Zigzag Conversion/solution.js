var convert = function (s, numRows) {
  // If there is only one row or the string is empty, return the string itself
  if (numRows === 1 || s.length === 0) {
    return s;
  }

  // Create an array of empty strings, one for each row
  const rows = new Array(numRows).fill("");

  // Set up variables to keep track of the current row and direction
  let currentRow = 0;
  let goingDown = false;

  // Loop through the string, adding each character to the appropriate row
  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    // If we've reached the top or bottom row, switch direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move to the next row in the appropriate direction
    currentRow += goingDown ? 1 : -1;
  }

  // Combine the rows into a single string and return it
  return rows.join("");
};
