# Royalty, then the seller

**Trust label:** `educational-reference`  
**Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

Basis points of a price, truncated toward zero. Not a live payout.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/royalty.ts` | The pure rules |
| `src/royalty.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

The course is [EDUCATION.md](EDUCATION.md). `npm test` runs the rules. `npm run dev` opens the page.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
