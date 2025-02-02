"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.jpg";
import { PhoneCall, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Space from "./Space";

function HomePage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    return (
      <div className="flex flex-col items-center w-full bg-gray-100 dark:bg-gray-900 pb-10"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "10px 10px"
      }}>

        {/* Logo with Fade-In Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <Image src={logo} alt="logo" className="w-48 rounded-full shadow-lg border-2 border-black dark:border-white p-1" />
        </motion.div>
  
        {/* Animated Gradient Text */}
        <div className="mt-10 flex flex-col items-center gap-4 text-6xl font-bold text-transparent bg-clip-text">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text animate-gradient"
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
        <div className="mt-14 flex justify-center gap-5 text-lg">
          {/* Book a Call Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 dark:bg-white px-10 py-4 rounded-full flex gap-2 text-white dark:text-gray-800 cursor-pointer transition-all duration-300 hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white hover:font-semibold shadow-md"
          >
            <button>Book a Call</button> <PhoneCall />
          </motion.div>
  
          {/* View Our Work Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 border-gray-800 dark:border-white px-6 py-4 rounded-full flex gap-2 text-gray-800 dark:text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md"
          >
            <button>View Our Work</button> <Workflow />
          </motion.div>
        </div>
  
        {/* Tailwind Animation for Gradient Movement */}
        <style jsx>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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