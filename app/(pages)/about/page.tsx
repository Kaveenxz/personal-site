'use client'
import  Space  from "@/app/components/Space";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-dotted py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Elevating Fitness Brands with Digital Excellence</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help gyms, trainers, and fitness brands dominate the digital space with high-impact strategies, performance-driven ads, and compelling content.
        </p>
      </section>
      <Space bl={true} br={true} />
      
      {/* Our Vision */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">💡 Our Vision</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Fitness brands shouldn’t struggle with online marketing. We use expert strategies, data-driven insights, and creative execution to help businesses attract, engage, and convert their ideal audience.
        </p>
      </section>
      <Space tl={true} tr={true} />
      
      {/* Why Work With Us */}
      <section className="bg-dotted py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">🔥 Why Work With Us?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Niche-Specific Marketing – We specialize in fitness brands.",
            "Engaging & Viral-Worthy Content – Reels, carousels, and more.",
            "High-ROI Ad Campaigns – Ads that convert viewers into clients.",
            "Data-Backed Growth – Every move is optimized for results.",
            "Trend-Driven Strategies – Stay ahead with modern marketing.",
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Space bl={true} br={true} />
      
      {/* Meet The Team */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">💪 Meet The Team</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { name: "[Your Name]", role: "Founder & Growth Strategist" },
            { name: "[Team Member]", role: "Social Media & Community Expert" },
            { name: "[Team Member]", role: "Content & Visual Designer" },
            { name: "[Team Member]", role: "Paid Ads & Conversions Specialist" },
          ].map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Space tl={true} tr={true} />
      
      {/* Call to Action */}
      <section className="bg-dotted py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">⚡ Let’s Build Something Epic</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Ready to take your fitness brand to the next level? We’re here to make it happen.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 text-lg font-medium">Book a Free Strategy Call</button>
        </div>
      </section>
    </div>
  );
}
