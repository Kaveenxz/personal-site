import { AudioWaveformIcon, Bot, Cable, Figma, LayoutPanelTop, PhoneCall } from 'lucide-react'
import React from 'react'

function Service() {
    return (
        <div className='bg-gray-100 w-full'>
            <div className='text-5xl font-bold flex flex-col text-center mt-10 my-20'>
                <h1 className=' font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text drop-shadow-lg'>Custom Solutions</h1>
                <h1 className=' font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text drop-shadow-lg'>Tailored to Your Business</h1>
            </div>

            <div className='my-24 mx-20 flex flex-col items-center'>
                <div className='relative w-full'>
                    <hr className='border border-gray-300' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <h1 className='bg-white px-6 text-sm text-gray-600 rounded-xl py-2 font-semibold transform rotate-12 scale-110'>
                            Services
                        </h1>
                    </div>
                </div>
            </div>

            <div className='flex justify-between gap-2 mx-10 mb-20 items-center'>
                <div className='flex flex-col mx-5'>
                    <LayoutPanelTop className='w-10 h-10' />
                    <div className='mt-6'>
                        <h1 className='text-xl font-semibold'>Web Development</h1>
                    </div>
                    <p className='mt-5'>High-performance, <br /> modern websites built with <br />  Next.js & React.</p>

                </div>
                <div className='flex flex-col mx-5'>
                    <Figma className='w-10 h-10' /> 
                    <div className='mt-6'>
                        <h1 className='text-xl font-semibold'>UI/UX Design</h1>
                    </div>
                    <p className='mt-5'>Intuitive, user-centered <br /> designs that boost engagement <br /> & conversions.</p>

                </div>
                <div className='flex flex-col mx-5'>
                    <Cable className='w-10 h-10' /> 
                    <div className='mt-6'>
                        <h1 className='text-xl font-semibold'>Landing Page Optimize</h1>
                        
                    </div>
                    <p className='mt-5'>Crafting pages that drive higher <br /> sales & conversions.</p>
                </div>
                <div className='flex flex-col mx-5'>
                    <Bot className='w-10 h-10' />
                    <div className='mt-6'>
                        <h1 className='text-xl font-semibold'>E-Commerce Development</h1>
                        
                    </div>
                    <p className='mt-5'>Scalable online stores <br /> optimized for growth & revenue.</p>
                </div>
                <div className='flex flex-col mx-5'>
                    <AudioWaveformIcon className='w-10 h-10' /> 
                    <div className='mt-6'>
                        <h1 className='text-xl font-semibold'>Support & Maintenance</h1>
                       
                    </div>
                    <p className='mt-5'>Ensuring security, speed, <br /> and seamless website <br />performance.</p>
                </div>
            </div>


            <div className="my-10 flex justify-center gap-5 text-lg">
          {/* Book a Call Button */}
         
            <button className="bg-gray-800 px-10 py-4 rounded-full flex gap-2 text-white cursor-pointer transition-all duration-300 hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 hover:font-semibold shadow-md"
            >View Full Services</button>
          </div>
        </div>

    )
}

export default Service
