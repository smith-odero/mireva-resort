import React, { useState, useEffect, useRef } from 'react'
import { Heart, FeatherIcon,  Menu, X, MenuSquareIcon, MenuIcon, Hourglass, BusFrontIcon, PlaneLandingIcon, PlaneTakeoffIcon, CarTaxiFrontIcon, Flower2Icon, Flower2, LucideFlower, MountainSnowIcon, MountainIcon, TreePalmIcon, SquareMenuIcon, LucideMenuSquare, SparkleIcon, PlayIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, PlayCircleIcon, HeartHandshakeIcon, ShareIcon, ChevronDownCircleIcon, StarIcon, ArrowRightCircle, ChevronLeft, ChevronRight} from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import nature from '../assets/nature.jpg'
import hills from '../assets/hills.jpg'
import seats from '../assets/seats.jpg'
import images from '../utils/images';
import videos from '../utils/videos';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentSuiteIndex, setCurrentSuiteIndex] = useState(0);
    const [currentAmenityIndex, setCurrentAmenityIndex] = useState(0);
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visibleElements, setVisibleElements] = useState(new Set());


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
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

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleElements(prev => new Set([...prev, entry.target.dataset.animateId]));
                }
            });
        }, observerOptions);

        // Observe all elements with data-animate-id
        const animatedElements = document.querySelectorAll('[data-animate-id]');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const getAnimationClass = (animateId, baseClasses, animationClass) => {
        return visibleElements.has(animateId) ? `${baseClasses} ${animationClass}` : baseClasses;
    };

    const suites = [
        { name: "Ocean Villa", image: images["lanca-suite.jpg"], description: "Spacious serene environment for you and your family with ocean views"},
        { name: "Garden Suite", image: images["miamia-suite.jpg"], description: "Surrounded by lush gardens with private terrace and natural light"},
        { name: "Mountain View", image: images["rizon-suite.jpg"], description: "Breathtaking mountain vistas with modern amenities and comfort"},
        { name: "Sunset Terrace", image: images["seale-suite.jpg"], description: "Perfect for romantic evenings with stunning sunset views"},
        { name: "Forest Retreat", image: images["zibar-suite.jpg"], description: "Immersed in nature with private forest access and wildlife viewing"},
        { name: "Sky Loft", image: images["green-hotel.jpg"], description: "Elevated luxury with panoramic views and premium amenities"}
    ]

    const amenities = [
        {
            id: 1,
            title: "Wellness & Spa",
            subtitle: "Rejuvenation & Healing",
            description: "Indulge in organic treatments, soak in thermal pools, breathe in panoramic saunas or greet the sunrise with guided yoga. Every moment is crafted to restore balance, calm the mind and renew your spirit.",
            mainImage: images["spa-facial.jpg"],
            secondaryImage: images["spa-tools.jpg"]
        },
        {
            id: 2,
            title: "Recreation & Swimming",
            subtitle: "Aquatic Paradise",
            description: "Dive into our pristine swimming pools with stunning views. From family-friendly pool areas to serene adult-only sections, enjoy swimming, poolside relaxation, and water-based activities in a luxurious setting.",
            mainImage: images["pool-fam.jpg"],
            secondaryImage: images["pool-serenity.jpg"]
        },
        {
            id: 3,
            title: "Entertainment",
            subtitle: "Music & Events",
            description: "Enjoy live music performances, special events, and evening entertainment. From intimate acoustic sessions to celebration events, we create memorable experiences for every occasion.",
            mainImage: images["event-music.jpg"],
            secondaryImage: images["event-wedding.jpg"]
        },
        {
            id: 4,
            title: "Business & Meetings",
            subtitle: "Professional Spaces",
            description: "Conduct business in our state-of-the-art meeting facilities. Whether it's corporate retreats, conferences, or private meetings, our spaces blend professionalism with natural tranquility.",
            mainImage: images["meeting-area.jpg"],
            secondaryImage: images["meeting-area2.jpg"]
        },
        {
            id: 5,
            title: "Kids & Family Play",
            subtitle: "Children's Paradise",
            description: "Safe and engaging play areas designed for children of all ages. From supervised activities to creative play zones, we ensure your little ones have unforgettable experiences while parents can relax knowing they're in good hands.",
            mainImage: images["kids-play.jpg"],
            secondaryImage: images["kids-play2.jpg"]
        }
    ]

    const nextSuite = () => {
        setCurrentSuiteIndex((prev) => (prev + 1) % suites.length);
    }

    const prevSuite = () => {
        setCurrentSuiteIndex((prev) => (prev - 1 + suites.length) % suites.length);
    }

    const nextAmenity = () => {
        setCurrentAmenityIndex((prev) => (prev + 1) % amenities.length);
    }

    const prevAmenity = () => {
        setCurrentAmenityIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
    }

    const experiences = [
        { name: "WELLNESS JOURNEYS", image: images["yoga.jpg"], description: "Forest bathing, herbal therapy, sunrise yoga"},
        { name: "ADVENTURE ACTIVITIES", image: images["outdoor.jpg"], description: "Mountain trails, nature walks, outdoor exploration"},
        { name: "CULINARY EXPERIENCES", image: images["outdoor-cooking.jpg"], description: "Farm-to-table dining, wine tasting, cooking classes"},
        { name: "RELAXATION RETREATS", image: images["meditation-area.jpg"], description: "Spa treatments, meditation sessions, wellness programs"},
        { name: "FAMILY ADVENTURES", image: images["fun.jpg"], description: "Children activities, family bonding, recreational programs"}
    ]

    const nextExperience = () => {
        setCurrentExperienceIndex((prev) => (prev + 1) % experiences.length);
    }

    const prevExperience = () => {
        setCurrentExperienceIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    }

    const testimonials = [
        { 
            quote: "We booked Mireva to disconnect -- and ended up reconnecting with everything that matters. We'll never forget the silence, the sky, the way we felt.",
            rating: 4.5,
            guest: "Lisa Maua, Nakuru",
            image: images["lisa.jpg"]
        },
        { 
            quote: "The perfect escape from city life. Every detail was thoughtfully designed to create peace and tranquility. Our suite felt like a sanctuary in nature.",
            rating: 5.0,
            guest: "Leila Lara, Kisumu",
            image: images["leila.jpg"]
        },
        { 
            quote: "Mireva exceeded all our expectations. The wellness programs, incredible cuisine, and stunning views made this our most memorable getaway ever.",
            rating: 4.8,
            guest: "Sam Ochieng, Naivasha",
            image: images["ode.jpg"]
        },
        { 
            quote: "A truly transformative experience. The combination of luxury and nature created the perfect environment for relaxation and rejuvenation.",
            rating: 4.9,
            guest: "Sandra Shine, Nairobi",
            image: images["Sandra.jpg"]
        }
    ]

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    return (
        <div className='bg-white relative'>
            {/* Hero section with background image */}
            <div className='relative h-[100vh] max-[480px]:h-[90vh] overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <img
                        src={images["hero-100.jpg"]}
                        alt='nature'
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/5'></div>
                </div>

            {/* Mobile Fireworks Animation - Completely separate from navigation */}
            <div className={`md:hidden fixed left-2 w-24 h-20 overflow-visible z-[99996] pointer-events-none ${
                scrollDirection === 'up' && lastScrollY > 50 
                    ? 'top-4' 
                    : scrollDirection === 'down' && lastScrollY > 50
                        ? '-top-20'
                        : lastScrollY <= 50
                            ? 'top-4'
                            : '-top-20'
            } transition-all duration-500`}>
                <div className='firework-container'>
                    {/* Firework 1 */}
                    <div className='firework firework-1'>
                        <div className='spark spark-1'></div>
                        <div className='spark spark-2'></div>
                        <div className='spark spark-3'></div>
                        <div className='spark spark-4'></div>
                        <div className='spark spark-5'></div>
                        <div className='spark spark-6'></div>
                        <div className='spark spark-7'></div>
                        <div className='spark spark-8'></div>
                    </div>
                    
                    {/* Firework 2 */}
                    <div className='firework firework-2'>
                        <div className='spark spark-1'></div>
                        <div className='spark spark-2'></div>
                        <div className='spark spark-3'></div>
                        <div className='spark spark-4'></div>
                        <div className='spark spark-5'></div>
                        <div className='spark spark-6'></div>
                    </div>
                    
                    {/* Firework 3 */}
                    <div className='firework firework-3'>
                        <div className='spark spark-1'></div>
                        <div className='spark spark-2'></div>
                        <div className='spark spark-3'></div>
                        <div className='spark spark-4'></div>
                        <div className='spark spark-5'></div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`fixed top-0 w-full text-gray-50 transition-all duration-500 z-[99995] ${
                scrollDirection === 'up' && lastScrollY > 50 
                    ? 'translate-y-0 bg-black/45 backdrop-blur-xl shadow-2xl' 
                    : scrollDirection === 'down' && lastScrollY > 50
                        ? '-translate-y-full bg-transparent'
                        : lastScrollY <= 50
                            ? 'translate-y-0 bg-transparent'
                            : '-translate-y-full bg-transparent'
            }`}>
                {/* Desktop Navigation Layout */}
                <div className='hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4'>
                    {/* Desktop Logo and Brand (Left) */}
                    <div className='flex items-center space-x-2'>
                        <div className='relative'>
                            <img
                                src={images["logo.png"]}
                                alt="Logo"
                                className='h-16 w-16 object-cover animate-breathe'
                            />
                            {/* Breath animation elements from mouth */}
                            <div className='absolute top-6 left-12 transform -translate-x-1/2'>
                                <div className='breath-particle breath-1'></div>
                                <div className='breath-particle breath-2'></div>
                                <div className='breath-particle breath-3'></div>
                            </div>
                        </div>
                        <Link to='/' ><h2 className='text-lg sm:text-xl font-light tracking-wider'>Mireva.</h2> </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className='flex items-center space-x-6 lg:space-x-8 font-light'>
                        <Link to='/about' className='transition-opacity hover:opacity-70'>About</Link>
                        <Link to='/suites' className='transition-opacity hover:opacity-70'>Suites</Link>
                        <Link to='/dining' className='transition-opacity hover:opacity-70'>Dining</Link>
                        <Link to='/experience' className='transition-opacity hover:opacity-70'>Experience</Link>
                        <Link to='/contact' className='transition-opacity hover:opacity-70'>Contact</Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className='flex items-center space-x-4'>
                        <button className={`text-gray-100 border border-white/40 bg-white/10 backdrop-blur-3xl px-2 py-1.5 rounded-xl font-light cursor-pointer transition-colors ${isScrolled ? "bg-white/90 text-gray-900 " : ""}`}>
                            Sign In
                        </button>
                        <Link to="/booking">
                            <button className={`text-sm bg-white/10 text-white backdrop-blur-md border border-white/10  px-3 py-2 rounded-xl font-light hover:text-gray-100 hover:bg-white/5 transition-all ${isScrolled ? "bg-white/5 text-gray-900 " : ""}`}>
                                BOOK NOW
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation Layout */}
                <div className='md:hidden flex items-center justify-between px-4 py-4 relative'>
                    {/* Mobile Spacer (Left) */}
                    <div className='w-10 h-10'></div>

                    {/* Mobile Centered Logo and Brand */}
                    <div className='flex flex-col items-center'>
                        <div className='relative'>
                            <img
                                src={images["logo.png"]}
                                alt="Logo"
                                className='h-12 w-12 object-cover animate-breathe'
                            />
                            {/* Breath animation elements from mouth */}
                            <div className='absolute top-3 left-8 transform -translate-x-1/2'>
                                <div className='breath-particle breath-1'></div>
                                <div className='breath-particle breath-2'></div>
                                <div className='breath-particle breath-3'></div>
                            </div>
                        </div>
                        <Link to='/' ><h2 className='text-sm font-light tracking-wider mt-1'>Mireva</h2> </Link>
                    </div>

                    {/* Mobile Menu Icon (Right) */}
                    <button
                        onClick={toggleMobileMenu}
                        className='text-white p-2'
                    >
                        {isMobileMenuOpen ? <X className='h-6 w-6' /> : <MenuIcon className='h-6 w-6'/>}
                    </button>
                </div>


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
                            <Link to='/experience' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Experience</Link>
                            <Link to='/contact' className='block text-gray-200 hover:text-white py-2 transition-colors duration-200'>Contact</Link>
                        </div>
                        <div className="pt-6 border-t border-white/20 space-y-4">
                        <button className="w-full text-center font-light text-gray-300 border border-gray-400 rounded-xl hover:text-white py-2 transition-colors duration-200">Sign In</button>
                        <Link to="/booking">
                            <button className="w-full bg-white/85 text-black py-3 rounded-xl font-light hover:bg-gray-200 transition-colors duration-200">BOOK NOW</button>
                        </Link>
                        </div>
                    </div>
                    
                    <><p className='font-light text-xs text-center mt-20 pt-2'>© 2025 Mireva Resort</p></>

                </div>
            </div>

            {/* Main Content */}
            <section className='relative h-screen overflow-hidden'>
                <div className='relative z-10 flex flex-col items-center justify-center px-6 text-center text-white'>
                        <div className='mb-2 mt-16 max-[480px]:mt-18 max-[480px]:mb-0 w-full'>
                            <h1 
                                data-animate-id="hero-title"
                                className={getAnimationClass("hero-title", 'font-extralight text-5xl pt-10 max-[480px]:tracking-[10px] lg:text-8xl pl-.5 tracking-[27px] lg:pl-15 lg:tracking-[105px] mb-6', 'animate-slide-in-down')}
                            >
                                DISCOVER
                            </h1>
                            <div 
                                data-animate-id="hero-line"
                                className={getAnimationClass("hero-line", 'max-[480px]:hidden w-90 h-px mx-auto mb-8 bg-white', 'animate-scale-in')} 
                            />
                        </div>
                    </div>
                <div className='mt-15 md:mt-10 grid grid-cols-2 gap-1 items-start'>
                    <div className='flex flex-col mt-4 justify-between px-2 max-w-[800px]'>
                        <div>
                            <h2 
                                data-animate-id="hero-subtitle"
                                className={getAnimationClass("hero-subtitle", 'max-[480px]:hidden md:text-6xl font-extralight text-white tracking-[0.2em]', 'animate-slide-in-left')}
                            >
                                MORE THAN A
                                <br />
                                DESTINATION
                            </h2>

                            <p 
                                data-animate-id="hero-description"
                                className={getAnimationClass("hero-description", 'mt-6 max-[480px]:text-[12px] font-light max-w-md text-white text-sm', 'animate-slide-in-left animate-delay-100')}
                            >
                            This page is your guide to everything you'll see, feel, and
                            experience when you arrive — from the suites you'll call home to
                            the moments that will stay with you long after you leave.
                            </p>
                        </div>
                        <div 
                            data-animate-id="hero-button"
                            className={getAnimationClass("hero-button", 'flex mt-8 w-45 max-[480px]:w-35 text-center justify-center items-center gap-2 bg-white/5 backdrop-blur-xs text-white text-sm px-4 py-2 rounded-xl border border-white/10 transform cursor-pointer hover-lift', 'animate-slide-in-left animate-delay-200')}
                        onClick={() => {
                            const nextSection = document.getElementById('next-section')
                            if (nextSection) {
                                nextSection.scrollIntoView({ behaviour: 'smooth' });
                            }
                        }}
                        >
                            <span>Scroll Down</span>
                            <ChevronDownCircleIcon className='h-6 w-6 font-extralight' />
                        </div>
                        
                    </div>
                    <div className='md:px-20 flex flex-col justify-between items-end'>
                        <div className='flex flex-col gap-4 items-end'>
                            <div 
                                data-animate-id="hero-tag-1"
                                className={getAnimationClass("hero-tag-1", 'bg-white/5 backdrop-blur-xs text-white text-sm px-2 py-1 rounded-full border border-white/20 shadow-lg hover-lift', 'animate-slide-in-right')}
                            >
                                <p>2,000+ Guest Reviews</p>
                            </div>
                            <div 
                                data-animate-id="hero-tag-2"
                                className={getAnimationClass("hero-tag-2", 'bg-white/5 backdrop-blur-xs text-white text-sm px-2 py-1 rounded-full border border-white/20 shadow-lg hover-lift', 'animate-slide-in-right animate-delay-100')}
                            >
                                <p>Private Suites</p>
                            </div>
                            <div 
                                data-animate-id="hero-tag-3"
                                className={getAnimationClass("hero-tag-3", 'bg-white/5 backdrop-blur-xs text-white text-sm px-2 py-1 rounded-full border border-white/20 shadow-lg hover-lift', 'animate-slide-in-right animate-delay-200')}
                            >
                                <p>365 Star Nights</p>
                            </div>
                            <div 
                                data-animate-id="hero-tag-4"
                                className={getAnimationClass("hero-tag-4", 'bg-white/5 backdrop-blur-xs text-white text-sm px-2 py-1 rounded-full border border-white/20 shadow-lg hover-lift', 'animate-slide-in-right animate-delay-300')}
                            >
                                <p>Off-Grid Power</p>
                            </div>
                            <div>
                                <h2 
                                    data-animate-id="hero-subtitle-2"
                                    className={getAnimationClass("hero-subtitle-2", 'max-[640px]:hidden md:text-6xl font-extralight text-white tracking-[0.2em]', 'animate-slide-in-right')}
                                >
                                IT'S AN
                                <br />
                                EXPERIENCE
                            </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            {/* Body section */}
            <section id='next-section' className=' px-4 py-10 md:py-12'>
                <div className='grid items-center max-w-6xl gap-6 md:gap-22 mx-auto lg:grid-cols-2'>
                    <div 
                        data-animate-id="video-section"
                        className={getAnimationClass("video-section", 'flex flex-col items-center md:mt-[-80px]', 'animate-slide-in-left')}
                    >
                        <video
                            src={videos["pool.mp4"]}
                            alt="Pool area"
                            className='object-cover w-full h-120 rounded-xs'
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <PlayCircleIcon className='absolute  mt-[220px] text-white' />
                    </div>
                    <div 
                        data-animate-id="content-section"
                        className={getAnimationClass("content-section", 'flex flex-col items-center gap-6 md:gap-12', 'animate-slide-in-right animate-delay-200')}
                    >
                        <h3 
                            data-animate-id="content-title"
                            className={getAnimationClass("content-title", ' text-2xl md:text-2xl font-light md:font-extralight tracking-widest', 'animate-slide-in-up animate-delay-300')}
                        >
                            NESTLED IN UNTOUCHED HILLS AND SURROUNDED BY ANCIENT TREES, Mireva OFFERS COMPLETE PRIVACY AND UNSPOILED VIEWS OF THE NIGHT SKY, NO NOISE, NO RUSH -- JUST THE SOUND OF THE WIND, THE FOREST AND THE STARS ABOVE.
                        </h3>
                        <div className='grid gap-6 md:gap-12 items-center mx-auto lg:grid-cols-2'>
                            <div 
                                data-animate-id="location-info"
                                className={getAnimationClass("location-info", '', 'animate-slide-in-left animate-delay-400')}
                            >
                                <h4 className='font-light text-gray-600'>
                                    [Our location <br />& Setting]
                                </h4>
                                <p className='pt-6 font-light text-black'>
                                    Here the air is crisp and the nights are silent and every path leads to a new view -- whether it's a sunlit canopy a gentle river bend or a horizon glowing under a thousand stars. The land itself shapes your journey guiding you to slow down and simply be.
                                </p>
                            </div>
                            <div 
                                data-animate-id="globe-section"
                                className={getAnimationClass("globe-section", 'flex flex-col justify-center items-center md:pt-16', 'animate-scale-in animate-delay-600')}
                            >
                                <img
                                    src={images["globe.png"]}
                                    alt="The Globe"
                                    className='z-[9999] w-35 h-35 mb-48 rounded-full items-center animate-rotate-slow hover-glow'
                                />
                                <div className='absolute bg-blue-400 md:bg-blue-500 rounded-xs w-55 h-55 '>
                                    <div className='text-white flex flex-col items-center gap-5'>
                                        <p className='pt-32'>View Map & Directions</p>
                                        <ArrowRightCircleIcon className='text-white ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Suites */}
            <section id='suites' className='px-4 md:px-6 mb-12'>
                <div className='max-w-7xl mx-auto'>
                    <h2 
                        data-animate-id="suites-title"
                        className={getAnimationClass("suites-title", 'text-4xl md:text-5xl mb-8 font-extralight md:pl-14 tracking-widest', 'animate-slide-in-left')}
                    >
                        OUR SIGNATURE <br /> SUITES.
                    </h2>
                    
                    {/* Desktop Horizontal Carousel */}
                    <div 
                        data-animate-id="suites-carousel"
                        className={getAnimationClass("suites-carousel", 'hidden md:block', 'animate-slide-in-up animate-delay-100')}
                    >
                        <div className='relative'>
                            {/* Navigation arrows */}
                            <button 
                                onClick={prevSuite}
                                className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all hover-lift'
                            >
                                <ArrowLeftCircleIcon className='w-6 h-6' />
                            </button>
                            <button 
                                onClick={nextSuite}
                                className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all hover-lift'
                            >
                                <ArrowRightCircleIcon className='w-6 h-6' />
                            </button>

                            {/* Carousel container */}
                            <div className='flex items-center justify-center gap-8 px-20 overflow-hidden'>
                                {/* Left side image (current - 1) */}
                                <div 
                                    onClick={() => setCurrentSuiteIndex((currentSuiteIndex - 1 + suites.length) % suites.length)}
                                    className='relative cursor-pointer transition-all duration-500 rounded-xs overflow-hidden w-80 h-100 scale-90 opacity-70 z-20 flex-shrink-0 shadow-lg hover:shadow-xl'
                                >
                                    <img 
                                        src={suites[(currentSuiteIndex - 1 + suites.length) % suites.length].image}
                                        alt={suites[(currentSuiteIndex - 1 + suites.length) % suites.length].name}
                                        className='w-full h-100 object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black/30'></div>
                                    <div className='absolute bottom-6 left-6 right-6 text-white'>
                                        <h4 className='text-xl font-light text-center'>{suites[(currentSuiteIndex - 1 + suites.length) % suites.length].name}</h4>
                                    </div>
                                    {/* Click indicator */}
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-4'>
                                            <div className='w-8 h-8 border-2 border-white rounded-full flex items-center justify-center'>
                                                <div className='w-3 h-3 bg-white rounded-full'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center active image */}
                                <div className='relative cursor-pointer transition-all duration-500 rounded-xs overflow-hidden w-96 h-96 scale-110 z-30 shadow-2xl flex-shrink-0'>
                                    <img 
                                        src={suites[currentSuiteIndex].image}
                                        alt={suites[currentSuiteIndex].name}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                                    <div className='absolute bottom-8 left-8 right-8 text-white animate-fadeInUp'>
                                        <h3 className='text-3xl font-light mb-3'>{suites[currentSuiteIndex].name}</h3>
                                        <p className='text-base opacity-90 mb-6 line-clamp-2'>{suites[currentSuiteIndex].description}</p>
                                        <div className='flex items-center justify-between'>
                                            <button className='bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-base hover:bg-white/30 transition-colors font-light'>
                                                More Details
                                            </button>
                                            <div className='flex gap-3'>
                                                <Heart className='w-6 h-6 cursor-pointer hover:fill-red-500 transition-colors' />
                                                <ShareIcon className='w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side image (current + 1) */}
                                <div 
                                    onClick={() => setCurrentSuiteIndex((currentSuiteIndex + 1) % suites.length)}
                                    className='relative cursor-pointer transition-all duration-500 rounded-xs overflow-hidden w-80 h-80 scale-90 opacity-70 z-20 flex-shrink-0 shadow-lg hover:shadow-xl'
                                >
                                    <img 
                                        src={suites[(currentSuiteIndex + 1) % suites.length].image}
                                        alt={suites[(currentSuiteIndex + 1) % suites.length].name}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black/30'></div>
                                    <div className='absolute bottom-6 left-6 right-6 text-white'>
                                        <h4 className='text-xl font-light text-center'>{suites[(currentSuiteIndex + 1) % suites.length].name}</h4>
                                    </div>
                                    {/* Click indicator */}
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-4'>
                                            <div className='w-8 h-8 border-2 border-white rounded-full flex items-center justify-center'>
                                                <div className='w-3 h-3 bg-white rounded-full'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Counter */}
                            <div className='flex justify-center mt-6'>
                                <div className='flex items-center gap-2 text-gray-600'>
                                    <span className='text-2xl font-light'>{String(currentSuiteIndex + 1).padStart(2, '0')}</span>
                                    <span className='text-sm'>/ {String(suites.length).padStart(2, '0')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Carousel */}
                    <div className='md:hidden'>
                        <div className='relative'>
                            {/* Mobile Navigation arrows */}
                            <button 
                                onClick={prevSuite}
                                className='absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white'
                            >
                                <ArrowLeftCircleIcon className='w-5 h-5' />
                            </button>
                            <button 
                                onClick={nextSuite}
                                className='absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white'
                            >
                                <ArrowRightCircleIcon className='w-5 h-5' />
                            </button>

                            {/* Mobile carousel container */}
                            <div className='flex items-center justify-center gap-6 px-8 overflow-hidden'>
                                {/* Left side image (current - 1) */}
                                <div 
                                    onClick={() => setCurrentSuiteIndex((currentSuiteIndex - 1 + suites.length) % suites.length)}
                                    className='relative cursor-pointer transition-all duration-500 rounded-xs overflow-hidden w-64 h-100 scale-90 opacity-70 z-20 flex-shrink-0 shadow-lg'
                                >
                                    <img 
                                        src={suites[(currentSuiteIndex - 1 + suites.length) % suites.length].image}
                                        alt={suites[(currentSuiteIndex - 1 + suites.length) % suites.length].name}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black/40'></div>
                                    <div className='absolute bottom-3 left-3 right-3 text-white'>
                                        <h4 className='text-sm font-light text-center'>{suites[(currentSuiteIndex - 1 + suites.length) % suites.length].name}</h4>
                                    </div>
                                    {/* Click indicator */}
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                                            <div className='w-6 h-6 border-2 border-white rounded-full flex items-center justify-center'>
                                                <div className='w-2 h-2 bg-white rounded-full'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center active image */}
                                <div className='relative cursor-pointer transition-all duration-500 rounded-xs overflow-hidden w-80 h-130 scale-110 z-30 shadow-2xl flex-shrink-0'>
                                    <img 
                                        src={suites[currentSuiteIndex].image}
                                        alt={suites[currentSuiteIndex].name}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                                    <div className='absolute bottom-10 left-5 right-5 text-white'>
                                        <h3 className='text-xl font-light mb-2'>{suites[currentSuiteIndex].name}</h3>
                                        <p className='text-sm opacity-90 mb-4 line-clamp-2'>{suites[currentSuiteIndex].description}</p>
                                        <div className='flex items-center justify-between'>
                                            <button className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors font-light'>
                                                Details
                                            </button>
                                            <div className='flex gap-2'>
                                                <Heart className='w-5 h-5' />
                                                <ShareIcon className='w-5 h-5' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side image (current + 1) */}
                                <div 
                                    onClick={() => setCurrentSuiteIndex((currentSuiteIndex + 1) % suites.length)}
                                    className='relative cursor-pointer transition-all duration-500 rounded-xl overflow-hidden w-64 h-72 scale-90 opacity-70 z-20 flex-shrink-0 shadow-lg'
                                >
                                    <img 
                                        src={suites[(currentSuiteIndex + 1) % suites.length].image}
                                        alt={suites[(currentSuiteIndex + 1) % suites.length].name}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black/40'></div>
                                    <div className='absolute bottom-3 left-3 right-3 text-white'>
                                        <h4 className='text-sm font-light text-center'>{suites[(currentSuiteIndex + 1) % suites.length].name}</h4>
                                    </div>
                                    {/* Click indicator */}
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                                            <div className='w-6 h-6 border-2 border-white rounded-full flex items-center justify-center'>
                                                <div className='w-2 h-2 bg-white rounded-full'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile counter and dots */}
                            <div className='flex items-center justify-between mt-4'>
                                <div className='flex items-center gap-2 text-gray-600'>
                                    <span className='text-lg font-light'>{String(currentSuiteIndex + 1).padStart(2, '0')}</span>
                                    <span className='text-sm'>/ {String(suites.length).padStart(2, '0')}</span>
                                </div>
                                <div className='flex gap-1'>
                                    {suites.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSuiteIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                index === currentSuiteIndex ? 'bg-blue-500' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities and Amenities */}
            <section className='px-4 md:px-12 py-8 mb-24'>
                <div className='max-w-7xl mx-auto'>
                    {/* Desktop Layout */}
                    <div className='hidden md:grid md:grid-cols-2 gap-16 items-start'>
                        {/* Left side - Images */}
                        <div className='flex gap-4 animate-slide-in-left'>
                            <div className='flex-1'>
                                <img
                                    src={amenities[currentAmenityIndex].mainImage}
                                    alt={amenities[currentAmenityIndex].title}
                                    className='object-cover w-full h-130 rounded-xs shadow-lg transition-all duration-500 hover-lift'
                                />
                            </div>
                            <div className='flex flex-col justify-between h-130 w-48'>
                                <img
                                    src={amenities[currentAmenityIndex].secondaryImage}
                                    alt={`${amenities[currentAmenityIndex].title} details`}
                                    className='object-cover w-full h-64 rounded-xs shadow-lg transition-all duration-500'
                                />
                                <div className='text-end'>
                                    <h3 className='font-light text-xl tracking-wide'>{amenities[currentAmenityIndex].title.toUpperCase()}</h3>
                                    <p className='text-sm text-gray-600 mt-2'>{amenities[currentAmenityIndex].subtitle}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div 
                            data-animate-id="amenities-content"
                            className={getAnimationClass("amenities-content", 'flex flex-col justify-between h-96', 'animate-slide-in-right animate-delay-100')}
                        >
                            <div>
                                <h2 
                                    data-animate-id="amenities-title"
                                    className={getAnimationClass("amenities-title", 'text-4xl text-end md:text-5xl font-extralight tracking-wider leading-tight mb-8', 'animate-slide-in-left')}
                                >
                                    FACILITIES &<br /> AMENITIES.
                                </h2>
                            </div>
                            
                            <div>
                                <div className='flex justify-between items-center mt-52'>
                                    <div 
                                        data-animate-id="amenities-counter"
                                        className={getAnimationClass("amenities-counter", 'flex items-baseline gap-2', 'animate-slide-in-up animate-delay-200')}
                                    >
                                        <h2 className='text-4xl font-light'>{String(currentAmenityIndex + 1).padStart(2, '0')}</h2>
                                        <h3 className='text-sm text-gray-500'>/ {String(amenities.length).padStart(2, '0')}</h3>
                                    </div>
                                    <div 
                                        data-animate-id="amenities-nav"
                                        className={getAnimationClass("amenities-nav", 'flex gap-3', 'animate-slide-in-up animate-delay-300')}
                                    >
                                        <button 
                                            onClick={prevAmenity}
                                            className='p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors hover-lift'
                                        >
                                            <ArrowLeftCircleIcon className='w-6 h-6' />
                                        </button>
                                        <button 
                                            onClick={nextAmenity}
                                            className='p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors hover-lift'
                                        >
                                            <ArrowRightCircleIcon className='w-6 h-6' />
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className='text-2xl font-light mb-4 tracking-wide'>{amenities[currentAmenityIndex].title}</h3>
                                    <p className='font-light text-gray-700 leading-relaxed'>
                                        {amenities[currentAmenityIndex].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className='md:hidden space-y-6'>
                        <h2 className='text-3xl font-extralight tracking-wider text-start'>
                            FACILITIES &<br /> AMENITIES.
                        </h2>
                        
                        <div className='space-y-6'>
                            {/* Mobile Images - Side by side */}
                            <div className='flex gap-3 '>
                                <div className='flex-1'>
                                    <img
                                        src={amenities[currentAmenityIndex].mainImage}
                                        alt={amenities[currentAmenityIndex].title}
                                        className='object-cover w-full h-100 rounded-xs shadow-lg transition-all duration-500'
                                    />
                                </div>
                                <div className='flex flex-col gap-3 w-32'>
                                    <img
                                        src={amenities[currentAmenityIndex].secondaryImage}
                                        alt={`${amenities[currentAmenityIndex].title} details`}
                                        className='object-cover w-full h-56 rounded-xs shadow-lg transition-all duration-500'
                                    />
                                    <div className='text-end mt-26'>
                                        <h3 className='font-light text-sm tracking-wide'>{amenities[currentAmenityIndex].title.toUpperCase()}</h3>
                                        <p className='text-xs text-gray-600 mt-1'>{amenities[currentAmenityIndex].subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className='flex justify-between items-center'>
                                <div className='flex items-baseline gap-2'>
                                    <h2 className='text-3xl font-light'>{String(currentAmenityIndex + 1).padStart(2, '0')}</h2>
                                    <h3 className='text-sm text-gray-500'>/ {String(amenities.length).padStart(2, '0')}</h3>
                                </div>
                                <div className='flex gap-2'>
                                    <button 
                                        onClick={prevAmenity}
                                        className='p-2 rounded-full border border-gray-300'
                                    >
                                        <ArrowLeftCircleIcon className='w-5 h-5' />
                                    </button>
                                    <button 
                                        onClick={nextAmenity}
                                        className='p-2 rounded-full border border-gray-300'
                                    >
                                        <ArrowRightCircleIcon className='w-5 h-5' />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className='text-lg font-light mb-3 tracking-wide'>{amenities[currentAmenityIndex].title}</h3>
                                <p className='font-light text-gray-700 leading-relaxed text-sm'>
                                    {amenities[currentAmenityIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* what you will experience */}
            <section id='experience' className='px-4 md:px-12 pb-12'>
                <div className='grid md:grid-cols-2 gap-2'>
                    <h2 
                        data-animate-id="experience-title-mobile"
                        className={getAnimationClass("experience-title-mobile", 'md:hidden text-4xl md:text-5xl font-extralight mb-3', 'animate-slide-in-left')}
                    >
                        WHAT YOU'LL<br />EXPERIENCE.
                    </h2>
                    <div 
                        data-animate-id="experience-content-desktop"
                        className={getAnimationClass("experience-content-desktop", 'hidden md:flex flex-col mb-6 gap-10 md:gap-15', 'animate-slide-in-left')}
                    >
                        <div className=''>
                            <h2 
                                data-animate-id="experience-title-desktop"
                                className={getAnimationClass("experience-title-desktop", 'text-4xl md:text-5xl font-extralight mb-3', 'animate-slide-in-down')}
                            >
                                WHAT YOU'LL<br />EXPERIENCE.
                            </h2>
                            <p 
                                data-animate-id="experience-description"
                                className={getAnimationClass("experience-description", 'font-light', 'animate-slide-in-up animate-delay-200')}
                            >
                                At Mireva every suite is designed to disappear into nature while offering a world of control within
                            </p>
                        </div>
                        <div 
                            data-animate-id="experience-explore-btn"
                            className={getAnimationClass("experience-explore-btn", 'bg-blue-400/80 rounded-sm px-4 w-50 md:w-90 py-12 flex flex-col gap-3 items-center text-white', 'animate-scale-in animate-delay-400')}
                        >
                            <p>Explore all Experiences</p>
                            <ArrowRightCircleIcon />
                        </div>
                    </div>
                    
                    {/* Desktop Carousel View */}
                    <div 
                        data-animate-id="experience-carousel"
                        className={getAnimationClass("experience-carousel", 'hidden md:flex items-center gap-4', 'animate-slide-in-right animate-delay-300')}
                    >
                        <button 
                            onClick={prevExperience}
                            className='p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover-lift'
                        >
                            <ChevronLeft className='w-6 h-6 text-gray-700' />
                        </button>
                        
                        <div className='flex gap-4 flex-1 overflow-hidden'>
                            {experiences.map((experience, index) => {
                                const isActive = index === currentExperienceIndex;
                                return (
                                    <div 
                                        key={index}
                                        data-animate-id={`experience-card-${index}`}
                                        className={getAnimationClass(`experience-card-${index}`, `transition-all duration-500 cursor-pointer ${
                                            isActive 
                                                ? 'flex-[12] opacity-100' 
                                                : 'flex-[0.5] opacity-60 hover:opacity-80'
                                        }`, `animate-scale-in animate-delay-${500 + index * 100}`)}
                                        onClick={() => setCurrentExperienceIndex(index)}
                                    >
                                        <img
                                            src={experience.image}
                                            className={`object-cover w-full rounded-xs mb-4 transition-all duration-500 ${
                                                isActive ? 'h-110' : 'h-60'
                                            }`}
                                            alt={experience.name}
                                        />
                                        {isActive && (
                                            <div className='space-y-2'>
                                                <h3 className='font-extralight text-xl'>{experience.name}</h3>
                                                <p className='font-light text-sm'>{experience.description}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        
                        <button 
                            onClick={nextExperience}
                            className='p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all'
                        >
                            <ChevronRight className='w-6 h-6 text-gray-700' />
                        </button>
                    </div>

                    {/* Mobile Column View */}
                    <div 
                        data-animate-id="experience-mobile-list"
                        className={getAnimationClass("experience-mobile-list", 'md:hidden space-y-6', 'animate-slide-in-up animate-delay-200')}
                    >
                        {experiences.map((experience, index) => (
                            <div 
                                key={index}
                                data-animate-id={`experience-mobile-${index}`}
                                className={getAnimationClass(`experience-mobile-${index}`, '', `animate-slide-in-left animate-delay-${300 + index * 150}`)}
                            >
                                <img
                                    src={experience.image}
                                    className='object-cover w-full h-100 mb-4 rounded-xs'
                                    alt={experience.name}
                                />
                                <h3 className='mb-1 font-extralight text-xl'>{experience.name}</h3>
                                <p className='font-light max-[480px]:text-xs mb-6'>{experience.description}</p>
                            </div>
                        ))}
                    </div>

                    <div 
                        data-animate-id="experience-mobile-bottom"
                        className={getAnimationClass("experience-mobile-bottom", 'md:hidden flex flex-col mb-6 gap-10 md:gap-15', 'animate-slide-in-up animate-delay-600')}
                    >
                        <div className=''>
                            <p className='font-light'>At Mireva every suite is designed to disappear into nature while offering a world of control within</p>
                        </div>
                        <div className='bg-blue-400/80 rounded-sm px-4 w-50 md:w-90 py-12 flex flex-col gap-3 items-center text-white'>
                            <p>Explore all Experiences</p>
                            <ArrowRightCircleIcon />
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 md:px-12'>
                    <div className='hidden md:grid md:grid-cols-2'>
                        <div className='flex flex-col items-start gap-12 justify-center mb-4 animate-slide-in-left'>
                            <p className='font-light md:pr-42'>"{testimonials[currentTestimonialIndex].quote}"</p>
                            <div className='md:flex gap-10 items-center'>
                                <div className='font-light'>
                                    <StarIcon className='text-yellow-300 fill-amber-300' />
                                    [{testimonials[currentTestimonialIndex].rating}]
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 max-[480px]:mx-25'>
                                    <div>
                                        <img
                                            src={testimonials[currentTestimonialIndex].image}
                                            className='object-cover w-24 h-24 rounded-full hover-scale'
                                        />
                                    </div>
                                    <p>{testimonials[currentTestimonialIndex].guest}</p>
                                </div>
                            </div>
                            <p className='font-light text-sm'>[Your Escape Awaits]</p>
                        </div>
                        <div 
                            data-animate-id="testimonials-header"
                            className={getAnimationClass("testimonials-header", '', 'animate-slide-in-right animate-delay-100')}
                        >
                            <h2 
                                data-animate-id="testimonials-title"
                                className={getAnimationClass("testimonials-title", 'text-4xl md:text-5xl font-extralight tracking-wider', 'animate-slide-in-left')}
                            >
                                WHAT OUR GUESTS<br />ARE SAYING.
                            </h2>
                            <div className='flex gap-3 mt-4 items-center justify-end px-4'>
                                <button onClick={prevTestimonial} className='p-2 hover:bg-gray-100 rounded-full transition-colors hover-lift'>
                                    <ArrowLeftCircleIcon className='w-8 h-8' />
                                </button>
                                <button onClick={nextTestimonial} className='p-2 hover:bg-gray-100 rounded-full transition-colors hover-lift'>
                                    <ArrowRightCircle className='w-8 h-8' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden grid md:grid-cols-2'>
                        
                        <div>
                            <h2 className='text-4xl md:text-5xl font-extralight tracking-wider'>WHAT OUR GUESTS<br />ARE SAYING.</h2>
                            <div className='flex gap-3 mt-4 items-center justify-end px-4'>
                                <button onClick={prevTestimonial} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                                    <ArrowLeftCircleIcon className='w-8 h-8' />
                                </button>
                                <button onClick={nextTestimonial} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                                    <ArrowRightCircle className='w-8 h-8' />
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-12 justify-center mt-4'>
                            <p className='font-light md:pr-42'>"{testimonials[currentTestimonialIndex].quote}"</p>
                            <div className='md:flex gap-10 items-center'>
                                <div className='font-light'>
                                    <StarIcon className='text-yellow-300 fill-amber-300' />
                                    [{testimonials[currentTestimonialIndex].rating}]
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 max-[480px]:mx-25'>
                                    <div>
                                        <img
                                            src={testimonials[currentTestimonialIndex].image}
                                            className='object-cover w-24 h-24 rounded-full'
                                        />
                                    </div>
                                    <p>{testimonials[currentTestimonialIndex].guest}</p>
                                </div>
                            </div>
                            <p className='font-light text-sm'>[Your Escape Awaits]</p>
                        </div>
                    </div>

            </section>

            <section className='px-4 py-12 md:px-12'>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div 
                        data-animate-id="make-most-content"
                        className={getAnimationClass("make-most-content", 'flex flex-col gap-16', 'animate-slide-in-left')}
                    >
                        <h2 
                            data-animate-id="make-most-title"
                            className={getAnimationClass("make-most-title", 'text-4xl md:text-5xl font-extralight tracking-wider', 'animate-slide-in-down')}
                        >
                            MAKE THE MOST OF YOUR Mireva  EXPERIENCE
                        </h2>
                        <p 
                            data-animate-id="make-most-description"
                            className={getAnimationClass("make-most-description", 'font-light', 'animate-slide-in-up animate-delay-200')}
                        >
                            Step away from the noise and into a world built for stillness, beauty and connection.Whether you're planning a weekend retreat or a week under the stars. Mireva  is ready to welcome you.
                        </p>
                        <img
                            data-animate-id="make-most-image"
                            className={getAnimationClass("make-most-image", 'hidden md:flex object-cover md:w-130 md:h-50', 'animate-scale-in animate-delay-400')}
                            src={images["green-hotel.jpg"]}
                        />
                    </div>
                    <div 
                        data-animate-id="make-most-video-section"
                        className={getAnimationClass("make-most-video-section", 'md:ml-45', 'animate-slide-in-right animate-delay-300')}
                    >
                        <video
                            src={videos["pool-2.mp4"]}
                            alt="Pool area"
                            className='object-cover w-full h-120 rounded-xs'
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <Link to="/booking">
                            <div 
                                data-animate-id="make-most-book-btn"
                                className={getAnimationClass("make-most-book-btn", 'absolute mt-[-140px] ml-18 md:ml-45 rounded-sm bg-blue-400/80 flex flex-col gap-3 items-center justify-center py-8 w-60 cursor-pointer hover:bg-blue-500/80 transition-colors', 'animate-scale-in animate-delay-600')}
                            >
                                <p>Book Your Stay</p>
                                <ArrowRightCircleIcon />
                            </div>
                        </Link>
                    </div>
                </div>

            </section>

            <footer 
                data-animate-id="footer"
                className={getAnimationClass("footer", 'bg-gray-50 text-black pb-10 pt-12 px-4 md:px-8', 'animate-slide-in-up')}
            >
                <div className='max-w-7xl mx-auto'>
                    {/* Main footer content */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12'>
                        {/* Logo and Social Media - Left side */}
                        <div 
                            data-animate-id="footer-logo"
                            className={getAnimationClass("footer-logo", 'lg:col-span-4', 'animate-slide-in-left animate-delay-100')}
                        >
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

           

        </div>
    )
}
export default Home;