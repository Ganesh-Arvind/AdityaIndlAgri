import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Menu } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import MobileMenu from './MobileMenu';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-amber-950 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-end space-x-4 border-b border-amber-800">
        <p>Follow us: </p>
        <a href="https://facebook.com" className="hover:text-amber-400 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://X.com" className="hover:text-amber-400 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://linkedin.com" className="hover:text-amber-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/aditya_industrial_agriproducts/" className="hover:text-amber-400 transition-colors">
          <Instagram size={20} />
        </a>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} className='w-16' alt="" />
            <span className="text-xl font-bold text-justify">Aditya Industrial Agri Products</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-justify">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors">
              Home
            </button>
            <div className="relative group">
              <button onClick={() => scrollToSection('products')} className="hover:text-amber-400 transition-colors">
                Products
              </button>
            </div>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
              Contact
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
