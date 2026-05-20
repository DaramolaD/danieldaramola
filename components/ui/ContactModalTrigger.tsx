"use client";

import { useContactModal } from "@/components/contact/ContactModalContext";
import { Button } from "@/components/ui/Button";
import type { ComponentPropsWithoutRef } from "react";

type ContactModalTriggerProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "type" | "onClick"
> & {
  variant?: "primary" | "secondary" | "ghost";
  subject?: string;
  href?: never;
  onOpen?: () => void;
};

export function ContactModalTrigger({
  children,
  variant = "primary",
  className = "",
  subject,
  onOpen,
  ...props
}: ContactModalTriggerProps) {
  const { open } = useContactModal();

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      onClick={() => {
        onOpen?.();
        open(subject ? { subject } : undefined);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
