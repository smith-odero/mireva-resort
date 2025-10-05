import { Link } from 'react-router-dom';
import { X, MenuIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react';
import images from '../utils/images.js'

const ReusableNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                const scrollingUp = currentScrollY < lastScrollY;
                
                setScrollDirection(scrollingUp ? 'up' : 'down');
                setLastScrollY(currentScrollY);
                
                // Show background when scrolling up and not at the very top
                setIsScrolled(scrollingUp && currentScrollY > 0);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]);


    return (
        <>
        <nav className={`fixed top-0 w-full transition-all duration-500 z-[99995] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ${
                scrollDirection === 'up' && lastScrollY > 50 
                    ? 'translate-y-0 bg-black/50 text-white backdrop-blur-xl  shadow-2xl h-[50px] lg:h-[60px]' 
                    : scrollDirection === 'down' && lastScrollY > 50
                        ? '-translate-y-full bg-transparent'
                        : lastScrollY <= 50
                            ? 'translate-y-0 bg-white text-gray-800'
                            : '-translate-y-full bg-transparent'
            }`}>
            <div className='flex items-center gap-2'>
                <div className='relative'>
                        <img
                            src={images["logo.png"]}
                            alt="Logo"
                            className='h-12 w-12 bg-black rounded-xl object-cover animate-breathe'
                        />
                        {/* Breath animation elements from mouth */}
                        <div className='absolute top-6 left-12 transform -translate-x-1/2'>
                            <div className='breath-particle breath-1'></div>
                            <div className='breath-particle breath-2'></div>
                            <div className='breath-particle breath-3'></div>
                        </div>
                </div>
                <Link to='/'><h2 className='text-lg sm:text-xl font-light  tracking-wider'>Mireva</h2></Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center  gap-6 lg:gap-8 font-light'>
                <Link to="/about"><p className='transition-opacity hover:opacity-70 cursor-pointer'>About</p></Link>
                <Link to="/suites"><p className='transition-opacity hover:opacity-70 cursor-pointer'>Suite</p></Link>
                <Link to="/dining"><p className='transition-opacity hover:opacity-70 cursor-pointer'>Dining</p></Link>
                <Link to="/experiences"><p className='transition-opacity hover:opacity-70 cursor-pointer'>Experience</p></Link>
                <Link to="/contact"><p className='transition-opacity hover:opacity-70 cursor-pointer'>Contact</p></Link>
            </div>
            <div className='hidden md:flex items-center gap-4'>
                
                <button className='bg-gray-50 border border-gray-800 text-gray-800 px-2 py-1.5 rounded-xl'>
                    BOOK NOW
                </button>
            </div>

            {/* Menu Icon */}
            <button
                onClick={toggleMobileMenu}
                className='md:hidden p-2'
            >
                {isMobileMenuOpen ? <X className='h-6 w-6' /> : <MenuIcon className='h-6 w-6'/>}
            </button>
        </nav>

         {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[99999] md:hidden transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100 pointer-event-auto' : 'opacity-0 pointer-events-none'
            }`}>
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300`} onClick={toggleMobileMenu}></div>
                <div className={`absolute right-0 top-0 h-full w-64 bg-black/95 text-white/70 backdrop-blur-xl p-6 rounded-l-3xl transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <X className='h-6 w-6 mt-4 font-light transform transition-transform duration-300 translate-x-0' onClick={toggleMobileMenu} />
                    <div className='pt-6 space-y-2'>
                        <div className='pl-2 font-light space-y-4'>
                            
                            <Link to='/about' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>About</Link>
                            <Link to='/suites' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Suites</Link>
                            <Link to='/dining' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Dining</Link>
                            <Link to='/experiences' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Experience</Link>
                            <Link to='/contact' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Contact</Link>
                        </div>
                        <div className="pt-6 border-t border-white/20 space-y-4">
                        <button className="w-full text-center font-light text-gray-300 border border-gray-400 rounded-xl hover:text-white py-2 transition-colors duration-200">Sign In</button>
                        <button className="w-full bg-white/85 text-black py-3 rounded-xl font-light hover:bg-gray-200 transition-colors duration-200">BOOK NOW</button>
                        </div>
                    </div>
                    
                    <><p className='font-light text-xs text-center mt-20 pt-2'>© 2025 Mireva Resort. All Rights Reserved.</p></>

                </div>
            </div>
        </>
    )
}
export default ReusableNavbar;