import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bundelkhand Tourism - Experience the Rich Heritage",
  description: "Discover the rich cultural heritage of Bundelkhand through personalized itineraries, local stays, guided tours, and authentic cultural experiences.",
  keywords: "Bundelkhand, Tourism, Heritage, Temples, Forts, Local Stays, Cultural Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
