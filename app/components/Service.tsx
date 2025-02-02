"use client";

import { motion } from "framer-motion";
import {
  AudioWaveformIcon,
  Bot,
  Cable,
  Figma,
  LayoutPanelTop,
} from "lucide-react";
import React from "react";
import Space from "./Space";

const services = [
  {
    title: "Web Development",
    description: "High-performance, modern websites built with Next.js & React.",
    icon: LayoutPanelTop,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, user-centered designs that boost engagement & conversions.",
    icon: Figma,
  },
  {
    title: "Landing Page Optimize",
    description: "Crafting pages that drive higher sales & conversions.",
    icon: Cable,
  },
  {
    title: "E-Commerce Development",
    description: "Scalable online stores optimized for growth & revenue.",
    icon: Bot,
  },
  {
    title: "Support & Maintenance",
    description: "Ensuring security, speed, and seamless website performance.",
    icon: AudioWaveformIcon,
  },
];

function Service() {
  return (
    <div
      className="bg-gray-100 w-full dark:bg-gray-900"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold flex flex-col text-center mt-10 my-20"
      >
        <h1 className="font-bold bg-gradient-to-r dark:from-white from-black to-gray-400 dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg">
          Custom Solutions
        </h1>
        <h1 className="font-bold bg-gradient-to-r dark:from-white from-black to-gray-400 dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg">
          Tailored to Your Business
        </h1>
      </motion.div>

      {/* Services Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-24 mx-20 flex flex-col items-center"
      >
        <div className="relative w-full">
          <hr className="border border-gray-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="bg-white px-6 text-sm text-gray-600 rounded-xl py-2 font-semibold transform rotate-12 scale-110">
              Services
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Service Items */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex justify-between gap-2 mx-10 mb-20 items-center dark:text-white"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col mx-5 group cursor-pointer"
          >
            <service.icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="mt-6">
              <h1 className="text-xl font-semibold transition-transform duration-300 group-hover:scale-110">{service.title}</h1>
            </div>
            <p className="mt-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-10 my-20 flex justify-center gap-5 text-lg"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 dark:bg-white dark:text-gray-800 px-10 py-4 rounded-full flex gap-2 text-white cursor-pointer transition-all duration-300 dark:hover:bg-gray-800  hover:bg-white hover:border-2 hover:border-gray-800 dark:hover:border-white hover:text-gray-800 dark:hover:text-white hover:font-semibold shadow-md"
        >
          View Full Services
        </motion.button>
      </motion.div>

      <Space color="bg-white" direction="rounded-tl-full rounded-tr-full" />
    </div>
  );
}

export default Service;
