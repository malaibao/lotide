const countLetters = (input) => {
  let str = input.split(" ").join("").toLowerCase();
  let countObj = {};
  for (let char of str) {
    if (!(char in countObj)) {
      // if not exists
      countObj[char] = 1;
    } else {
      countObj[char]++;
    }
  }
  console.log(countObj);
};

// assertEqual Func
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

countLetters("Hello Hello");
countLetters("lighthouse in the house");
