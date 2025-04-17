import type { Metadata } from "next";
import "@/styles/style.scss";

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
  viewport: "width=device-width, initial-scale=1",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
