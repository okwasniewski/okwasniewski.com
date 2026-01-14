import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's work together!",
};

export default function ContactPage() {
  return (
    <div className="mt-10">
      <ContactContent />
    </div>
  );
}
