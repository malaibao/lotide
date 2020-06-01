const assert = require("chai").assert;
const expect = require("chai").expect;
const tail = require("../tail");

describe("#tail", () => {
  it("return ['lighthouse', 'Labs'] for ['Yo yo', 'Lighthouse', 'Labs']", () => {
    expect(tail(["Yo yo", "Lighthouse", "Labs"])).to.deep.equal([
      "Lighthouse",
      "Labs",
    ]);
  });

  it("return [] for [1]", () => {
    expect(tail([1])).to.deep.equal([]);
  });

  it("return [] for []", () => {
    expect(tail([])).to.deep.equal([]);
  });
  it("return [2,3,4,5,6,7,8] for [1,2,3,4,5,6,7,8]", () => {
    expect(tail([1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([2, 3, 4, 5, 6, 7, 8]);
  });
});
