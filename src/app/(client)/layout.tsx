import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = localFont({
  src: "../fonts/poppinfont.woff2",
  variable: "--font-poppins",
  weight: "400",
  preload: false,
});
export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "E-Commerce Website with Sanity, Clerk and Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        {children}       
        <Footer/>
        <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#fff",
              },
            }}
          />
      </body>
    </html>
    </ClerkProvider>
  );
}


