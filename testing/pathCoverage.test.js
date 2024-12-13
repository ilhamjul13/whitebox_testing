import { expect } from "chai";
import { classifyNumber } from "../app.js";

describe("Path Coverage Tests", () => {
  it("should return 'Condition Met' when A > 0 and B < 5", () => {
    const result = classifyNumber(1, 3);
    expect(result).to.equal("Condition Met");
  });

  it("should return 'Alternate Condition Met' when A <= 0 and B >= 5", () => {
    const result = classifyNumber(0, 5);
    expect(result).to.equal("Alternate Condition Met");
  });

  it("should return 'No Condition Met' for other cases", () => {
    const result = classifyNumber(-1, 4);
    expect(result).to.equal("No Condition Met");
  });
});
