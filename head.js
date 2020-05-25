// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

const head = function (array) {
  return array !== null ? array[0] : undefined;
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));
