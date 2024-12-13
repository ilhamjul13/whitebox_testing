import { expect } from "chai";
import { classifyNumber } from "../app.js";

describe("Condition Coverage Tests", () => {
  it("should return 'Condition Met' when A > 0 and B < 5 (both conditions true)", () => {
    const result = classifyNumber(1, 3);
    expect(result).to.equal("Condition Met");
  });

  it("should return 'No Condition Met' when A > 0 and B >= 5 (only A > 0 is true)", () => {
    const result = classifyNumber(1, 5);
    expect(result).to.equal("No Condition Met");
  });

  it("should return 'No Condition Met' when A <= 0 and B < 5 (only B < 5 is true)", () => {
    const result = classifyNumber(0, 3);
    expect(result).to.equal("No Condition Met");
  });

  it("should return 'Alternate Condition Met' when A <= 0 and B >= 5 (both conditions true)", () => {
    const result = classifyNumber(-1, 5);
    expect(result).to.equal("Alternate Condition Met");
  });
});
