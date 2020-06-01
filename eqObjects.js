const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //   return assertEqual(object1, object2);

  // Check objects' key length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let [key, value] of Object.entries(object1)) {
    // check object type value
    if (typeof value === "object") {
      return eqObjects(value, object2[key]);
    }
    // Check array type value
    if (Array.isArray(value)) {
      return eqArrays(value, object2[key]);
    }

    // Check primitive type value
    if (value !== object2[key]) {
      return false;
    }
  }
  return true;
};

//TEST CASES
// Check nested object
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(
  eqObjects(
    { a: { z: 1, a: { b: 1 } }, b: 2 },
    { a: { z: 1, a: { b: 1 } }, b: 2 }
  )
); // => true

console.log(
  eqObjects(
    { a: { y: 0, z: 1 }, b: 2, c: [1, 2] },
    { a: { y: 0, z: 1 }, b: 2, c: [1, 2] }
  ) // => true
);
