import { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-meta text-ink-soft">
      <span className="text-terracotta">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  );
}
