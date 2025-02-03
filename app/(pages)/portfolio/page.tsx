'use client'
import Footer from "@/app/components/Footer";
import Space from "@/app/components/Space";
import { motion } from "framer-motion";
import Image from "next/image";
import ecom from '@/app/images/ecom.webp'
import fitness from '@/app/images/fitness.webp'
import personal from '@/app/images/personal.jpg'
import enterprise from '@/app/images/enterprise.png'
import saas from '@/app/images/saas.webp'
import ceypto from '@/app/images/crypto.png'

export default function PortfolioPage() {
    const projects = [
        { title: "E-Commerce Platform", description: "A high-converting store with seamless UX.", image: ecom, category: "Web Development" },
        { title: "Fitness Brand Website", description: "A sleek, modern site built for engagement.", image:fitness, category: "Branding" },
        { title: "Personal Branding Site", description: "A portfolio site that builds authority.", image:personal, category: "Personal Branding" },
        { title: "Enterprise Dashboard", description: "A robust admin panel for managing data.", image:enterprise, category: "Admin Panel" },
        { title: "SaaS Landing Page", description: "A modern landing page for a SaaS business.", image:saas, category: "Marketing" },
        { title: "Crypto Trading Dashboard", description: "An intuitive UI for crypto traders.", image:ceypto, category: "Finance" },
    ];

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-100 text-gray-900 relative"
            style={{
                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "10px 10px"
            }}>
            
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="relative w-full h-[550px] flex flex-col items-center justify-center text-center px-6 text-gray-700"
            >
                <h1 className="text-6xl mb-4 font-bold bg-gradient-to-r from-black  dark:from-white dark:to-gray-300 to-gray-600 text-transparent bg-clip-text drop-shadow-lg">
                    Crafting Digital Excellence
                </h1>
                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="mt-4 text-xl opacity-80 max-w-2xl dark:text-gray-200"
                >
                    Explore our finest digital creations, where aesthetics meet functionality for an unparalleled experience.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-5 bg-gray-800 dark:bg-gray-100 px-8 py-4 rounded-full text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"
                    >
                    View Our Work
                </motion.button>
            </motion.div>

            {/* Projects Grid */}
            <div className="bg-white dark:bg-gray-800 w-full">
                <Space color="bg-gray-100 dark:bg-gray-900" direction="rounded-bl-full rounded-br-full" backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)" bgSize="10px 10px"/>

                <div className="max-w-6xl mx-auto py-16 px-6">
                    <h2 className="bg-gradient-to-r text-4xl font-bold text-center from-black to-gray-400  dark:from-white dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg">Our Latest Projects</h2>
                    <p className="text-lg text-center mt-2 text-gray-600 dark:text-gray-200">
                        A collection of our best work across different industries.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative bg-white dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 group"
                            >
                                <Image src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                                <div className="absolute inset-0 bg-black dark:bg-white dark:bg-opacity-60 bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                    <h3 className="text-2xl font-semibold text-white dark:text-gray-900">{project.title}</h3>
                                    <p className="mt-2 text-gray-200 dark:text-gray-700 dark:font-semibold">{project.description}</p>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-200">{project.description}</p>
                                    <span className="mt-3 inline-block bg-gray-800 dark:bg-white dark:text-gray-900 dark:font-semibold text-white text-sm px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Space color="bg-white dark:bg-gray-800" direction="rounded-bl-full rounded-br-full" />

            {/* Call to Action */}
            <div className="w-full bg-gray-100 dark:bg-gray-900 text-center py-16 text-gray-800"
             style={{
                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "10px 10px"
            }}>
                <h2 className="bg-gradient-to-r text-3xl  dark:from-white from-black to-gray-400 dark:to-gray-300 font-bold text-transparent bg-clip-text drop-shadow-lg">Want to Build Something Stunning?</h2>
                <p className="mt-4 text-lg opacity-80 dark:text-gray-200">Let’s turn your ideas into reality with expert design & development.</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-5 bg-gray-800 dark:bg-gray-100 px-8 py-4 rounded-full text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"
                    >
                    Start Your Project
                </motion.button>
            </div>

            <Space color="bg-white dark:bg-gray-900" direction="rounded-tl-full rounded-tr-full" />
            <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={ { opacity: 1, scale: 1 } }
                                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                  className=" w-full "
                              >
                                  <hr className="mx-20 dark:border dark:border-gray-300 " />
                              </motion.div>
            <Footer />
        </div>
    );
}
