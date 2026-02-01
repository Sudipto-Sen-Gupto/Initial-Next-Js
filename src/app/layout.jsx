import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header.jsx";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next App",
  description: "This is my first next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
         <Header></Header>

        {children}
      </body>
    </html>
  );
}
