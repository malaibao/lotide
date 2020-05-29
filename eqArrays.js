// eqArray FUCTION
/*
const eqArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
*/

//eqArray FUNCTION with nested array check
const eqArrays = (a, b) => {
  // Check arrays length
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      return eqArrays(a[i], b[i]);
    } else if (a[i].length !== b[i].length) {
      return false;
    }
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

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
