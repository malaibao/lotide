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
  console.log(a);
  console.log(b);

  isEqual
    ? console.log("✅️✅️✅️ Assertion passed: " + a + " === " + b)
    : console.log("💥️💥️💥️ Assertion failed: " + a + " !== " + b);
};

const middle = (input) => {
  let middleElements = [...input];
  if (input.length <= 2) return [];

  let mid = Math.floor(input.length / 2);
  if (input.length % 2 === 0)
    middleElements = middleElements.splice(mid - 1, 2);
  else middleElements = middleElements.splice(mid, 1);

  return middleElements;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
