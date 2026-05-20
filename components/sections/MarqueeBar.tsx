import {
  allMarqueeLabels,
  marqueeItems,
  marqueeItemsRow2,
} from "@/lib/marquee";

type MarqueeRowProps = {
  items: readonly string[];
  duplicate?: boolean;
  bandId: string;
};

function MarqueeTrack({ items, duplicate, bandId }: MarqueeRowProps) {
  return (
    <ul
      className="marquee-track flex shrink-0 items-center"
      aria-hidden={duplicate}
    >
      {items.map((label) => (
        <li
          key={`${bandId}-${duplicate ? "dup-" : ""}${label}`}
          className="flex items-center"
        >
          <span className="whitespace-nowrap px-6 text-[0.625rem] font-medium uppercase tracking-[0.26em] text-ink-muted sm:px-8 sm:text-[0.6875rem] sm:tracking-[0.28em]">
            {label}
          </span>
          <StarSeparator />
        </li>
      ))}
    </ul>
  );
}

function MarqueeRow({
  items,
  direction,
  bandId,
}: {
  items: readonly string[];
  direction: "forward" | "reverse";
  bandId: string;
}) {
  const innerClass =
    direction === "reverse"
      ? "marquee-inner marquee-inner--reverse"
      : "marquee-inner";

  return (
    <div className="marquee overflow-hidden py-2 sm:py-2.5">
      <div className={`${innerClass} flex w-max`}>
        <MarqueeTrack items={items} bandId={bandId} />
        <MarqueeTrack items={items} bandId={bandId} duplicate />
      </div>
    </div>
  );
}

function StarSeparator() {
  return (
    <span className="inline-flex shrink-0 text-ink-muted/70" aria-hidden>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="currentColor"
        className="opacity-80"
      >
        <path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" />
      </svg>
    </span>
  );
}

export function MarqueeBar() {
  return (
    <section
      aria-label="Capabilities"
      className="relative overflow-hidden border-y border-border bg-canvas"
    >
      <p className="sr-only">{allMarqueeLabels.join(", ")}</p>

      <div className="marquee-cross group">
        <div className="marquee-cross__band marquee-cross__band--forward">
          <MarqueeRow
            items={marqueeItems}
            direction="forward"
            bandId="band-1"
          />
        </div>

        <div className="marquee-cross__band marquee-cross__band--reverse">
          <MarqueeRow
            items={marqueeItemsRow2}
            direction="reverse"
            bandId="band-2"
          />
        </div>
      </div>
    </section>
  );
}
