const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("countOnly", () => {
  it("return 1 for result1['Jason']", () => {
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
    });

    assert.equal(result1["Jason"], 1);
  });

  it("return 2 for result1['Fang']", () => {
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
    });

    assert.equal(result1["Fang"], 2);
  });

  it("return undefined for result1['Karima']", () => {
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
    });

    assert.equal(result1["Karima"], undefined);
  });
});
