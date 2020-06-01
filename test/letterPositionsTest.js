const letterPositions = require("../letterPositions");
const expect = require("chai").expect;

describe("#letterPositions", () => {
  it("return [1] for letterPositions('hello').e ", () => {
    expect(letterPositions("hello").e).deep.equal([1]);
  });
  it("return an object with arrays of letters", () => {
    expect(letterPositions("lighthouse in the house")).deep.equal({
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
    });
  });
  //   it("", () => {});
});
