/*
unroll takes as argument a square array of arrays (i.e. a grid with n rows and n columns). An input could look like this:

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

unroll will return a single array containing the values in the square, obtaining the values by traversing the square in a spiral: from the top-left corner, moving all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeating until there are no values remaining.

For the above example, unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].
*/

function unroll(squareArray) {
  let len = squareArray.length;
  let start = 0;
  let results = [];

  while (len > 0) {
    // Across top row from left to right
    for (let i = start; i < len; i++) {
      results.push(squareArray[start][i]);
    }

    // Down right side
    for (let i = start + 1; i < len; i++) {
      results.push(squareArray[i][len - 1]);
    }

    // Back across bottom row
    for (let i = len - 2; i >= start; i--) {
      results.push(squareArray[len - 1][i]);
    }

    // Up left side
    for (let i = len - 2; i >= start + 1; i--) {
      results.push(squareArray[i][start]);
    }

    len -= 1;
    start += 1;
  }
  console.log(results);
  return results;
}

unroll([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

module.exports = unroll;
