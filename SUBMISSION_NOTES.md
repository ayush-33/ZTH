# ZTH Export Finance — Case Study Submission Notes & Design Rationale

## 1. Project Overview

This project introduces **Export Finance** as a new vertical within the existing ZTH business and financial-services platform. The primary objective is to help cross-border businesses, manufacturers, and trading companies understand the working-capital challenges that arise between fulfilling an international order and receiving buyer settlement. By offering structured trade-liquidity pathways alongside ZTH's existing capital, advisory, and technology capabilities, the new service addresses an essential trade operational need without disrupting the established ZTH platform.

---

## 2. Integration Approach

Rather than launching an unrelated standalone website or creating a separate sub-brand, Export Finance is introduced as a dedicated service experience embedded directly within ZTH's existing website architecture:

- **Unified Navigation:** The official ZTH header is fully preserved, displaying existing verticals (*Pre-Fundraising*, *Capital Network*, *Partnership & Advisory*, *SaaS*, *ZTH Insider*) with *Export Finance* clearly identified as the active service state. External platform pathways (*Explore ZTH*, *ZTH OS*) remain intact.
- **Brand Continuity:** The service inherits ZTH's visual hierarchy, brand voice, and design tokens, reinforcing institutional credibility and trust.
- **Cross-Vertical Synergy:** Businesses exploring Export Finance can seamlessly discover and transition into ZTH's broader services (such as investor readiness, capital networks, or growth advisory), creating mutual value across the ecosystem.

---

## 3. Problem Being Addressed

International trade creates a significant timing mismatch for exporters:
- **Upfront Expenditure:** Businesses must fund raw-material procurement, manufacturing, quality control, packaging, freight, and customs clearance well before goods leave the port.
- **Deferred Payment Terms:** Overseas buyers typically negotiate 30- to 90+-day credit terms following bill-of-lading issuance.
- **Working-Capital Strain:** This timing gap ties up core liquidity, restricting the exporter's ability to accept larger purchase orders or manage daily operations.

The website articulates this challenge clearly through a three-stage sequence (*Fulfil the Order → Wait for Payment → Manage Working Capital*), making the operational bottleneck intuitive and relatable. The page positions export finance as a set of structured liquidity solutions to bridge this timing gap, explicitly clarifying that ZTH facilitates advisory review and partner networks rather than providing direct loans or guaranteed financial outcomes.

---

## 4. Information Architecture

The page follows a purposeful, progressive sequence designed to move the visitor from initial discovery to informed action:

1. **Header & Navigation:** Establishes context and demonstrates integration within the existing ZTH platform.
2. **Hero Section (Service Introduction):** Instantly communicates the core value proposition (*"Where Export Orders Meet Working Capital"*) with immediate navigation routes.
3. **The Working-Capital Challenge:** Establishes the real-world operational problem upfront, ensuring visitors recognise their specific friction before evaluating solutions.
4. **Export Finance Options:** Presents four common trade finance routes (*Pre-Shipment*, *Post-Shipment*, *Export Order*, *Receivables Financing*) in a clean 2×2 card grid with clear use cases and an advisory disclaimer.
5. **How It Works:** Outlines a transparent three-step consultative workflow (*Share Requirements → Discuss With Our Team → Explore Next Steps*), demystifying what happens next.
6. **Target Audience:** Identifies four key exporter profiles (*Order-Backed Exporters*, *Export Manufacturers*, *Trading Companies & Export Houses*, *Businesses Expanding Internationally*) to help prospects quickly assess relevance.
7. **Connection with ZTH's Ecosystem:** Connects the trade offering with ZTH's established capabilities (*Capital Network*, *Financial & Strategic Structuring*, *Business & Growth*) via direct platform pathways.
8. **Enquiry Form:** Serves as the focused conversion focal point where interested businesses can initiate a consultation.
9. **Footer:** Retains ZTH's dark footer, platform navigation, contact channels, and corporate links.

---

## 5. User Journey and Calls to Action

The page architecture adheres directly to the case-study journey:

**Discover → Understand → Evaluate → Take Action**

- **Discover:** Visitors encounter Export Finance in the navigation and hero banner. The hero provides two clear options:
  - **Primary CTA ("Discuss Your Export Finance Needs"):** Jumps directly to the Enquiry Form (`#enquiry`) for high-intent visitors ready to discuss requirements.
  - **Secondary CTA ("Learn More"):** Directs visitors to the financing routes (`#financing-options`) to explore foundational details first.
- **Understand:** The Working-Capital Challenge section contextualizes why the cash-flow gap occurs, preparing the visitor to understand the relevant financial instruments.
- **Evaluate:** Visitors evaluate the four financing options, review the three-step consultative workflow, verify their business profile in the target audience section, and see how the offering connects to ZTH's wider ecosystem.
- **Take Action:** The structured Enquiry Form provides a clean, single-point conversion mechanism collecting essential business and trade parameters without multi-step friction.

---

## 6. Visual Design Decisions

The visual execution maintains strict consistency with ZTH's existing brand guidelines:

- **Colour Palette:** Grounded in ZTH's deep navy headings (`#0B1230`, `#1E293B`), signature blue accents (`#245BFF`), and light backgrounds (`#FFFFFF`, `#F8FAFD`), avoiding arbitrary colors or excessive gradients.
- **Typography:** Uses Inter for crisp body copy and Plus Jakarta Sans for refined editorial headings, ensuring clear typographic hierarchy.
- **Card & Component Treatment:** Retains rounded cards (`var(--radius-lg)`), subtle 1px border framing (`var(--border-color)`), and restrained elevation shadows that match the wider ZTH website.
- **Visual Media:** Features a high-resolution commercial seaport shipping visual in the hero, directly connecting the service to physical cross-border logistics.
- **Restraint:** Avoids unnecessary decorative animations, fake widgets, or marketing hyperbole, maintaining a credible, B2B financial-services aesthetic.

---

## 7. Design Outcome

The resulting website successfully introduces Export Finance as a cohesive, natural extension of the ZTH platform. It respects the case-study brief by:
- Preserving the existing website identity, navigation, and visual language without rebuilding or applying unrelated templates.
- Communicating the working-capital problem and potential financing routes with clarity and objective financial-services tone.
- Guiding visitors through a seamless **Discover → Understand → Evaluate → Take Action** progression.
- Providing an honest, usable enquiry experience that gives interested trade businesses a clear, low-friction next step.
