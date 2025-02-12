import { Mail, MessageCircle, Youtube, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-10 px-6 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Left Section - Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold">Netizen</h2>
          <p className="text-gray-600 text-sm mt-1 dark:text-gray-300">
            Custom Websites That Convert & Scale.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 text-gray-600 dark:text-gray-300">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
            <Link 
              key={index} 
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-gray-900 dark:hover:text-gray-400 transition text-sm sm:text-base"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Section - Social Media & Contact */}
        <div className="flex justify-center md:justify-end space-x-5 text-gray-600 dark:text-gray-300">
          <Link href="https://www.youtube.com/@KaveenX" target="_blank" className="hover:text-red-500 transition">
            <Youtube className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/kavee.xz/?next=%2F" target="_blank" className="hover:text-pink-500 transition">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/kaveen-hansith-a4a484283/" target="_blank" className="hover:text-blue-500 transition">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:netizenxz@gmail.com" className="hover:text-green-500 transition">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href="https://wa.me/94783872364" target="_blank" className="hover:text-gray-900 transition">
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm dark:text-gray-300">
        © 2025 Netizen. All rights reserved.
      </div>
      
    </footer>
  );
}

export default Footer;
