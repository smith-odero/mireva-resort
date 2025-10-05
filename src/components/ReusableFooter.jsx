import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import images from '../utils/images';

const ReusableFooter = () => {
    return (
        <footer className='bg-gray-50 text-gray-800 pb-10 pt-12 mt-10 px-4 md:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Main footer content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12'>
                    {/* Logo and Social Media - Left side */}
                    <div className='lg:col-span-4'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='relative'>
                                <img
                                    src={images["logo.png"]}
                                    alt="Logo"
                                    className='h-12 w-12 bg-black rounded-xl object-cover animate-breathe'
                                />
                                {/* Breath animation elements from mouth */}
                                <div className='absolute top-4 left-10 transform -translate-x-1/2'>
                                    <div className='breath-particle breath-1'></div>
                                    <div className='breath-particle breath-2'></div>
                                    <div className='breath-particle breath-3'></div>
                                </div>
                            </div>
                            <h2 className='text-xl font-light tracking-wider'>Mireva</h2>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className='mb-6'>
                            <h3 className='text-sm font-semibold mb-4 '>FOLLOW US</h3>
                            <div className='flex space-x-4'>
                                <a href='#' className='text-xl'>
                                    <FaFacebook/>
                                </a>
                                <a href='#' className='text-xl'>
                                    <FaInstagram/>
                                </a>
                                <a href='#' className='text-xl'>
                                    <FaWhatsapp/>
                                </a>
                                <a href='#' className='text-xl'>
                                    <FaTiktok/>
                                </a>
                                <a href='#' className='text-xl'>
                                    <FaYoutube/>
                                </a>
                            </div>
                        </div>
                        
                        <p className=' text-sm leading-relaxed'>
                            Experience luxury in harmony with nature. Mireva Resort offers an escape from the ordinary.
                        </p>
                    </div>

                    {/* Spacer for better layout */}
                    <div className='hidden lg:block lg:col-span-2'></div>

                    {/* Contact, Quick Links, and Legal Notice - Right side */}
                    <div className='lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div>
                            <h3 className='font-semibold mb-4 text-sm tracking-wider'>CONTACT</h3>
                            <div className='space-y-3'>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>+(254) 721 280 656</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>info@suerdo.com</p>
                                <p className='font-light  text-sm'>Amboseli Rd, Nairobi - Kenya</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className='font-semibold mb-4 text-sm tracking-wider'>QUICK LINKS</h3>
                            <div className='space-y-3'>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>About Us</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Gallery</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Reviews</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Experiences</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className='font-semibold mb-4 text-sm tracking-wider'>LEGAL NOTICE</h3>
                            <div className='space-y-3'>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Terms & Conditions</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Privacy Policy</p>
                                <p className='font-light  text-sm hover:transition-colors cursor-pointer'>Cookie Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t mx-15 md:mx-50 border-gray-500 mb-8'></div>

                {/* Copyright */}
                <div className='text-center'>
                    <p className='text-xs  font-light'>
                        © 2025 Mireva Resort. All Rights Reserved. | Developed by Smith-Odero.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ReusableFooter;