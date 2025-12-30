import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "./site-config";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.year} ${SITE.name} | Free Housing Calculator`,
  description: SITE.description,
  keywords: [
    "home affordability calculator",
    "how much house can i afford",
    "mortgage affordability",
    "down payment calculator",
    "dti calculator",
    "monthly mortgage payment",
    "closing costs calculator",
    "rent vs buy",
  ],
  openGraph: {
    title: `${SITE.year} Home Affordability Calculator`,
    description: "Calculate how much house you can afford based on income, down payment, and DTI ratio.",
    type: "website",
  },
  other: {
    "google-site-verification": "qlPMVO_Hb-be3_hFHNT9SBbsHO-b_wCOfWfLmTb4EQc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
