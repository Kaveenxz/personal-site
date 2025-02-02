"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChartSpline, Layers2, Layout, MonitorSmartphone, ShieldCheck } from "lucide-react";

const features = [
  { icon: Layout, color: "text-red-500", label: "Lightning-Fast Websites", text: "High-performance sites with Next.js & React." },
  { icon: Layers2, color: "text-green-500", label: "Conversion-Optimized UI/UX", text: "User-centered designs that boost engagement." },
  { icon: ChartSpline, color: "text-blue-500", label: "Scalable & Future-Proof", text: "Higher conversions & better sales." },
  { icon: MonitorSmartphone, color: "text-pink-500", label: "SEO & Mobile Friendly", text: "Stores that drive sales & scale easily." },
  { icon: ShieldCheck, color: "text-purple-500", label: "Proven Results", text: "Ensuring your website runs smoothly." }
];

export default function WhyChoose() {
  const [hoveredText, setHoveredText] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-20 "
    >
      {/* Gradient Title with Shine Effect */}
      <div className="flex flex-col justify-center items-center text-center gap-2 mb-20">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black dark:from-white via-gray-500 dark:via-gray-400 to-black dark:to-white text-transparent bg-clip-text animate-gradient">
          We don’t just build websites – we create high-performing digital experiences that attract, engage, and convert.
        </h1>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black dark:from-white via-gray-500 dark:via-gray-400 to-black dark:to-white text-transparent bg-clip-text animate-gradient">
          Whether you're a startup, eCommerce brand, or service business,
        </h1>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black dark:from-white via-gray-500 dark:via-gray-400 to-black dark:to-white text-transparent bg-clip-text animate-gradient">
          our custom solutions will help you dominate your industry.
        </h1>
      </div>

      {/* Feature Icons with Hover Effects */}
      <div className="flex justify-between gap-5 relative mb-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setHoveredText(feature.text)}
              onMouseLeave={() => setHoveredText("")}
              className={`flex gap-2 ${feature.color} text-md font-semibold cursor-pointer transition-all duration-300`}
            >
              <Icon size={32} />
              <h1>{feature.label}</h1>
            </motion.div>
          );
        })}
      </div>


      {/* Gradient Animation CSS */}
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
    </motion.div>
  );
}
