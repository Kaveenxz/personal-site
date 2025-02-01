import { Mail, MessageCircle, Youtube, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-10 px-6">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left Section - Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold">Netizen</h2>
          <p className="text-gray-600 text-sm mt-1">
            Custom Websites That Convert & Scale.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex justify-center space-x-6 text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/services" className="hover:text-gray-900 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-900 transition">Portfolio</Link>
          <Link href="/portfolio" className="hover:text-gray-900 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
        </div>

        {/* Right Section - Social Media & Contact */}
        <div className="flex justify-end space-x-4 text-gray-600">
          <a href="https://youtube.com" target="_blank" className="hover:text-gray-900 transition">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-gray-900 transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-gray-900 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:info@xpertrix.com" className="hover:text-gray-900 transition">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" className="hover:text-gray-900 transition">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © 2025 Netizen. All rights reserved.
      </div>
      
    </footer>
  );
}

export default Footer;
