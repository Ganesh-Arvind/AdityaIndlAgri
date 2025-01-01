import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: aditya.indlagri@gmail.com</p>
            <p>Phone: +91 90304-65526</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-400">Home</a></li>
              <li><a href="#products" className="hover:text-amber-400">Products</a></li>
              <li><a href="#about" className="hover:text-amber-400">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Aditya Industrial Agri Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;