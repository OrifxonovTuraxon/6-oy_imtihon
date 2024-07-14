import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <img src={logo} alt="Organick Logo" className="inline h-10"/>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-green-500">Home</a></li>
          <li><a href="/about" className="hover:text-green-500">About</a></li>
          <li><a href="/shop" className="hover:text-green-500">Shop</a></li>
          <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
