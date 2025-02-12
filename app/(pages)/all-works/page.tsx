"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import Space from "@/app/components/Space";
import Footer from "@/app/components/Footer";

const categories = ["All", "Web Design", "UI/UX", "Branding", "E-commerce"];

export default function AllWorks() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-40 h-40 bg-gray-400 dark:bg-gray-700 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <div
        className="relative text-center py-28 bg-gray-100 dark:bg-gray-900"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl pt-14 font-semibold bg-gradient-to-r text-transparent from-black dark:from-white to-gray-400 dark:to-gray-300 bg-clip-text animate-gradient"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Work
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mt-4 text-gray-600 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore our projects and designs
        </motion.p>
      </div>

      {/* Filters */}
      <div>
        <Space
          color="bg-gray-100 dark:bg-gray-900"
          direction="rounded-bl-full rounded-br-full"
          backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)"
          bgSize="10px 10px"
        />
        <motion.div
          className="flex justify-center gap-3 py-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 mb-2 ${
                selectedCategory === category
                  ? "bg-gray-700 dark:bg-gray-900 text-white scale-110 shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 pb-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h2 className="text-white text-lg font-semibold">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">{project.category}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium shadow-md hover:bg-gray-200">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Space color="bg-white dark:bg-gray-900" direction="rounded-tl-full rounded-tr-full" />

      <Footer />
    </div>
  );
}
