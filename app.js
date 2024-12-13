export function classifyNumber(A, B) {
    if (A > 0 && B < 5) {
      return "Condition Met";
    } else if (A <= 0 && B >= 5) {
      return "Alternate Condition Met";
    } else {
      return "No Condition Met";
    }
  }
  