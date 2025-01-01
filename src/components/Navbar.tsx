import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#2874f0] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0 flex flex-col items-center">
              <span className="font-bold text-xl">Flipkart</span>
              <span className="text-xs italic">Explore Plus</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-[400px] py-2 px-4 rounded-sm text-gray-800 focus:outline-none"
                />
                <Search className="absolute right-3 top-2 text-[#2874f0]" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/login" 
              className="bg-white text-[#2874f0] px-8 py-1 font-medium hover:bg-gray-100"
            >
              Login
            </Link>
            <Link 
              to="/cart" 
              className="hover:text-gray-200 flex items-center space-x-1"
            >
              <ShoppingCart />
              <span>Cart</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}