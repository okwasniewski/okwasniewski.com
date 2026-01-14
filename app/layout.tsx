import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const sora = Sora({ subsets: ["latin"], display: "swap" });

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
    <html lang="en-US" className={sora.className}>
      <body>
        <Toaster />
        <Header />
        <main className="container w-full h-full md:px-16 px-4 mx-auto scroll-smooth min-h-[88vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
