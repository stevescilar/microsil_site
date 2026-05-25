import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsil | Turning Ideas Into Reality",
  description:
    "Microsil delivers innovative software, analytics, data and cybersecurity solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
