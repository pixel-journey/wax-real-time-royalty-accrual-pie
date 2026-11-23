import { describe, expect, it } from "vitest";
import { splitSale } from "./royalty";

describe("royalty split", () => {
  it("takes 5 percent and truncates a 1 bp cut of 100", () => {
    expect(splitSale(10_000n, 500)).toEqual({
      ok: true,
      royalty: 500n,
      seller: 9_500n,
    });
    expect(splitSale(100n, 1)).toEqual({ ok: true, royalty: 0n, seller: 100n });
    expect(splitSale(10n, 10_001).ok).toBe(false);
  });

  it("zero bps gives the full price to the seller", () => {
    expect(splitSale(10_000n, 0)).toEqual({
      ok: true,
      royalty: 0n,
      seller: 10_000n,
    });
  });

  it("refuses a negative price", () => {
    expect(splitSale(-1n, 500).ok).toBe(false);
  });
});
