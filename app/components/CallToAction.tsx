"use client";
import { Handshake, Mail, MessageCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

function CallToAction() {
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Ref for detecting when the section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="flex flex-col items-center justify-center w-full py-10">
            {/* Content Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full text-center"
            >
                {/* Icon with Floating Effect */}
                <motion.div
                    className="flex items-center justify-center w-32 h-32 px-3 py-3 rounded-full mx-auto bg-gradient-to-b from-gray-200 to-white dark:from-gray-600 dark:to-gray-300"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <Handshake className="w-20 h-20 text-gray-700 dark:text-white" />
                </motion.div>

                {/* Gradient Animated Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="my-10"
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-300 bg-clip-text text-transparent animate-gradientMove">
                        Let’s Build a Website That
                    </h2>

                    <h2 className="text-5xl font-bold mt-6 bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-300 bg-clip-text text-transparent animate-gradientMove">
                        Works for You
                    </h2>
                </motion.div>
            </motion.div>

            {/* Buttons with Cool Hover Effects */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-4 flex justify-center gap-5 text-lg"
            >
                {/* Email Button */}
                <motion.div
            className="bg-gray-800 dark:bg-white px-10 py-4 rounded-full flex gap-2 text-white dark:text-gray-800 cursor-pointer transition-all duration-300 hover:bg-white hover:border-2 hover:border-gray-900 hover:text-gray-800 dark:hover:bg-gray-900 dark:hover:text-white hover:font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
                >
                    <button>Email</button> <Mail />
                </motion.div>

                {/* WhatsApp Button */}
                <motion.div
            className="border-2 border-gray-800 dark:border-white px-6 py-4 rounded-full flex gap-2 text-gray-800 dark:text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md"
            whileHover={{ scale: 1.05 }}
                >
                    <button>WhatsApp</button> <MessageCircle />
                </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="mt-20 mb-5 w-full"
            >
                <hr className="mx-20 border border-gray-300" />
            </motion.div>
        </div>
    );
}

export default CallToAction;
