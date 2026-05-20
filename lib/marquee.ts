/** Top band — scrolls left. */
export const marqueeItems = [
  "Full-stack engineering",
  "MVP delivery",
  "Design systems",
  "UX research",
  "API & backend",
  "Healthcare SaaS",
  "Logistics platforms",
  "Fintech dashboards",
  "Post-launch iteration",
] as const;

/** Bottom band — scrolls right (offset list for visual variety). */
export const marqueeItemsRow2 = [
  "Brand & site",
  "Product strategy",
  "Front-end engineering",
  "Technical discovery",
  "SaaS architecture",
  "Launch support",
  "Code review",
  "Performance tuning",
  "Team handoff",
] as const;

export const allMarqueeLabels = [...marqueeItems, ...marqueeItemsRow2] as const;
