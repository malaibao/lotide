const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// Check nested array
assertEqual(
  eqArrays(
    [1, [55, 44, 77, 88], 2, 3, [9, 8, 7]],
    [1, [55, 44, 77, 88], 2, 3, [9, 8, 7]]
  ),
  true
);

assertEqual(
  eqArrays(
    [1, [55, 44, 77], 2, 3, [9, 8, 7]],
    [1, [55, 44, 77, 88], 2, 3, [9, 8, 7]]
  ),
  false
);
assertEqual(
  eqArrays([1, 2, 3, [9, 8, 7]], [1, [55, 44, 77, 88], 2, 3, [9, 8, 7]]),
  false
);

assertEqual(
  eqArrays(
    [1, 2, 3, [9, 8, [8, 8], 7]],
    [1, [55, 44, 77, 88], 2, 3, [9, 8, 7]]
  ),
  false
);

assertEqual(
  eqArrays([1, 2, 3, [9, 8, [8, 8], 7]], [1, 2, 3, [9, 8, [8, 8], 7]]),
  true
);
