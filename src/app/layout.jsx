import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header.jsx";
import Link from "next/link";


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
         
        <div className="p-10">
          <section className="flex justify-between flex-wrap">
           <Header></Header>
           <nav className="flex gap-5">
            <Link href={'/'}> Home</Link>
            <Link href={'/tutorial'}>Tutorial</Link>
            <Link href={'/story'}>Story</Link>
             <Link href={'/about'}>About</Link>
             <Link href={'/register'}>Register</Link>
             <Link href={'/login'}>Login</Link>
             <Link href={'/dashboard'}>Dashboard</Link>
                       </nav>
        </section>
         
         <main>
                {children}
         </main>
        </div>

       
      </body>
    </html>
  );
}
