'use client';
import { motion } from 'framer-motion';
import { PhoneCall, Rocket, MonitorSmartphone, ShieldCheck, ShoppingCart, PaintBucket, BarChart3 } from 'lucide-react';
import Space from '@/app/components/Space';
import React from 'react';
import Footer from '@/app/components/Footer';

function ServicesPage() {
  return (
    <div className="w-full pt-14 bg-gray-100 dark:bg-gray-900"
    style={{
      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
      backgroundSize: "10px 10px"
    }}>
    {/* Hero Section */}
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-full pb-10"
    >
      <div className="mt-20 flex flex-col items-center gap-4 text-6xl font-bold text-transparent bg-clip-text">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-500 bg-clip-text animate-gradient"
        >
          Cutting-Edge Web Solutions
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-500 bg-clip-text animate-gradient"
        >
          to Elevate Your Business
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.7 }}
        className='mt-10 text-center'
      >
        <p className='text-xl dark:text-gray-200'>From high-performance websites to conversion-optimized eCommerce stores, <br/>we craft digital experiences that drive real results.</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 bg-gray-800 dark:bg-gray-100 px-10 py-4 rounded-full flex gap-2 text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"
      >
        <button>Book a Free Consultation</button> <PhoneCall />
      </motion.div>
    </motion.div>
    
    <Space color="bg-white dark:bg-gray-800" direction="rounded-tl-full rounded-tr-full" />
    <div className='bg-white w-full text-center dark:bg-gray-800 py-20'>
      <h1 className='text-5xl font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text drop-shadow-lg'>Why Work With Us?</h1>
      <div className='mt-10 flex flex-wrap justify-center gap-10'>
        {[ { icon: <Rocket className='text-red-500' />, text: "Lightning-Fast Websites", color: "bg-red-100" },
           { icon: <MonitorSmartphone className='text-blue-500' />, text: "Mobile & SEO Optimized", color: "bg-blue-100" },
           { icon: <ShieldCheck className='text-green-500' />, text: "Ongoing Support & Security", color: "bg-green-100" },
           { icon: <PaintBucket className='text-yellow-500' />, text: "Conversion-Focused UI/UX", color: "bg-yellow-100" },
           { icon: <ShoppingCart className='text-purple-500' />, text: "Scalable E-Commerce Solutions", color: "bg-purple-100" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col items-center p-5 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg cursor-pointer w-60`}
          >
            {item.icon}
            <p className='mt-3 font-medium dark:text-gray-200'>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <Space color="bg-white dark:bg-gray-800" direction="rounded-bl-full rounded-br-full" />


<div className='bg-gray-100 w-full py-20 dark:bg-gray-900'
  style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "10px 10px" }}
>
  <h1 className='text-center text-5xl font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text'>Our Services</h1>
  <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-10'>
    {[ { title: "Web Development", desc: "High-performance websites using Next.js & React.", icon: <Rocket />, color: "text-blue-400" },
       { title: "UI/UX Design", desc: "Stunning, intuitive designs for maximum engagement.", icon: <PaintBucket />, color: "text-pink-400" },
       { title: "Landing Page Optimization", desc: "Boost conversions with data-driven designs.", icon: <BarChart3 />, color: "text-green-400" },
       { title: "E-Commerce Development", desc: "Feature-rich online stores built to scale.", icon: <ShoppingCart />, color: "text-yellow-400" },
       { title: "Ongoing Support & Maintenance", desc: "Regular updates, security checks & monitoring.", icon: <ShieldCheck />, color: "text-purple-400" }
    ].map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1}}
        whileHover={{ scale: 1.05 }}
        className={`flex flex-col items-center p-8 bg-white ${service.color} dark:bg-gray-800 rounded-lg shadow-lg w-full text-center`}
      >
        {service.icon}
        <h3 className='mt-4 text-xl font-bold text-gray-800 dark:text-white'>{service.title}</h3>
        <p className='mt-2 text-gray-600 dark:text-gray-200'>{service.desc}</p>
      </motion.div>
    ))}
  </div>
</div>

<Space color="bg-white dark:bg-gray-800" direction="rounded-tl-full rounded-tr-full"/>

<div className='bg-white text-center py-20 dark:bg-gray-800'>
  <h1 className='text-5xl font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text'>What Our Clients Say</h1>
  <div className='mt-10 max-w-4xl mx-auto'>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6'
    >
      <p className='text-lg font-medium dark:text-white'>"Our website’s speed improved by 200%! The team nailed it."</p>
      <span className='text-gray-500 dark:text-gray-200'>– John Doe</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md'
    >
      <p className='text-lg font-medium dark:text-white'>"Sales doubled after their landing page optimizations!"</p>
      <span className='text-gray-500 dark:text-gray-200'>– Jane Smith</span>
    </motion.div>
  </div>
</div>

      
      <Space color="bg-white dark:bg-gray-800" direction="rounded-bl-full rounded-br-full" />
      <div className='bg-gray-100 dark:bg-gray-900 text-center py-20'
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "10px 10px"
      }}>
        <h1 className='text-4xl font-semibold bg-gradient-to-r from-black dark:from-white dark:to-gray-300 to-gray-400 text-transparent bg-clip-text'>Ready to Transform Your Business?</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-5 bg-gray-800 dark:bg-gray-100 px-8 py-4 rounded-full text-white dark:text-gray-900 cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:border-2 hover:border-gray-800 dark:hover:text-white dark:hover:border-white hover:text-gray-800 hover:font-semibold dark:font-semibold shadow-md"

        >
          Get Started Today
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
      <Footer/>
    </div>
  );
}

export default ServicesPage;
