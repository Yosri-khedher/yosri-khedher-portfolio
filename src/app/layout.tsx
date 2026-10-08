import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosri Khedher | Software Engineering · AI · Cybersecurity",
  description: "Yosri Khedher — Software Engineering student interested in Artificial Intelligence, Cybersecurity, Networks and IoT.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Yosri Khedher | Software Engineering · AI · Cybersecurity",
    description: "Software Engineering student interested in Artificial Intelligence, Cybersecurity, Networks and IoT.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#09141d", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body>{children}</body></html>;
}
