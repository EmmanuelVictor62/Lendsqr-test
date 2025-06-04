import React from "react";

import Providers from "./Providers";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
