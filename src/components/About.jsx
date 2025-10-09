import React, { useState } from 'react';
import ReusableNavbar from './ReusableNavbar';
import ReusableFooter from './ReusableFooter';
const About = () => {
    return (
        <>
        <ReusableNavbar />
        
            <div className="min-h-screen bg-white px-6 py-16 lg:px-20 lg:py-24 relative">
            
            {/* Decorative Purple Circle - Behind Everything */}
            <div className="absolute left-1/2 top-32 lg:top-48
                            transform -translate-x-1/2
                            w-80 h-80 lg:w-80 lg:h-80 
                            bg-gradient-to-br from-purple-400 to-purple-600 
                            rounded-full 
                            opacity-60 
                            blur-3xl
                            -z-0
                            aspect-square">
            </div>

            {/* Container */}
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Top Section - Title and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
                
                {/* Left - About Us Title */}
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    About Us
                    </h1>
                </div>

                {/* Right - Description Text */}
                <div className="flex items-center">
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Mireva Resort is a luxury destination where elegance meets tranquility. 
                    Nestled in a breathtaking tropical paradise, we offer world-class 
                    accommodations and unparalleled hospitality. Our resort features 
                    stunning ocean views, pristine beaches, and exquisite dining experiences 
                    crafted by renowned chefs. Mireva Resort provides personalized service 
                    tailored to each guest's desires, ensuring an unforgettable escape. 
                    From rejuvenating spa treatments to adventurous water sports, we create 
                    memories that last a lifetime. Experience luxury redefined at the personal 
                    and exclusive levels.
                    </p>
                </div>
                </div>

                {/* Bottom Section - Image with Decorative Circle */}
                <div className="relative w-full">

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                    alt="Misty mountains landscape"
                    className="w-full h-64 lg:h-96 object-cover"
                    />
                    
                    {/* Gradient Overlay for better aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                </div>

            </div>
            </div>
        <ReusableFooter/>
        </>
    )
}
export default About;