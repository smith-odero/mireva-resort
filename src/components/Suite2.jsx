import React, { useState } from 'react';
import { ArrowLeft, Share, Heart, ChevronLeft, ChevronRight, X, MapPin, Calendar, Home, Users, Wifi, Shield, Dumbbell, Car, UtensilsCrossed, Waves, TreePine, Dog } from 'lucide-react';
import ReusableNavbar from './ReusableNavbar'
import ReusableFooter from './ReusableFooter';

const Suite2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInterested, setIsInterested] = useState(false);

  const propertyImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
  ];

  const relatedListings = [
    {
      id: 1,
      title: 'Sunny Bedroom with a Balcony un Razak, Kuala Lumpur',
      price: '$1400',
      location: 'Jalan VBGA, Off Jalan Tun Razak, Kuala Lumpur',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      amenities: ['furnished', 'kitchen', 'bathroom', 'ac', 'wifi']
    },
    {
      id: 2,
      title: 'Sunny Bedroom with a Balcony un Razak, Kuala Lumpur',
      price: '$1400',
      location: 'Jalan VBGA, Off Jalan Tun Razak, Kuala Lumpur',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop',
      amenities: ['furnished', 'kitchen', 'bathroom', 'ac', 'wifi']
    },
    {
      id: 3,
      title: 'Sunny Bedroom with a Balcony un Razak, Kuala Lumpur',
      price: '$1400',
      location: 'Jalan VBGA, Off Jalan Tun Razak, Kuala Lumpur',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      amenities: ['furnished', 'kitchen', 'bathroom', 'ac', 'wifi']
    }
  ];

  const amenities = [
    { icon: Home, label: 'Furniture', available: true },
    { icon: Waves, label: 'Pool', available: true },
    { icon: UtensilsCrossed, label: 'Kitchen', available: true },
    { icon: Wifi, label: 'Wifi', available: true },
    { icon: Car, label: 'Gym', available: true },
    { icon: Shield, label: 'Security', available: true },
    { icon: TreePine, label: 'Patio', available: true },
    { icon: Dumbbell, label: 'Basketball Court', available: true },
    { icon: TreePine, label: 'Air Conditioning', available: true },
    { icon: Dog, label: 'Pets Allowed', available: true }
  ];

  const openModal = (imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const ImageCarouselModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl h-3/4 bg-white rounded-lg overflow-hidden">
        {/* Modal Header */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={closeModal}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {propertyImages.length}
        </div>

        {/* Main Image */}
        <div className="relative h-full">
          <img
            src={propertyImages[currentImageIndex]}
            alt={`Property ${currentImageIndex + 1}`}
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
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
          {propertyImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                index === currentImageIndex ? 'border-white' : 'border-transparent'
              }`}
            >
              <img src={image} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
  <ReusableNavbar />

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4 text-gray-500" />
          <span className="text-gray-500">See more listing in San Francisco</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="grid grid-cols-4 gap-2 h-96">
                {/* Main Image */}
                <div 
                  className="col-span-2 row-span-2 cursor-pointer relative overflow-hidden rounded-lg"
                  onClick={() => openModal(0)}
                >
                  <img 
                    src={propertyImages[0]} 
                    alt="Main property"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Side Images */}
                {propertyImages.slice(1, 5).map((image, index) => (
                  <div 
                    key={index + 1}
                    className="cursor-pointer relative overflow-hidden rounded-lg"
                    onClick={() => openModal(index + 1)}
                  >
                    <img 
                      src={image} 
                      alt={`Property ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* See All Photos Button */}
              <button
                onClick={() => openModal(0)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"
              >
                +4 More Photos
              </button>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h1 className="text-2xl font-bold mb-2">Room in Beautiful Large Apt with Private Deck</h1>
              
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Jalan VBGA, Off Jalan Tun Razak, Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Preferred Gender: Both</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Posted 3 days ago</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Hello!</strong><br />
                    Private room available for rent in spacious, fully furnished 3-bedroom apartment. Available beginning October 1, 2023 for two or three months. Short lease date is firm, short term only. Spaces: 10x12 bedroom. Comes furnished with bed, linens, curtains, dresser and desk, has a good size closet with shelves and a low-rod AC unit.
                  </p>
                  
                  <p>
                    Apartment has: 1.5 baths, a large kitchen with dishwasher, living room, dining/sunroom, and a private deck. Laundromat is down the street. Two blocks from the Bedford L train, G and J/M/Z as well.
                  </p>
                  
                  <p>
                    <strong>ABOUT THIS LISTER:</strong> I am a female grad student. The other roommate is male and here for a couple months. I have a sweet and very shy 10 year old quarantine cat, so please be pet friendly and non-allergic. Sorry, no additional pets - FIRM.
                  </p>
                  
                  <p>
                    <strong>RENTAL REQUIREMENTS:</strong> Seeking a professional, decent human to stay for approx. 2-3 months. Male preferred. 30+ preferred Pay bills on time, do your own dishes, keeps shared space clean, don't bring the party home, zero drama. No couples, pets, additional furniture, or smoking of any kind. Timing is flexible. Rent is $2850, utilities extra. Security deposit (one month) will secure the room and monthly rent due upon move-in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Price & Action */}
            <div className="bg-white rounded-lg p-6 mb-6 sticky top-6">
              <div className="text-right mb-4">
                <span className="text-3xl font-bold">$1850</span>
                <span className="text-gray-500">/Month</span>
              </div>
              
              <button
                onClick={() => setIsInterested(!isInterested)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  isInterested 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isInterested ? 'Interest Sent!' : "I'm Interested"}
              </button>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Other listings in San Francisco</h2>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded">
                    {listing.price}<span className="text-sm">/Month</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{listing.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{listing.location}</p>
                  
                  <div className="flex gap-2">
                    {listing.amenities.slice(0, 5).map((amenity, index) => (
                      <div key={index} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                      </div>
                    ))}
                    <span className="text-sm text-gray-500">+2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <ReusableFooter />
    

      </div>

      {/* Image Carousel Modal */}
      {isModalOpen && <ImageCarouselModal />}
    </div>
  );
};

export default Suite2;