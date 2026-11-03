import { describe, expect, it } from "vitest";
import { goalPercent } from "@/lib/donation-goal";

describe("goalPercent", () => {
  it("computes percentage of target raised", () => {
    expect(goalPercent(650_000, 1_000_000)).toBe(65);
  });
  it("caps at 100 when target exceeded", () => {
    expect(goalPercent(1_500_000, 1_000_000)).toBe(100);
  });
  it("returns 0 for a zero target", () => {
    expect(goalPercent(500, 0)).toBe(0);
  });
});
