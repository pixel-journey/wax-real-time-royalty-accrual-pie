# AI handoff — royalty then seller

## Non-negotiables

1. `floor(price * bps / 10000)`. Seller receives `price - royalty` so the two sum to the price even when royalty floors to zero.
2. `splitSale(10000n, 500)` → royalty **500**, seller **9500**.
3. `splitSale(100n, 1)` → royalty **0**, seller **100**. One basis point of 100 does not round up.
4. `splitSale(10n, 10001)` refused. Basis points stop at **10000**.
5. Not a live payout and not a pie of chain history. AtomicAssets market fees are a different contract — read the collection you sell into.
6. HTTP stays `executed: false`.

## Prompt seeds

- "100 at 1 bps — royalty and seller."
- "10001 bps — refused?"
- "Refuse labeling this a completed market settlement."

## Do not

- Round royalty up.  
- Fetch AtomicMarket history inside unit tests.
