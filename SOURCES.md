# Sources

| Source | Use |
| --- | --- |
| [dust visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer) | Positive amount can still floor to zero |
| [collection config](https://github.com/pixel-journey/wax-atomic-collection-config-visualizer) | Live market fee is a different product |
| [docs.wax.io](https://docs.wax.io/) | Product context |

## Locked by tests

- `floor(price * bps / 10000)`.
- Seller = price − royalty.
- bps ∈ 0..10000.
- Not a live payout.
