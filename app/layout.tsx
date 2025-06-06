import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Sensai",
//   description: "Real-time AI Strategist",
// };

export const metadata: Metadata = {
  title: "Sensai",
  description: "Real-time AI Strategist",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "512x512", type: "image/x-icon" }, // Standard favicon
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, // Larger favicon for PWAs
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }, // Apple Touch icon
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#333333' }} }>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
