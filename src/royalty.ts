/**
 * Split a sale price by royalty basis points. Truncates toward zero.
 * Not a live payout and not a pie chart of chain history.
 */

export type Split = { ok: false; reason: string } | { ok: true; royalty: bigint; seller: bigint };

export function splitSale(price: bigint, royaltyBps: number): Split {
  if (price < 0n) return { ok: false, reason: "price must be non-negative" };
  if (!Number.isInteger(royaltyBps) || royaltyBps < 0 || royaltyBps > 10_000) {
    return { ok: false, reason: "royaltyBps must be an integer from 0 to 10000" };
  }
  const royalty = (price * BigInt(royaltyBps)) / 10_000n;
  return { ok: true, royalty, seller: price - royalty };
}
