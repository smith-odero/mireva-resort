import React, { useState } from 'react';
import ReusableNavbar from './ReusableNavbar'
import ReusableFooter from './ReusableFooter';

import { Search, User, ChevronDown, Grid3X3, List, MoreHorizontal, Heart, Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';


const Suite = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(6);
  
    const allProperties = [
      {
        id: 1,
        price: '$3,095',
        period: '/month',
        title: 'Silverwood Manor',
        address: '6391 Elgin St. Celina, Delaware 10299',
        beds: 2,
        bathrooms: 2,
        area: '5×7 m²',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
        featured: true
      },
      {
        id: 2,
        price: '$2,500',
        period: '/month',
        title: 'Palmstone Residences',
        address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        beds: 4,
        bathrooms: 2,
        area: '6×7.5 m²',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=250&fit=crop'
      },
      {
        id: 3,
        price: '$3,550',
        period: '/month',
        title: 'Cedar Grove Estate',
        address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        beds: 3,
        bathrooms: 3,
        area: '8×10 m²',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop'
      },
      {
        id: 4,
        price: '$1,400',
        period: '/month',
        title: 'Hillside Haven',
        address: '3517 W. Gray St. Utica, Pennsylvania 57867',
        beds: 4,
        bathrooms: 2,
        area: '6×8 m²',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop'
      },
      {
        id: 5,
        price: '$2,500',
        period: '/month',
        title: 'The Oakridge Villa',
        address: '243 Curlew Road, Palm Harbor, TX',
        beds: 2,
        bathrooms: 1,
        area: '5×7.5 m²',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=250&fit=crop'
      },
      {
        id: 6,
        price: '$1,500',
        period: '/month',
        title: 'Bluebell Heights',
        address: '3517 W. Gray St. Utica, Pennsylvania 57867',
        beds: 3,
        bathrooms: 1,
        area: '5×7 m²',
        image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=250&fit=crop'
      },
      // Page 2 properties
      {
        id: 7,
        price: '$2,800',
        period: '/month',
        title: 'Sunset Terrace',
        address: '2847 Maple Ave. Chicago, Illinois 60601',
        beds: 3,
        bathrooms: 2,
        area: '7×9 m²',
        image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=400&h=250&fit=crop'
      },
      {
        id: 8,
        price: '$4,200',
        period: '/month',
        title: 'Modern Loft Downtown',
        address: '1542 Broadway St. New York, NY 10036',
        beds: 2,
        bathrooms: 2,
        area: '6×8 m²',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop',
        featured: true
      },
      {
        id: 9,
        price: '$1,800',
        period: '/month',
        title: 'Garden View Apartment',
        address: '789 Oak Street, Portland, Oregon 97205',
        beds: 1,
        bathrooms: 1,
        area: '4×6 m²',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop'
      },
      {
        id: 10,
        price: '$3,200',
        period: '/month',
        title: 'Coastal Retreat',
        address: '456 Ocean Drive, Miami, Florida 33139',
        beds: 4,
        bathrooms: 3,
        area: '9×11 m²',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop'
      },
      {
        id: 11,
        price: '$2,100',
        period: '/month',
        title: 'Urban Studio',
        address: '123 Tech Blvd. San Francisco, CA 94105',
        beds: 1,
        bathrooms: 1,
        area: '3×5 m²',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=250&fit=crop'
      },
      {
        id: 12,
        price: '$5,500',
        period: '/month',
        title: 'Executive Penthouse',
        address: '999 Skyline Drive, Seattle, WA 98101',
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
  
    const PropertyCard = ({ property }) => (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          {property.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div   className="flex  -baseline gap-1 mb-2">
            <span className="text-2xl font-semibold text-blue-600">{property.price}</span>
            <span className="text-gray-500 text-sm">{property.period}</span>
          </div>


          
          
          <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
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
    );
  
  
    
    return (
        <>
        <ReusableNavbar />
        
 
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      

        {/* Property Grid */}
        <div className={`grid gap-6 mt-25 mb-8 ${
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
        </>
    )
};
export default Suite;
