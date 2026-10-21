"use client";

import { splitSale } from "./royalty";

export function Demo() {
  const split = splitSale(10_000n, 500);
  const tiny = splitSale(100n, 1);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Royalty first, then the seller</h1>
      <p className="lede">500 basis points is 5 percent. 1 basis point of 100 truncates to 0. No sale was read and nothing is paid out.</p>
      {split.ok && tiny.ok ? (
        <p>
          On 10000, royalty {split.royalty.toString()} and seller {split.seller.toString()}. On 100 at 1 bp, royalty {tiny.royalty.toString()}.
        </p>
      ) : (
        <p>The sample failed.</p>
      )}
    </main>
  );
}
