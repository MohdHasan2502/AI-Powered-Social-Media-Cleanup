import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Social Media Cleanup",
  description: "Take control of your online presence with AI.",
};

const menu = [
  { label: "Home", href: "/" },
  { label: "Analyze Profile", href: "/analyzeProfile" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "How It Works?", href: "/HowItWorks" },
  { label: "About", href: "/about" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5]`}>
        
        {/* Navbar */}
        <nav className="sticky top-0 bg-white shadow-md py-3 px-6 flex justify-between items-center w-full border-b border-gray-300">
          
          {/* Logo */}
          <Link href="/">
  <div className="h-[60px] w-[100px] flex items-center">
    <Image 
      src={Logo} 
      alt="Logo" 
      width={120} 
      height={80} 
      className="h-auto w-auto object-contain"
    />
  </div>
</Link>

          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            {menu.map((item, index) => (
              <Link href={item.href} key={index} className="text-gray-700 hover:text-green-500 transition font-medium">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Login & Signup Buttons */}
          <div className="flex gap-3">
            <Link href="/login">
              <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Sign up
              </button>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <section>{children}</section>

        {/* Footer */}
        <footer className="bg-black text-white py-6 mt-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            
            {/* Logo */}
            <div className="text-lg font-bold">
              <Image src={Logo} alt="Logo" width={100} height={50} className="object-contain" />
            </div>

            {/* Footer Links */}
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="/" className="hover:text-gray-400 transition">Home</a>
              <a href="/about" className="hover:text-gray-400 transition">About</a>
              <a href="/work" className="hover:text-gray-400 transition">How It Works?</a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400 transition">FB</a>
              <a href="#" className="hover:text-gray-400 transition">TW</a>
              <a href="#" className="hover:text-gray-400 transition">IG</a>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
