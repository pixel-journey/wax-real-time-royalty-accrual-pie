import { ATOMIC_ORIGIN, atomicSales } from "./api";
import { splitSale } from "./royalty";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const split = splitSale(10_000n, 500);
if (!split.ok) throw new Error(split.reason);
const five = split;

export const USE_CASES: UseCase[] = [
  {
    title: "A sales list is not this split",
    detail: `500 bps of 10000 is royalty ${five.royalty.toString()} and seller ${five.seller.toString()}. The sales request is not sent and not summed.`,
    request: atomicSales(ATOMIC_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "One sale id is still not a payout",
    detail: "1 bp of 100 truncates to a royalty of 0. No transfer to a creator is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicmarket/v1/sales/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (five.royalty + five.seller !== 10_000n) throw new Error("split");
}
