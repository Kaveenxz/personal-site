"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.jpg";
import { PhoneCall, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Space from "./components/Space";
import HomePage from "./components/HomePage";

export default function Home() {


  return (
    <div className="flex  flex-col items-center w-full">
 
        <HomePage/>
        <Space/>
    </div>
  );
}
