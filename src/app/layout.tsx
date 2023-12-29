import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "TMDB | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="mb-[4rem] max-w-[1280px] w-[100%] mx-auto min-h-[calc(100vh-40px)]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
