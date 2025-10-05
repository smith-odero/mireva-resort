import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableNavbar from './ReusableNavbar'
import ReusableFooter from './ReusableFooter';
import { ChevronDownIcon, ChevronDown, ChevronLeft, ChevronRight, FilterIcon, Search, Heart, Bed, Bath, Square  } from 'lucide-react';
import images from '../utils/images.js'


const Suite = () => {
    const navigate = useNavigate();

    {/* Search Bar */}
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Listings');
    const [selectedSort, setSelectedSort] = useState('Filter');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const categories = [
        'All listings',
        'Two bedroom suites',
        'Three bedroom suites',
        'Indoor pool',
        'Outdoor pool',
        'Beach side',
        'Lake side',
        'In the woods',
        'In the City',
    ]

    const sortOptions = [
        'Listings by date',
        'Price: Low to High',
        'Price: High to low',
        'Within the country',
        'Abroad',
        'Most popular'
    ];

    const handleSearch = () => {
        console.log('Searching for:', searchTerm, 'Category', selectedCategory, 'Sort:', selectedSort)
    }

    {/* ======================= */}
    {/* ======== Suites ======= */}
    {/* ======================= */} 
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(6);

    const allProperties = [
      {
        id: 1,
        price: 'Kshs. 30,095',
        period: '/month',
        title: 'Silverwood Manor',
        address: 'Westlands, Nairobi',
        beds: 2,
        bathrooms: 2,
        area: '5×7 m²',
        image: images["rizon-suite.jpg"],
        featured: true
      },
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
      },
      {
        id: 6,
        price: 'Kshs. 10,500',
        period: '/month',
        title: 'Bluebell Heights',
        address: 'Dar-es-salam, Tanzania',
        beds: 3,
        bathrooms: 1,
        area: '5×7 m²',
        image: images["zibar-suite.jpg"]
      },
      // Page 2 Suites
      {
        id: 7,
        price: 'Kshs. 20,800',
        period: '/month',
        title: 'Sunset Terrace',
        address: 'Johannesurg, South Africa',
        beds: 3,
        bathrooms: 2,
        area: '7×9 m²',
        image: images['seats.jpg']
      },
      {
        id: 8,
        price: 'Kshs. 40,200',
        period: '/month',
        title: 'Modern Loft Downtown',
        address: 'Machakos, Kenya',
        beds: 2,
        bathrooms: 2,
        area: '6×8 m²',
        image: images['pool-serenity.jpg'],
        featured: true
      },
      {
        id: 9,
        price: 'Kshs. 10,800',
        period: '/month',
        title: 'Garden View Apartment',
        address: 'Mombasa, Kenya',
        beds: 1,
        bathrooms: 1,
        area: '4×6 m²',
        image: images['chill-suite.jpg']
      },
      {
        id: 10,
        price: 'Kshs. 30,200',
        period: '/month',
        title: 'Coastal Retreat',
        address: 'Malindi, Kenya',
        beds: 4,
        bathrooms: 3,
        area: '9×11 m²',
        image: images['cheers.jpg']
      },
      {
        id: 11,
        price: 'Kshs. 20,100',
        period: '/month',
        title: 'Urban Studio',
        address: 'Naivashs, Kenya',
        beds: 1,
        bathrooms: 1,
        area: '3×5 m²',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=250&fit=crop'
      },
      {
        id: 12,
        price: 'Kshs. 50,500',
        period: '/month',
        title: 'Executive Penthouse',
        address: 'Nakuru, Kenya',
        beds: 5,
        bathrooms: 4,
        area: '12×15 m²',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=250&fit=crop',
        featured: true
      }
    ];

        // Calculate pagination
    const totalPages = Math.ceil(allProperties.length / propertiesPerPage);
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = allProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };

    // Function to handle property click and navigate to individual property page
    const handlePropertyClick = (property) => {
      // Convert property title to URL-friendly slug
      const propertySlug = property.title.toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
      
      // Navigate to the property detail page with the property data
      navigate(`/suites/${propertySlug}`, { state: { property } });
    };
  
    const PropertyCard = ({ property }) => (
      <div 
        className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
        onClick={() => handlePropertyClick(property)}
      >
        <div className="relative">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <button 
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when heart is clicked
            }}
          >
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          {property.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex -baseline gap-1 mb-2">
            <span className="text-2xl font-semibold text-blue-600">{property.price}</span>
            <span className="text-gray-500 text-sm">{property.period}</span>
          </div>
          
          <h3 className="font-light font-serif tracking-wider text-xl text-gray-900 mb-1 hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4">{property.address}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>
      </div>
    )
        {/* ======================= */}
        {/* ========--------======= */}
        {/* ======================= */} 

    return (
        <div className='bg-white'>
        <ReusableNavbar />
            {/* Search Bar */}
            <div className='w-full max-w-4xl mx-auto p-4'>
                <div>
                    <div className='hidden md:flex mt-25 items-center bg-white border border-gray-300 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 focus-within:border-blue-400/70'>

                        {/* Left Dropdown - Categories */}
                        <div className='relative'>
                            <button
                                type='button'
                                onClick={() => {
                                    setShowCategoryDropdown(!showCategoryDropdown);
                                    setShowSortDropdown(false)
                                }}
                                className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-l-xl border-r border-gray-300'
                            >
                                <span className='text-sm font-medium'>{selectedCategory}</span>
                               
                                    <ChevronDownIcon className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                                
                            </button> 
                            
                            {/* categories list */}
                            {showCategoryDropdown && (
                                <div className='absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-10'>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            type='button'
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setShowCategoryDropdown(false);
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                                            }}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Center Search Input */}
                        <div className='flex-1 relative'>
                            <input
                                type='text'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='Where would you like to unwind?'
                                className='w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none'
                            />

                        </div>

                        {/* Right Dropdown - Sort Options */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowSortDropdown(!showSortDropdown);
                                    setShowCategoryDropdown(false);
                                }}
                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 border-l border-gray-200 whitespace-nowrap"
                            >
                                <span className="text-sm font-medium">{selectedSort}</span>
                                <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
                            </button>
                    
                            {showSortDropdown && (
                                <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => {
                                                setSelectedSort(option);
                                                setShowSortDropdown(false);
                                            }}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Button */}
                        <button
                            type='button'
                            onClick={handleSearch}
                            className='px-6 mr-0.5 py-3 bg-blue-700/80 text-white rounded-r-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
                        >
                            <Search className="h-5 w-5"/>
                        </button>
                    </div>
                </div>

                {/* Mobile Responsive - Search Bar */}
                <div className='md:hidden mt-25'>
                    <div className='space-y-3'>
                        {/* Search Input */}
                        <div className='relative'>
                            <input
                                type='text'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Where would you like to unwind?"
                                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500/70 focus:outline-none'

                            />
                            <Search onClick={handleSearch} className='absolute right-3 top-4 transform -transition-y-1/2 h-5 w-5 text-gray-400' />
                        </div>

                        {/* Mobile Filter Row */}
                        <div className='flex space-x-2'>
                            {/* Category dropdown */}
                            <div className='relative flex-1'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setShowCategoryDropdown(!showCategoryDropdown);
                                        setShowSortDropdown(false);
                                    }}
                                    className='w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl'
                                >
                                    <span className='truncate text-gray-500'>{selectedCategory}</span>
                                    <ChevronDownIcon className={`h-4 w-4 ml-2 text-gray-500 transform transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showCategoryDropdown && (
                                    <div className="absolute top-full left-4 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-xl z-10">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setShowCategoryDropdown(false);
                                                }}
                                                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sort Dropdown */}
                            <div className='relative flex-1'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setShowSortDropdown(!showSortDropdown);
                                        setShowCategoryDropdown(false);
                                    }}
                                    className='w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl'
                                >
                                    <span className='truncate text-gray-500'>{selectedSort}</span>
                                    <FilterIcon className={`h-4 w-4 ml-2 text-gray-500`} />
                                </button>

                                {showSortDropdown && (
                                    <div className={`absolute top-full right-4 mt-3 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10
                                       
                                    `}>
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedSort(option);
                                                    setShowSortDropdown(false);
                                                }}
                                                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Suites */}
            <div className='min-h-screen bg-white'>
                <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* Suites Grid */}
                    {/* Property Grid */}
                <div className={`grid gap-6 mt-5 mb-8 ${
                viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
                </div>

                {/* Results Info */}
                <div className="text-center text-sm text-gray-600 mb-4">
                Showing {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, allProperties.length)} of {allProperties.length} properties
                </div>

                    {/* Pagination */}
                <div className="flex items-center justify-center gap-2">
                <button 
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border border-gray-300 transition-colors ${
                    currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-8 h-8 rounded-lg font-medium transition-colors ${
                        currentPage === pageNumber
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    >
                    {pageNumber}
                    </button>
                ))}
                
                <button 
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border border-gray-300 transition-colors ${
                    currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

            </main>
            </div>
    
        <ReusableFooter />
        </div>
    )
};
export default Suite;
