# Security — royalty split

## Closed in tests

| Issue | Behavior |
| --- | --- |
| floor to zero | allowed; seller keeps full price |
| bps > 10000 | refused |
| Conservation | royalty + seller === price |
| Network | not called |

## Attack angles

1. Presenting the split as money already paid.  
2. Rounding up dust royalty.  
3. Confusing this with AtomicMarket settlement fee reads.

## Honesty limits

Pure integers. No wallet.
