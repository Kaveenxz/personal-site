"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [theme, setTheme] = useState("light");

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
        <div
            className="px-5 py-4 bg-gray-100 dark:bg-gray-900 "
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "10px 10px",
            }}
        >
            <div className="flex justify-between items-center">
                {/* Theme Switch */}
                <div
                    className="relative flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all"
                    onClick={toggleTheme}
                >
                    {/* Sun Icon (Light Mode) */}
                    <Sun
                        size={20}
                        className={`absolute left-2 transition-all text-yellow-500 opacity-100 `}
                    />

                    {/* Moon Icon (Dark Mode) */}
                    <Moon
                        size={20}
                        className={`absolute right-2 transition-all `}
                    />

                    {/* Moving Circle */}
                    <div
                        className={`absolute top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform ${
                            theme === "light" ? "translate-x-8" : "translate-x-0"
                        }`}
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-4 text-gray-700 dark:text-gray-300 font-medium">
                    <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"><Link href={"/"}>Home</Link></li>
                    <li>/</li>
                    <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"><Link href={"/services"}>Services</Link></li>
                    <li>/</li>
                    <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"><Link href={"/portfolio"}>Portfolio</Link></li>
                    <li>/</li>
                    <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"><Link href={"/about"}>About</Link></li>
                    <li>/</li>
                    <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}
