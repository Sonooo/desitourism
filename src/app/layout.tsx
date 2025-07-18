import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TourProvider } from "@/context/TourContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desi Tourism",
  description: "Desi Tourism - Explore the heart of India with customized tours and authentic experiences.",
  keywords: "Bundelkhand, Tourism, Heritage, Temples, Forts, Local Stays, Cultural Experiences",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TourProvider>
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </TourProvider>
      </body>
    </html>
  );
}
