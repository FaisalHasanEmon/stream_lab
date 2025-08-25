import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="absolute left-0 z-20  w-full">
      <div className="flex justify-between items-center gap-2 px-4 py-3 lg:px-5 container mx-auto">
        {/* Logo */}
        <figure className="w-[80px] sm:w-[100px] lg:w-[120px] flex-shrink-0">
          <img src="/Logo/Logo.png" alt="Logo" className="w-full h-auto" />
        </figure>

        {/* Desktop Search - Hidden on mobile/tablet */}
        <div className="relative  hidden lg:flex justify-center items-center w-5/12 xl:w-7/12">
          <input
            type="text"
            placeholder="Search Films"
            className="border  border-[#C6C6C6] rounded-[8px] w-full pl-10 pr-3 py-3 placeholder:text-[#C6C6C6] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00A1FF] focus:border-transparent"
          />
          <CiSearch className="text-[#C6C6C6] absolute left-3" size={20} />
        </div>

        {/* Desktop Auth Buttons - Hidden on mobile */}
        <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-5">
          <Link>
            <button className="text-sm xl:text-lg font-normal px-3 xl:px-4 py-2 rounded-[8px] text-white bg-[#00A1FF] hover:bg-[#0086D9] transition-colors">
              Sign In
            </button>
          </Link>
          <Link>
            <button className="text-sm xl:text-lg font-normal px-3 xl:px-4 py-2 rounded-[8px] border border-[#00A1FF] text-[#00A1FF] bg-transparent hover:bg-[#00A1FF] hover:text-white transition-colors">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile/Tablet Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Search Icon for Mobile/Tablet */}
          <button
            onClick={toggleSearch}
            className="p-2 text-[#00A1FF] hover:bg-gray-100 rounded-full transition-colors"
          >
            <CiSearch size={24} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-[#00A1FF] hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Search Bar - Shows when search is toggled */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Films"
              className="border border-[#C6C6C6] rounded-[8px] w-full pl-10 pr-3 py-3 placeholder:text-[#C6C6C6] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00A1FF] focus:border-transparent"
            />
            <CiSearch
              className="text-[#C6C6C6] absolute left-3 top-1/2 transform -translate-y-1/2"
              size={20}
            />
          </div>
        </div>
      )}

      {/* Mobile Menu - Shows when menu is toggled */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute border border-[#00A1FF] bg-[#00A1FF]/10 backdrop-blur-3xl rounded-[8px] w-8/12 px-4 py-4 transform translate-x-[40%] ">
          <div className="flex flex-col gap-3">
            <Link>
              <button className="w-full text-base font-normal px-4 py-3 rounded-[8px] text-white bg-[#00A1FF] hover:bg-[#0086D9] transition-colors">
                Sign In
              </button>
            </Link>
            <Link>
              <button className="w-full text-base font-normal px-4 py-3 rounded-[8px] border border-[#00A1FF] text-[#00A1FF] bg-transparent hover:bg-[#00A1FF] hover:text-white transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
