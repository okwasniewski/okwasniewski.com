import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://oskarkwasniewski.dev",
  ),
  title: {
    default: "Oskar Kwaśniewski - Software Engineer",
    template: "%s | Oskar Kwaśniewski",
  },
  description:
    "Hey! I am Oskar Kwaśniewski, a Software Engineer from Poland with passion to Open Source. I enjoy building things for the web and mobile.",
  authors: [{ name: "Oskar Kwaśniewski" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oskar Kwaśniewski",
    images: ["/preview_image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@o_kwasniewski",
    site: "@o_kwasniewski",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={GeistSans.className}>
      <body>
        <Toaster />
        <Header />
        <main className="w-full max-w-[750px] px-6 mx-auto min-h-[88vh] py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
