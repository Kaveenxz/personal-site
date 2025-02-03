


'use client'
import Footer from "@/app/components/Footer";
import Space from "@/app/components/Space";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
             backgroundSize: "10px 10px"
        }}>
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="relative w-full h-[500px] flex items-center justify-center  text-center px-6"
            >
                <div className="">
                    <motion.h1 
                        className="text-6xl mb-4 font-bold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text drop-shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Crafting Digital Experiences That</motion.h1>
                    <motion.h1 
                        className="text-6xl font-bold bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >Convert & Inspire</motion.h1>
                    <motion.p 
                        className="mt-10 text-xl opacity-80 mx-20 dark:text-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        At Netizen, we don’t just build websites—we create powerful digital presences that drive growth. Whether you're a startup, a fitness brand, or an eCommerce powerhouse, we bring your vision to life with cutting-edge design and seamless functionality.
                    </motion.p>
                </div>
            </motion.div>

            {/* Who We Are */}
            <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="w-full bg-white dark:bg-gray-800"
            >
                <Space color="bg-gray-100 dark:bg-gray-900" direction="rounded-bl-full rounded-br-full" backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)" bgSize="10px 10px" />
                <div className="max-w-6xl mx-auto py-16 px-6">
                    <motion.h2 
                        className="text-5xl my-10 font-semibold text-center bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >More Than Just a Web Agency</motion.h2>
                    <motion.p 
                        className="mt-4 mb-20 text-center text-gray-700 dark:text-gray-200 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Netizen was built on the belief that great design isn’t just about aesthetics—it’s about strategy, impact, and results. We specialize in high-performance websites that blend creativity with functionality, ensuring your brand stands out and thrives in the digital space.
                    </motion.p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card title="UI/UX Design" description="Creating seamless, user-friendly digital experiences." />
                        <Card title="SEO Optimization" description="Boosting visibility and driving organic traffic." />
                        <Card title="Fast Performance" description="Ensuring speed and efficiency for every website." />
                        <Card title="Conversion-Driven" description="Designs that don’t just look good—they sell." />
                    </div>
                </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full bg-white dark:bg-gray-800 py-16 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-semibold text-center bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-300 text-transparent bg-clip-text drop-shadow-lg">What Makes Us Different?</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card title="Pixel-Perfect Designs" description="Every detail is crafted with precision." />
                        <Card title="Speed & Performance" description="Blazing-fast websites for seamless UX." />
                        <Card title="Conversion Focused" description="We build websites that drive results." />
                        <Card title="Client-First Approach" description="Your success is our priority." />
                    </div>
                </div>

            </motion.div>
            <Space color="bg-white dark:bg-gray-800" direction="rounded-bl-full rounded-br-full"/>

            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full bg-gray-100 dark:bg-gray-900 text-center py-16 text-gray-800"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                     backgroundSize: "10px 10px"
                }}
            >
                <h2 className="bg-gradient-to-r text-3xl font-bold dark:from-white dark:to-gray-300 from-black to-gray-400 text-transparent bg-clip-text drop-shadow-lg">Let’s Build Something Amazing Together</h2>
                <p className="mt-4 text-lg opacity-80 dark:text-gray-200">Get in touch to discuss your next project and take your brand to new heights.</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-5 bg-gray-800 dark:bg-gray-100 px-8 py-4 rounded-full text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"
                >
                    Get a Free Consultation
                </motion.button>
            </motion.div>
            <Space color="bg-white dark:bg-gray-900" direction="rounded-tl-full rounded-tr-full"/>
            <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={ { opacity: 1, scale: 1 } }
                                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                  className=" w-full "
                              >
                                  <hr className="mx-20 dark:border dark:border-gray-300 " />
                              </motion.div>
            <Footer/>
        </div>
    );
}

function Card({ title, description }:any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 dark:border-gray-800 shadow-xl rounded-xl p-6 text-center border border-gray-200 hover:shadow-2xl transition-all"
        >
            <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-200">{description}</p>
        </motion.div>
    );
}