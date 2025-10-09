import React, { useState } from 'react';
import ReusableNavbar from './ReusableNavbar';
import ReusableFooter from './ReusableFooter';
const About = () => {
    return (
        <>
        <ReusableNavbar />
        
            <div className="min-h-screen bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-24 relative">

            {/* Container */}
            <div className="max-w-7xl mx-auto pt-12 relative z-10">
                
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
                <div className="relative rounded-sm overflow-hidden shadow-xl">
                    <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                    alt="Misty mountains landscape"
                    className="w-full h-[400px] sm:h-[400px] lg:h-[500px] object-cover"
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