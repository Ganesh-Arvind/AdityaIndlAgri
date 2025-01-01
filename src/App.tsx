import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div id="products">
          <FeaturedProducts />
        </div>
        <div id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-800 text-justify">
          Aditya Industrial Agri Products is a trusted name in the field of power transmission solutions, specializing in products tailored for both agricultural and industrial applications. With a deep understanding of the unique needs of these sectors, we provide high-quality, reliable, and efficient products to ensure seamless operations and enhanced productivity.
          Our product range is designed to cater to diverse requirements, from heavy-duty industrial machinery to precision-driven agricultural equipment. Backed by years of expertise and a commitment to innovation, we strive to deliver solutions that empower businesses and contribute to their success.
          At Aditya Industrial Agri Products, we believe in building lasting relationships with our clients by offering exceptional customer service, competitive pricing, and cutting-edge technology. Whether you’re looking for durable power transmission products for your farm or industrial setup, we are your one-stop destination for superior solutions.
          </p>
        </div>
        <div id="contact" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-800 text-justify">
          We’d love to hear from you! Whether you have a question, need assistance, or want to discuss your power transmission needs, feel free to reach out to us.
          </p>
          <p className="text-gray-800 text-justify">
          Phone: +91 90304-65526
          </p>
          <p className="text-gray-800 text-justify">
          Email: aditya.indlagri@gmail.com
          </p>
          <p className="text-gray-800 text-justify">
          Business Hours: Monday to Saturday: 9:00 AM – 6:00 PM
          <p className="text-gray-800 text-justify">
          Let us help you power your agricultural and industrial operations with the best solutions in the market!
          </p> 
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;