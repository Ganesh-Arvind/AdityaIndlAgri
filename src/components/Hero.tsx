import React from 'react';
import Bg from '../assets/bg.jpg'
import { scrollToSection } from '../utils/scrollUtils';

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Aditya Industrial Agri Products</h1>
          <p className="text-xl mb-8">
            Leading provider of high-quality power transmission products for industrial applications
          </p>
          <button onClick={() => scrollToSection('products')} className="bg-amber-600 hover:bg-amber-800 text-white px-6 py-3 rounded-md transition-colors">
            Latest Releases
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;