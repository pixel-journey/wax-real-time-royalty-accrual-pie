# wax-real-time-royalty-accrual-pie

**Real-Time Royalty Accrual Pie**

An accounting layout visualizing secondary sales royalty fee splits and real-time distribution payouts to project creator wallets on WAX. Provides transparent, live insight into royalty flows for creators and communities.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Advanced Compliance, Accounting Analytics & Financial Forensics  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-real-time-royalty-accrual-pie.git
cd wax-real-time-royalty-accrual-pie
npm install
npm run dev
```

Select a collection in the demo to instantly see the live royalty accrual pie and distribution breakdown.

---

## Why This Blueprint?

Creators often lack clear, real-time visibility into how secondary sale royalties are flowing to them and their team. This tool provides a beautiful, live pie chart and breakdown of royalty splits and recent payouts, building trust and transparency.

---

## Architecture & Data Flow

```
Fetch Secondary Sales Data (AtomicMarket)
       ↓
Calculate Royalty Splits in Real Time
  - Creator share
  - Team / collaborator shares
  - Platform fees (if any)
       ↓
Render Interactive Pie Chart
  - Live accrual updates
  - Recent payout history
  - Exportable reports
```

All calculations are client-side.

---

## Complete Repository Structure

Follows Pixel Journey high standards.

Key parts:
- `app/` — Main royalty dashboard
- `components/` — RoyaltyPie, PayoutHistory, SplitBreakdown, ExportPanel
- `hooks/` — useRoyaltyData, useAccrualCalculation
- `lib/wax/` — royalty-calculator.ts, payout-parser.ts, atomicmarket-history.ts
- `public/mock-data/` — Sample collections with realistic royalty flows
- `.github/workflows/` — CI automation

Detailed comments on royalty calculation and payout parsing.

---

## Key WAX Concepts Explained

- **Secondary Sale Royalties**: How AtomicMarket and collection configs handle creator royalties on resales.
- **Real-Time Accrual**: Calculating and displaying royalty flows as sales happen.
- **Split Visualization**: Clearly showing how royalties are divided among creators, teams, and platforms.
- **On-Chain Transparency**: All underlying sales and config data is public and verifiable.

This is **WAX-primary** (AtomicMarket + collection configs) but the royalty visualization pattern is portable to other chains with similar marketplace royalty systems.

---

## Design Specifications

- Clean, modern pie chart with interactive segments
- Clear payout history and breakdown tables
- Responsive design
- Accessible controls and detailed explanations

Aligned with Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui, charting library
- **Data**: AtomicMarket history with efficient fetching and client-side processing
- **Performance**: Real-time updates with React Query caching
- **Demo Mode**: Full interactive pie with realistic royalty flows

See catalog standards for WAX rate limiting and marketplace best practices.

---

## Demo & Usage

- Explore pre-loaded collections with sample royalty flows
- View live accrual pie and recent payouts
- Hover segments for detailed split info
- Export reports or payout history
- Filter by time period or royalty recipient

Designed for immediate transparency and insight.

---

## Customization

- Adjust split visualization and reporting formats
- Add support for custom royalty structures or teams
- Integrate with other compliance or creator tools in the catalog
- Customize charts and output

---

## Roadmap

- v1: Core royalty pie + payout history + demo
- v1.1: Advanced filtering and real-time alerts
- Future: Deeper integration with compliance and creator dashboard tools

---

## Contributing & Credits

Built with care for transparent royalty experiences on WAX.

MIT License.

Following the production-quality educational standards from the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*