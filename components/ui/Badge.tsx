export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-ink-muted">
      <span
        className="size-1.5 shrink-0 rounded-full bg-emerald-600"
        aria-hidden
      />
      {children}
    </span>
  );
}
