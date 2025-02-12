"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.jpg";
import { PhoneCall, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  console.log(isMounted)

  return (
    <div
      className="flex pt-14 flex-col items-center w-full bg-gray-100 dark:bg-gray-900 pb-10 px-4 md:px-10"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Logo with Fade-In Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10 md:mt-20"
      >
        <Image
          src={logo}
          alt="logo"
          className="w-32 md:w-48 rounded-full shadow-lg border-2 border-black dark:border-white p-1"
        />
      </motion.div>

      {/* Animated Gradient Text */}
      <div className="mt-6 md:mt-10 flex flex-col items-center gap-2 md:gap-4 text-3xl md:text-6xl font-bold text-transparent bg-clip-text">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r max-lg:text-center from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text animate-gradient"
        >
          High-Performing Websites
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text animate-gradient"
        >
          That Convert
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text animate-gradient"
        >
          Visitors Into Customers
        </motion.div>
      </div>

      {/* Call-to-Action Buttons with Hover Effects */}
      <div className="mt-10 md:mt-14 flex flex-col md:flex-row justify-center gap-4 md:gap-5 text-base md:text-lg">
        {/* Book a Call Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-800 dark:bg-white px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center gap-2 text-white dark:text-gray-800 cursor-pointer transition-all duration-300 hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white hover:font-semibold shadow-md"
          onClick={() => window.open('https://wa.me/94783872364', '_blank')}
        >
          <button>Book a Call</button> <PhoneCall className="w-5 h-5" />
        </motion.div>

        {/* View Our Work Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 border-gray-800 dark:border-white px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center gap-2 text-gray-800 dark:text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md"
        >
          <button><Link href={"/all-works"}>View Our Work</Link></button> <Workflow className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Tailwind Animation for Gradient Movement */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s infinite linear;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
