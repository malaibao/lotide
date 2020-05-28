const findKey = (obj, callback) => {
  for (let [key, value] of Object.entries(obj)) {
    if (callback(value)) {
      return key;
    }
  }
  return undefined;
};

// assertEqual Func
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const ans = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(ans, "noma");
