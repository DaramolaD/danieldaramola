"use client";

import { ContactModal } from "@/components/contact/ContactModal";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import type { ReactNode } from "react";

export function ContactShell({ children }: { children: ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
    </ContactModalProvider>
  );
}
