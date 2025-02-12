import { Mail, MessageCircle, Youtube, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-10 px-6 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left Section - Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold">Netizen</h2>
          <p className="text-gray-600 text-sm mt-1 dark:text-gray-200">
            Custom Websites That Convert & Scale.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex justify-center space-x-6 text-gray-600 dark:text-gray-200">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-400 transition">Home</Link>
          <Link href="/services" className="hover:text-gray-900 dark:hover:text-gray-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-900 dark:hover:text-gray-400 transition">Portfolio</Link>
          <Link href="/about" className="hover:text-gray-900 dark:hover:text-gray-400 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Right Section - Social Media & Contact */}
        <div className="flex justify-end space-x-4 text-gray-600 dark:text-gray-200">
          <Link href="https://www.youtube.com/@KaveenX" target="_blank" className="hover:text-gray-900 transition">
            <Youtube className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/kavee.xz/?next=%2F" target="_blank" className="hover:text-gray-900 transition">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/kaveen-hansith-a4a484283/" target="_blank" className="hover:text-gray-900 transition">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:netizenxz@gmail.com" className="hover:text-gray-900 transition">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://wa.me/94783872364" target="_blank" className="hover:text-gray-900 transition">
            <MessageCircle className="w-5 h-5" />
          </Link>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm dark:text-gray-200">
        © 2025 Netizen. All rights reserved.
      </div>
      
    </footer>
  );
}

export default Footer;
