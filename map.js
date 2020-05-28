// map is for modifying array
// modifier is a better variable name
const map = function (array, modifier) {
  const results = [];
  for (let item of array) {
    results.push(modifier(item));
  }
  return results;
};

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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

// TEST CASE 1
const test1 = map([1, 2, 3, 4, 5, 6, 7, 8], (num) => num % 2 === 0);
assertArraysEqual(test1, [false, true, false, true, false, true, false, true]);

// TEST CASE 2
const test2 = map([5, 6, 7, 8, 9], (num) => num * 2);
assertArraysEqual(test2, [10, 12, 14, 16, 18]);

// TEST CASE 3
const test3 = map(["hello", "bye", "evening"], (word) =>
  word.split("").reverse().join("")
);
assertArraysEqual(test3, ["olleh", "eyb", "gnineve"]);

// Extra Scenarios  //
// test if return is undefined
// TEST CASE 4
const test4 = map(test2, (num) => {
  num * 2;
});
assertArraysEqual(test4, [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]);

// test if callback exists
