# Education — royalty first, then the seller

> **Rung:** `npm test` passes. `floor(price * bps / 10000)`. Not a live payout and not a pie of chain history.  
> **The test is the rule.** Dust floors: [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer). AtomicMarket collection fees are a different contract.

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute royalty and seller remainder for a sale price |
| Intermediate | Show that 1 bps of 100 floors to zero and still conserves price |
| Masterclass | Separate this teaching split from live AtomicMarket royalties |

---

## Beginner — one scene

| Call | Locked result |
| --- | --- |
| `splitSale(10000n, 500)` | royalty `500n`, seller `9500n` |
| `splitSale(100n, 1)` | royalty `0n`, seller `100n` |
| `splitSale(10n, 10001)` | not ok — bps stop at 10000 |

Seller gets `price - royalty`, so the two parts always sum to the price.

```bash
npm test
```

---

## Intermediate

| Rule | Detail |
| --- | --- |
| Royalty | `floor(price * bps / 10000)` |
| bps | integer 0 .. 10000 |
| Conservation | royalty + seller === price |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Round 1 bps of 100 up | stays 0 |
| bps 10001 | refused |
| Call this a live payout | arguments only |

### Exercises

1. 10000 at 500 bps — royalty? (**500**.)  
2. 100 at 1 bps — royalty? (**0**.)  
3. Does seller + royalty equal price when royalty is 0? (**Yes**.)

---

## Masterclass

Read the **collection** you actually sell into for real market fee rules. This file never queries AtomicMarket or Hyperion.

---

## What this course will not teach

- Live royalty settlement
- Multi-party pie charts from chain history
- That floor dust is paid to anyone
