import React from 'react';
import logo from '../assets/logo.svg';
import headerRight1 from '../assets/header_right1.svg';
import headerRight2 from '../assets/header_right2.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-8 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Organick Logo" className="w-[198px] h-[53px]" />
        <nav className="ml-[50px] flex space-x-[30px] text-[#274c5b] font-bold text-[20px]">
          <a href="/" className="relative group">
            Home
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
          <a href="/about" className="relative group">
            About
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
          <a href="/pages" className="relative group">
            Pages
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
          <a href="/shop" className="relative group">
            Shop
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
          <a href="/projects" className="relative group">
            Projects
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
          <a href="/news" className="relative group">
            News
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#274c5b] transition-all group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" className="rounded-full w-[376px] h-[66px] bg-[#fafafa] px-4 py-2 border border-gray-200" />
          <button className="absolute top-1/2 right-[10px] transform -translate-y-1/2 w-[66px] h-[66px] rounded-full bg-[#7eb693] flex items-center justify-center">
            <img src={headerRight1} alt="Button Icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 w-[159px] h-[66px]">
          <img src={headerRight2} alt="Cart Icon" className="w-6 h-6" />
          <span className="font-semibold text-[18px] text-[#274c5b]">Cart (0)</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
