import React from 'react';
import headerImg from '../assets/header_img.svg';

const Hero = () => {
  return (
    <section
      className="relative bg-center bg-cover"
      style={{
        paddingTop: '246px',
        paddingBottom: '246px',
        paddingLeft: '260px',
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container flex flex-col items-center mx-auto text-center md:flex-row md:text-left md:items-start">
        <div className="flex flex-col justify-center w-full md:w-1/2" style={{ width: '530px' }}>
          <p className="font-third-family text-[36px] font-light text-[#68a47f] mb-4">100% Natural Food</p>
          <h1 className="mb-[23px] text-[70px] font-bold leading-tight text-[#274c5b]">Choose the best healthier way of life</h1>
          <button className="w-[220px] h-[79px] rounded-[16px] bg-[#efd372] px-[39px] py-[28px] font-semibold text-[#274c5b] text-[20px] hover:bg-[#e3c361]">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
