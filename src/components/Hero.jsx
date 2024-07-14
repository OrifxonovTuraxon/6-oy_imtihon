import React from 'react';

import headerImg from '../assets/header_img.svg';
import headerRight1 from '../assets/header_right1.svg';
import headerRight2 from '../assets/header_right2.svg';

const Hero = () => {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="container flex flex-col items-center mx-auto text-center md:flex-row md:text-left md:items-start">
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Choose the best healthier way of life</h1>
          <p className="mb-8 text-lg">100% Natural Food</p>
          <button className="px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-600">Order Now</button>
        </div>
        <div className="relative w-full mt-8 md:mt-0 md:w-1/2">
          <img src={headerImg} alt="Header Image" className="w-full h-auto" />
          <img src={headerRight1} alt="Decoration" className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20" />
          <img src={headerRight2} alt="Decoration" className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
