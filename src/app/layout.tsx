import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techmarsal | Futuristic AI-Powered Blog Platform",
  description: "Explore the future of tech, AI, and SEO with Techmarsal. Premium insights for developers and tech enthusiasts.",
  icons: {
    icon: "/favicon.png", // We will place the generated image here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
