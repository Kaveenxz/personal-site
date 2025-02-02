'use client';
import Footer from "@/app/components/Footer";
import Space from "@/app/components/Space";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e:any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        alert("Message Sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 relative"
            style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "10px 10px" }}>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full flex flex-col items-center justify-center text-center px-6 text-gray-700"
            >
                <h1 className="text-6xl font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text drop-shadow-lg">
                    Get In Touch
                </h1>
                <p className="mt-4 text-xl opacity-80 max-w-2xl">
                    We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
                </p>
            </motion.div>

            {/* Contact Section */}
            <div className="w-full">
                <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-3xl font-semibold">Contact Information</h2>
                        <p className="text-gray-600">Have questions? Reach out to us via email, phone, or social media.</p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Mail className="text-gray-700" />
                                <span className="text-lg font-medium">contact@netizen.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-gray-700" />
                                <span className="text-lg font-medium">+94 76 123 4567</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-gray-700" />
                                <span className="text-lg font-medium">Colombo, Sri Lanka</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-6">
                                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                                    <Facebook size={24} />
                                    <span>Facebook</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-400">
                                    <Twitter size={24} />
                                    <span>Twitter</span>
                                </a>
                            </div>
                            <div className="flex space-x-6 mt-2">
                                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                                    <Instagram size={24} />
                                    <span>Instagram</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-800">
                                    <Linkedin size={24} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <motion.a
                            href="https://wa.me/94761234567?text=Hello!%20I%20have%20a%20question"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block text-center w-full bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 hover:font-semibold"
                        >
                            Message on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-3xl font-semibold text-center">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <input
                                type="text" name="name" placeholder="Your Name" required
                                value={form.name} onChange={handleChange}
                                className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
                            />
                            <input
                                type="email" name="email" placeholder="Your Email" required
                                value={form.email} onChange={handleChange}
                                className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
                            />
                            <textarea
                                name="message" placeholder="Your Message" required
                                value={form.message} onChange={handleChange}
                                className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-gray-300 h-40"
                            ></textarea>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 hover:font-semibold"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
                <Space color="bg-white" direction="rounded-tl-full rounded-tr-full" />

            </div>

            {/* Map Section */}
            <div className="relative w-full h-96 overflow-hidden bg-white">
                <iframe
                    className="w-full h-full px-2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092727!2d144.95373531531593!3d-37.81627944202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f456f5%3A0x3b0b0d5f75e84b4c!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1632793244211!5m2!1sen!2sus"
                    loading="lazy"
                ></iframe>
            </div>

            <Footer />
        </div>
    );
}
