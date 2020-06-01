const middle = require("../middle");
const assert = require("chai").assert;
const expect = require("chai").expect;
// const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it("return [] for [1]", () => {
    expect(middle([1])).to.deep.equal([]);
  });
  it("return [] for [1,2]", () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });
  it("return [3] for [1,2,3,4,5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.deep.equal([3]);
  });
  it("return [3,4] for [1,2,3,4,,6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.deep.equal([3, 4]);
  });
});

// ssertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
