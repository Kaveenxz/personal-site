"use client";

import Footer from "@/app/components/Footer";
import Space from "@/app/components/Space";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent hydration mismatch in Next.js

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden bg-gray-100 dark:bg-gray-900"
       style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "10px 10px"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl mt-14 font-extrabold bg-gradient-to-r text-transparent from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text"
        >
          Elevate Your Brand
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl mt-4 font-extrabold bg-gradient-to-r text-transparent from-black dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text"
        >
           with Netizen 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-xl text-gray-700 dark:text-gray-200"
        >
          Cutting-edge web development, UI/UX, and digital strategies to help you dominate online.
        </motion.p>
        <motion.a
          href="./contact"
        //   className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-md font-bold text-lg transition"
          className="mt-10 bg-gray-800 inline-block dark:bg-gray-100 px-10 py-4 rounded-full gap-2 text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"

          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Get a Free Consultation
        </motion.a>
      </section>

      {/* Services Section */}
      <div className="">
      <Space color="bg-gray-100 dark:bg-gray-900" direction="rounded-bl-full rounded-br-full" backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)" bgSize="10px 10px"/>

      <section className="py-20 px-6 mx-auto bg-white dark:bg-gray-800 w-full">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          Our Services 🔥
        </motion.h2>


        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-lg shadow-md dark:shadow-lg bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
            >
              <motion.div
                className="absolute inset-0 dark:bg-gray-700 bg-gray-200 scale-0 group-hover:scale-100 transition-transform duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold flex items-center">
                  {service.icon} {service.title}
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </div>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text"
        >
          Ready to Get Started? 🚀
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300"
        >
          Let’s build something amazing together.
        </motion.p>
        <motion.a
          href="./contact"
          className="mt-5 bg-gray-800 inline-block dark:bg-gray-100 px-8 py-4 rounded-full text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          Start Your Project
        </motion.a>
      </section>

      <Footer/>
    </div>
  );
}

// Services Data
const services = [
  {
    title: "Web Development",
    description:
      "We build high-speed, scalable, and SEO-friendly websites using Next.js & React.",
    icon: "💻",
    color:"text-blue-500"
  },
  {
    title: "UI/UX Design",
    description:
      "Stunning, conversion-focused UI/UX design ensuring an engaging user experience.",
    icon: "🎨",
    color:"text-pink-500"
  },
  {
    title: "Landing Page Optimization",
    description:
      "We create high-converting landing pages that drive leads and sales.",
    icon: "🚀",
    color:"text-red-500"
  },
  {
    title: "E-Commerce Development",
    description:
      "We build custom online stores optimized for speed, security, and user experience.",
    icon: "🛍️",
    color:"text-blue-300"
  },
  {
    title: "SEO & Performance",
    description:
      "Boost your search rankings and speed with our expert SEO and performance optimization.",
    icon: "📈",
    color:"text-gray-500"
  },
  {
    title: "Ongoing Support",
    description:
      "Stay worry-free with continuous website monitoring, updates, and security patches.",
    icon: "🔧",
    color:"text-gray-400"
  },
];
