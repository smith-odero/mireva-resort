import React, { useState } from "react";
import ReusableNavbar from "./ReusableNavbar";
import ReusableFooter from "./ReusableFooter";
import { Search, ChevronDown } from 'lucide-react';

const Suites = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All listings');
    const [selectedSort, setSelectedSort] = useState('Listings by date');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const categories = [
        'All listings',
        'Electronics',
        'Furniture',
        'Clothing',
        'Books',
        'Sports',
        'Home & Garden'
    ];

    const sortOptions = [
        'Listings by date',
        'Price: Low to High',
        'Price: High to Low',
        'Alphabetical',
        'Most Popular'
    ];

    const handleSearch = () => {
        console.log('Searching for:', searchTerm, 'Category:', selectedCategory, 'Sort:', selectedSort);
    };

    return (
        <div className="bg-white">
            <ReusableNavbar />
            
            <div className="w-full max-w-6xl mx-auto p-4">
                <div className="relative">
                    <div className="hidden md:flex mt-25 items-center bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:border-blue-500">
                        
                        {/* Left Dropdown - Categories */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowCategoryDropdown(!showCategoryDropdown);
                                    setShowSortDropdown(false);
                                }}
                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-l-lg border-r border-gray-200 whitespace-nowrap"
                            >
                                <span className="text-sm font-medium">{selectedCategory}</span>
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </button>
                            
                            {showCategoryDropdown && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setShowCategoryDropdown(false);
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
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Where would you like to unwind?"
                                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
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
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </button>
                    
                            {showSortDropdown && (
                                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
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
                            type="button"
                            onClick={handleSearch}
                            className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile Responsive Version */}
                <div className="md:hidden mt-25">
                    <div className="space-y-3">
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Where would you like to unwind?"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>

                        {/* Mobile Filters Row */}
                        <div className="flex space-x-2">
                            {/* Category Dropdown */}
                            <div className="relative flex-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCategoryDropdown(!showCategoryDropdown);
                                        setShowSortDropdown(false);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg"
                                >
                                    <span className="truncate">{selectedCategory}</span>
                                    <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                                </button>
                      
                                {showCategoryDropdown && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
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
                            <div className="relative flex-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowSortDropdown(!showSortDropdown);
                                        setShowCategoryDropdown(false);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg"
                                >
                                    <span className="truncate">{selectedSort}</span>
                                    <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                                </button>
                      
                                {showSortDropdown && (
                                    <div className="absolute top-full right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
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

                {/* Demo Results */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Search Results Preview:</h3>
                    <p className="text-gray-600">
                        <strong>Search Term:</strong> "{searchTerm || 'None'}" | 
                        <strong> Category:</strong> {selectedCategory} | 
                        <strong> Sort:</strong> {selectedSort}
                    </p>
                </div>
            </div>

            <ReusableFooter />
        </div>
    );
};

export default Suites;

