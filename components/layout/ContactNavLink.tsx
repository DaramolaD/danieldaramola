"use client";

import Link from "next/link";
import { useContactModal } from "@/components/contact/ContactModalContext";

type ContactNavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export function ContactNavLink({
  href,
  label,
  className,
  onNavigate,
}: ContactNavLinkProps) {
  const { open } = useContactModal();

  if (href === "/#contact") {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          onNavigate?.();
          open({ subject: "Project inquiry" });
        }}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  );
}
