const countLetters = require("../countLetters");
const expect = require("chai").expect;

describe("#countLetters", () => {
  it("return { h: 2, e: 2, l: 4, o: 2 } for ('Hello Hello')", () => {
    const result1 = countLetters("Hello Hello");
    expect(result1).deep.equal({ h: 2, e: 2, l: 4, o: 2 });
  });

  it("return { h: 2, e: 2, l: 4, o: 2 } for ('Hello Hello')", () => {
    const result1 = countLetters("lighthouse in the house");
    expect(result1).deep.equal({
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});
