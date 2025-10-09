import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import ReusableNavbar from './ReusableNavbar'
import ReusableFooter from './ReusableFooter';
import { Heart, Bed, Bath, Square, ChevronLeft, ChevronRight, ArrowLeft, Star, MapPin, Calendar, Wifi, Car, UtensilsCrossed, Dumbbell } from 'lucide-react';
import images from '../utils/images.js';


const Suite1 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { propertyName } = useParams();
    
    // Get property data from navigation state or fallback to default
    const [property, setProperty] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Sample images for the property gallery
    const propertyImages = [
        images["rizon-suite.jpg"],
        images["lanca-suite.jpg"], 
        images["miamia-suite.jpg"],
        images["seale-suite.jpg"],
        images["zibar-suite.jpg"]
    ];

    const amenities = [
        { icon: Wifi, name: "Free Wi-Fi" },
        { icon: Car, name: "Free Parking" },
        { icon: UtensilsCrossed, name: "Kitchen" },
        { icon: Dumbbell, name: "Fitness Center" },
        { icon: Heart, name: "Spa Services" },
        { icon: MapPin, name: "Great Location" }
    ];

    useEffect(() => {
        if (location.state?.property) {
            setProperty(location.state.property);
        } else {
            // Fallback property data if no state is passed
            setProperty({
                id: 1,
                price: 'Kshs. 30,095',
                period: '/month',
                title: 'Luxury Suite',
                address: 'Westlands, Nairobi',
                beds: 2,
                bathrooms: 2,
                area: '5×7 m²',
                image: images["rizon-suite.jpg"],
                featured: true,
                description: "Experience luxury in this beautifully appointed suite featuring modern amenities and stunning views. Perfect for guests seeking comfort and elegance in the heart of the city."
            });
        }
    }, [location.state]);

    const handleBackToSuites = () => {
        navigate('/suites');
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
    };

    if (!property) {
        return (
            <>
                <ReusableNavbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loading...</h2>
                        <button 
                            onClick={handleBackToSuites}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Back to Suites
                        </button>
                    </div>
                </div>
                <ReusableFooter />
            </>
        );
    }
  
  
    return (
        <>
            <ReusableNavbar />
            
            <div className="min-h-screen bg-white">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <button 
                        onClick={handleBackToSuites}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Suites</span>
                    </button>
                </div>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                    
                    {/* Image Gallery - Full width on mobile */}
                    <div className="relative mb-8 -mx-4 sm:mx-0">
                        <div className='px-4 sm:px-0'>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-light font-serif tracking-wider text-gray-900 mb-2">
                                    {property.title}
                                </h1>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-lg">{property.address}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2  px-4 py-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="text-lg font-medium">4.8</span>
                                <span className="text-gray-500">(124 reviews)</span>
                            </div>
                        </div>
                        </div>
                        <div className="relative h-96 md:h-[500px] sm:rounded-sm overflow-hidden">
                            <img 
                                src={propertyImages[currentImageIndex]}
                                alt={property.title}
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {propertyImages.length}
                            </div>

                            {/* Like Button */}
                            <button 
                                onClick={() => setIsLiked(!isLiked)}
                                className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                            >
                                <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                            </button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="flex gap-2 mt-4 overflow-x-auto px-4 sm:px-0">
                            {propertyImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                        index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                                    }`}
                                >
                                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Property Details */}
                        <div className="lg:col-span-2">
                            {/* Property Header */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                       {/* Reviews moved to header section above */}
                                    </div>
                                    {property.featured && (
                                        <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Property Stats */}
                                <div className="flex items-center gap-6 text-gray-700 border-t border-b py-4">
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-5 h-5" />
                                        <span className="font-medium">{property.beds} Bedrooms</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-5 h-5" />
                                        <span className="font-medium">{property.bathrooms} Bathrooms</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Square className="w-5 h-5" />
                                        <span className="font-medium">{property.area}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">ABOUT THIS SUITE</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {property.description || "Experience luxury in this beautifully appointed suite featuring modern amenities and stunning views. Perfect for guests seeking comfort and elegance in the heart of the city. The space offers a perfect blend of contemporary design and traditional comfort, making it ideal for both business and leisure travelers."}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                            <amenity.icon className="w-5 h-5 text-gray-600" />
                                            <span className="text-gray-700">{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-3xl font-semibold text-blue-600">{property.price}</span>
                                        <span className="text-gray-500">{property.period}</span>
                                    </div>

                                    {/* Booking Form */}
                                    <div className="space-y-4 mb-6">
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="border border-gray-300 rounded-lg p-3">
                                                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                    Check-in
                                                </label>
                                                <input 
                                                    type="date" 
                                                    className="w-full text-sm text-gray-900 bg-transparent focus:outline-none"
                                                />
                                            </div>
                                            <div className="border border-gray-300 rounded-lg p-3">
                                                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                    Check-out
                                                </label>
                                                <input 
                                                    type="date" 
                                                    className="w-full text-sm text-gray-900 bg-transparent focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 rounded-lg p-3">
                                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                Guests
                                            </label>
                                            <select className="w-full text-sm text-gray-900 bg-transparent focus:outline-none">
                                                <option>1 guest</option>
                                                <option>2 guests</option>
                                                <option>3 guests</option>
                                                <option>4 guests</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <Link to="/booking">
                                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                                            Reserve Now
                                        </button>
                                    </Link>

                                    <p className="text-sm text-gray-600 text-center">
                                        You won't be charged yet
                                    </p>

                                    {/* Price Breakdown */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700">{property.price} x 7 nights</span>
                                            <span className="text-gray-900">Kshs. 210,665</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700">Cleaning fee</span>
                                            <span className="text-gray-900">Kshs. 5,000</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700">Service fee</span>
                                            <span className="text-gray-900">Kshs. 3,500</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-gray-200 font-semibold">
                                            <span className="text-gray-900">Total</span>
                                            <span className="text-gray-900">Kshs. 219,165</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More Suites Section */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900">More Suites You Might Like</h2>
                            <button 
                                onClick={handleBackToSuites}
                                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                                View All Suites →
                            </button>
                        </div>

                        {/* Desktop Row Layout */}
                        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    id: 2,
                                    price: 'Kshs. 20,500',
                                    period: '/month',
                                    title: 'Palmstone Residences',
                                    address: 'Dunga, Kisumu',
                                    beds: 4,
                                    bathrooms: 2,
                                    area: '6×7.5 m²',
                                    image: images["green-hotel.jpg"]
                                },
                                {
                                    id: 3,
                                    price: 'Kshs. 30,550',
                                    period: '/month',
                                    title: 'Cedar Grove Estate',
                                    address: 'Shiloh, Mombasa',
                                    beds: 3,
                                    bathrooms: 3,
                                    area: '8×10 m²',
                                    image: images["lanca-suite.jpg"]
                                },
                                {
                                    id: 4,
                                    price: 'Kshs. 10,400',
                                    period: '/month',
                                    title: 'Hillside Haven',
                                    address: 'Lamu, Kenya',
                                    beds: 4,
                                    bathrooms: 2,
                                    area: '6×8 m²',
                                    image: images['miamia-suite.jpg']
                                },
                                {
                                    id: 5,
                                    price: 'Kshs. 20,500',
                                    period: '/month',
                                    title: 'The Oakridge Villa',
                                    address: 'Zanzibar, Tanzania',
                                    beds: 2,
                                    bathrooms: 1,
                                    area: '5×7.5 m²',
                                    image: images["seale-suite.jpg"]
                                }
                            ].map((suite) => (
                                <div 
                                    key={suite.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100"
                                    onClick={() => {
                                        const propertySlug = suite.title.toLowerCase()
                                            .replace(/[^\w\s]/g, '')
                                            .replace(/\s+/g, '-')
                                            .trim();
                                        navigate(`/suites/${propertySlug}`, { state: { property: suite } });
                                    }}
                                >
                                    <div className="relative">
                                        <img 
                                            src={suite.image} 
                                            alt={suite.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <button 
                                            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <Heart className="w-4 h-4 text-gray-600" />
                                        </button>
                                        {suite.featured && (
                                            <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="p-4">
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-xl font-semibold text-blue-600">{suite.price}</span>
                                            <span className="text-gray-500 text-sm">{suite.period}</span>
                                        </div>
                                        
                                        <h3 className="font-light font-serif tracking-wider text-lg text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                                            {suite.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-3">{suite.address}</p>
                                        
                                        <div className="flex items-center gap-3 text-xs text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Bed className="w-3 h-3" />
                                                <span>{suite.beds}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath className="w-3 h-3" />
                                                <span>{suite.bathrooms}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Square className="w-3 h-3" />
                                                <span>{suite.area}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Carousel Layout */}
                        <div className="md:hidden">
                            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                                {[
                                    {
                                        id: 2,
                                        price: 'Kshs. 20,500',
                                        period: '/month',
                                        title: 'Palmstone Residences',
                                        address: 'Dunga, Kisumu',
                                        beds: 4,
                                        bathrooms: 2,
                                        area: '6×7.5 m²',
                                        image: images["green-hotel.jpg"]
                                    },
                                    {
                                        id: 3,
                                        price: 'Kshs. 30,550',
                                        period: '/month',
                                        title: 'Cedar Grove Estate',
                                        address: 'Shiloh, Mombasa',
                                        beds: 3,
                                        bathrooms: 3,
                                        area: '8×10 m²',
                                        image: images["lanca-suite.jpg"]
                                    },
                                    {
                                        id: 4,
                                        price: 'Kshs. 10,400',
                                        period: '/month',
                                        title: 'Hillside Haven',
                                        address: 'Lamu, Kenya',
                                        beds: 4,
                                        bathrooms: 2,
                                        area: '6×8 m²',
                                        image: images['miamia-suite.jpg']
                                    }
                                ].map((suite) => (
                                    <div 
                                        key={suite.id}
                                        className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 snap-start"
                                        onClick={() => {
                                            const propertySlug = suite.title.toLowerCase()
                                                .replace(/[^\w\s]/g, '')
                                                .replace(/\s+/g, '-')
                                                .trim();
                                            navigate(`/suites/${propertySlug}`, { state: { property: suite } });
                                        }}
                                    >
                                        <div className="relative">
                                            <img 
                                                src={suite.image} 
                                                alt={suite.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <button 
                                                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <Heart className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </div>
                                        
                                        <div className="p-4">
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className="text-xl font-semibold text-blue-600">{suite.price}</span>
                                                <span className="text-gray-500 text-sm">{suite.period}</span>
                                            </div>
                                            
                                            <h3 className="font-light font-serif tracking-wider text-lg text-gray-900 mb-1">
                                                {suite.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-3">{suite.address}</p>
                                            
                                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Bed className="w-3 h-3" />
                                                    <span>{suite.beds}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Bath className="w-3 h-3" />
                                                    <span>{suite.bathrooms}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Square className="w-3 h-3" />
                                                    <span>{suite.area}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Mobile scroll indicator */}
                            <div className="flex justify-center mt-2">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <ReusableFooter />
        </>
    )
};
export default Suite1;
