const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  // Check objects' key length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // for (let [key,value] of Object.entries(object1))

  for (let key of Object.keys(object1)) {
    // Check if value is an array
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    // Check primitive type value
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// assertObjectsEqual FUNCTION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (!eqObjects(actual, expected)) {
    console.log(
      `💥️💥️💥️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅️✅️✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};

// TEST CASES
// Check same object
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertObjectsEqual(ab, ba);

//Check different keys length
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertObjectsEqual(ab, abc);

// Check different order with primitive
const xy = { a: "1", b: "1" };
const yx = { b: "2", a: "1" };
console.log(eqObjects(xy, yx)); // => false
assertObjectsEqual(xy, yx);

// Check different keys
const x1 = { a: "1", b: "1" };
const x2 = { a: "1", c: "1" };
console.log(eqObjects(x1, x2)); // => false
assertObjectsEqual(x1, x2);

// Check different key order with array
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(cd, dc);

// Check different arrays
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
assertObjectsEqual(cd, cd2);

// Check one primitive , one array, SAME OBJECTS
const a1 = { c: "1", d: ["2", 3, 4] };
const a2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(a1, a2)); // => true
assertObjectsEqual(a1, a2);
