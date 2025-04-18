import type { Metadata } from "next";
import "@/styles/style.scss";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lendsqr Frontend Test App",
  description:
    "A responsive, high-fidelity frontend application built with React, TypeScript, and SCSS as part of the Lendsqr frontend engineering assessment.",
  authors: [{ name: "Emmanuel Victor" }],
  keywords: [
    "Lendsqr",
    "Frontend Test",
    "React",
    "TypeScript",
    "SCSS",
    "Admin Dashboard",
    "Responsive Design",
    "Frontend Engineering",
  ],
  creator: "Emmanuel Victor",
  openGraph: {
    title: "Lendsqr Frontend Test App",
    description:
      "Frontend dashboard demo built for the Lendsqr engineering assessment.",
    siteName: "Lendsqr FE Test",
    type: "website",
  },
  icons: "/icons/lendsqr-favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
