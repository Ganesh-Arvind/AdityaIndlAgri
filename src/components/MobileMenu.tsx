import React from 'react';
import { X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleNavigation = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-amber-950 z-50">
      <div className="p-4">
        <button onClick={onClose} className="text-white p-2 float-right">
          <X size={24} />
        </button>
        <nav className="flex flex-col items-center justify-center h-screen space-y-8">
          <button 
            onClick={() => handleNavigation('home')}
            className="text-white text-xl hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('products')}
            className="text-white text-xl hover:text-amber-400 transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => handleNavigation('about')}
            className="text-white text-xl hover:text-amber-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavigation('contact')}
            className="text-white text-xl hover:text-amber-400 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
