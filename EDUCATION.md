# Education — royalty first, then the seller

> **Rung:** `npm test` passes. `floor(price * bps / 10000)`. Not a live payout and not a pie of chain history.  
> **The test is the rule.** A positive amount that can still floor to zero is [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer). AtomicAssets market fees are a different contract. Read the collection you are actually selling into.

## Predict, then run

| Call | Locked result |
| --- | --- |
| `splitSale(10000n, 500)` | royalty `500n`, seller `9500n` |
| `splitSale(100n, 1)` | royalty `0n`, seller `100n`. One basis point of 100 does not round up. |
| `splitSale(10n, 10001)` | not ok. Basis points stop at 10000. |

The seller receives `price - royalty`, so the two numbers sum to the price even when the royalty floored to zero.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this split.
