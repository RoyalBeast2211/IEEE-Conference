import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title:
    "IEEE SeFet 2026 - Sustainable Energy and Future Electric Transportation",
  description:
    "6th IEEE International Conference on Sustainable Energy and Future Electric Transportation (IEEE SeFet 2026)",
  keywords: [
    "IEEE",
    "SeFet",
    "Sustainable Energy",
    "Electric Transportation",
    "Conference",
    "VNIT Nagpur",
  ],
  authors: [{ name: "VNIT Nagpur" }],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
  openGraph: {
    title:
      "IEEE SeFet 2026 - Sustainable Energy and Future Electric Transportation",
    description:
      "6th IEEE International Conference on Sustainable Energy and Future Electric Transportation (IEEE SeFet 2026)",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-roboto text-[#505050] bg-[#fafafa]">
      <head>
        <base href="." />
        <link rel="shortcut icon" type="image/png" href="/assets/favicon.png" />
        {/* Load IEEE Professional navigation CSS for complex navigation styling */}
        <link
          rel="stylesheet"
          type="text/css"
          media="all"
          href="/assets/ieee-professional-nav.css"
        />
      </head>
      <body className="font-roboto text-[#505050] bg-[#fafafa] leading-6 m-0 p-0 overflow-x-hidden">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
