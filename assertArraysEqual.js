// eqArray FUCTION
const eqArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// assertArraysEqual FUCTION
const assertArraysEqual = (a, b) => {
  let isEqual = eqArrays(a, b);

  isEqual
    ? console.log(`✅️✅️✅️ Assertion passed: ${a} === ${b}`)
    : console.log(`💥️💥️💥️ Assertion failed: ${a} !== ${b}`);
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
