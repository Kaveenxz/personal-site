import { Handshake, Mail, MessageCircle } from 'lucide-react';
import React from 'react';

function CallToAction() {
    return (
        <div className="flex flex-col items-center justify-center w-full">

            {/* Content Box */}
            <div className=" bg-white w-full text-center mt-10">

                {/* Icon */}
                <div className="flex items-center justify-center w-32 h-32 px-3 py-3 rounded-full mx-auto bg-gradient-to-b from-gray-200 to-white  animate-gradient">
                    <Handshake className="w-20 h-20 text-gray-700" />
                </div>

                {/* Heading */}
                <div className='my-10'>
                    <h2 className="text-5xl font-bold text-gray-900">
                        Let’s Build a Website That
                    </h2>

                    <h2 className="text-5xl font-bold text-gray-900 mt-6">
                        Works for You
                    </h2>
                </div>

                {/* Buttons */}

            </div>

            <div className="mt-4 flex justify-center gap-5 text-lg">
                {/* Book a Call Button */}
                <div
                    className="bg-gray-800 px-10 py-4 rounded-full flex gap-2 text-white cursor-pointer transition-all duration-300 hover:bg-white hover:border-2 hover:border-gray-800 hover:text-gray-800 hover:font-semibold shadow-md"
                >
                    <button>Email</button> <Mail />
                </div>

                {/* View Our Work Button */}
                <div
                    className="border-2 border-gray-800 px-6 py-4 rounded-full flex gap-2 text-gray-800 font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:text-white shadow-md"
                >
                    <button>Whatsapp</button> <MessageCircle />
                </div>
            </div>

            <div className='my-20 w-full'>
                <hr className='mx-20  border border-gray-300' />
            </div>


        </div>
    );
}

export default CallToAction;
