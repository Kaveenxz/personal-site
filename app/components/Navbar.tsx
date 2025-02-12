"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <>
            {/* Navbar Container */}
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl 
            bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-xl rounded-full px-6 py-4 z-50 
            border border-white/10 dark:border-gray-800 transition-all hover:scale-105 flex items-center justify-between">

                {/* Theme Switch */}
                <div className="relative flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all"
                    onClick={toggleTheme}>
                    <Sun size={20} className={`absolute left-2 text-yellow-500 transition-all ${theme === "light" ? "opacity-100" : "opacity-0"}`} />
                    <Moon size={20} className={`absolute right-2 transition-all ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
                    <div className={`absolute top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform ${theme === "light" ? "translate-x-8" : "translate-x-0"}`} />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6 text-gray-800 dark:text-gray-300 font-medium text-lg">
                    {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
                        <li key={index} className="relative group">
                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400">
                                {item}
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 transition-all group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800 dark:text-gray-300" onClick={() => setMenuOpen(true)}>
                    <Menu size={32} />
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div className={`fixed inset-0 bg-black/70 dark:bg-white/10 backdrop-blur-lg flex flex-col justify-center items-center
                transition-transform duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} z-50`}>
                
                {/* Close Button */}
                <button className="absolute top-6 right-6 text-white dark:text-gray-300" onClick={() => setMenuOpen(false)}>
                    <X size={36} />
                </button>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-8 text-white dark:text-gray-300 text-2xl font-semibold tracking-wide">
                    {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
                        <li key={index}>
                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                                className="relative group block text-center">
                                {item}
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 transition-all group-hover:w-10"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
