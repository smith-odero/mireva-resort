import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Moon, Bed } from 'lucide-react';

function HotelBookingHero() {
  // State management for form inputs
  const [location, setLocation] = useState('Amsterdam, Netherlands');
  const [checkInDate, setCheckInDate] = useState('Mon, 07/04/2025');
  const [duration, setDuration] = useState('2 Nights');
  const [guests, setGuests] = useState('2 Adult, 1 Child, 1 Room');
  const [isAvailable, setIsAvailable] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  // Booking form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMode, setPaymentMode] = useState('bank');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const paymentOptions = [
    { value: 'bank', label: 'Bank Transfer' },
    { value: 'm-pesa', label: 'M-Pesa' },
    { value: 'paypal', label: 'PayPal'}
  ];

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search for availability
  const handleSearch = () => {
    // Simulate availability check
    setIsAvailable(true); // You can make this random or based on logic
    setShowBookingForm(true);
  };

  // Handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!name.trim() || !phone.trim() || !paymentMode) {
      alert('Please fill in all required fields (Name, Phone, and Payment Method).');
      return;
    }

    // Additional validation for phone number (basic)
    if (phone.trim().length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    // Validate email format if provided
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If all validations pass, simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      setShowBookingForm(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between min-h-screen px-6 py-12 lg:px-20 gap-12">
        
        {/* Left Section - Hero Text (Hidden on small screens) */}
        <div className="hidden lg:block text-white max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Discover Your<br />
            Perfect Stay<br />
            <span className="text-red-500">Anywhere</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-200">
            Book unique stays that bring travelers and locals together your gateway to shared adventures
          </p>
          
          {/* Book Now Button */}
          <button className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <Bed size={20} />
            Book Now
          </button>
        </div>

        {/* Right Section - Booking Form */}
        <div className="bg-black/40 bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md lg:max-w-md shadow-2xl mx-auto">
          <h4 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
            <Bed size={24} />
            {showBookingForm ? 'COMPLETE YOUR BOOKING' : 'Find your stay'}
          </h4>

          {/* Availability Alert */}
          {isAvailable !== null && (
            <div className={`mb-6 p-4 rounded-lg ${isAvailable ? 'bg-green-500' : 'bg-red-600'}`}>
              <p className="text-white text-sm font-medium">
                {isAvailable 
                  ? 'Great news! Your selected hotel is available for booking.' 
                  : 'Sorry, this hotel is not available for your selected dates.'}
              </p>
            </div>
          )}

          {/* Payment Success Alert */}
          {paymentSuccess && (
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
              <p className="text-white text-sm font-medium">
                Payment received successfully! Welcome to Mireva Resort. We can't wait to host you and make your stay unforgettable. Get ready for an amazing experience! 
              </p>
            </div>
          )}

          {!showBookingForm ? (
            // Initial Search Form
            <>
              {/* Location Input */}
              <div className="mb-6">
                <label className="text-gray-50 text-sm mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter location"
                />
              </div>

              {/* Check-in Date and Duration Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Check-in Date */}
                <div>
                  <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Check-in Date
                  </label>
                  <input
                    type="text"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                    <Moon size={16} />
                    Duration
                  </label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Guests & Rooms Input */}
              <div className="mb-8">
                <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Guests & Rooms
                </label>
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter guests and rooms"
                />
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="w-full border border-gray-100 text-gray-100 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-800 transition-colors"
              >
                Search Hotel
              </button>
            </>
          ) : (
            // Booking Form
            <form onSubmit={handleBooking}>
              {/* Name Input */}
              <div className="mb-6">
                <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Payment Mode */}
              <div className="mb-8 relative">
                <label className="text-gray-100 text-sm mb-2 flex items-center gap-2">
                  <Bed size={16} />
                  Payment Method *
                </label>
                
                {/* Custom Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span>{paymentOptions.find(option => option.value === paymentMode)?.icon}</span>
                      {paymentOptions.find(option => option.value === paymentMode)?.label}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Options */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
                      {paymentOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setPaymentMode(option.value);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                            paymentMode === option.value ? 'bg-green-50 text-green-700' : 'text-gray-700'
                          }`}
                        >
                          <span className="text-lg">{option.icon}</span>
                          <span className="font-medium">{option.label}</span>
                          {paymentMode === option.value && (
                            <svg className="w-4 h-4 ml-auto text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Book Button */}
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Complete Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelBookingHero;