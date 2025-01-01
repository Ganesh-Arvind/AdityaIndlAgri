import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { featuredProducts } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    productName: string;
    subProduct: string;
  } | null>(null);

  return (
    <section className="mb-12 relative">
      <h2 className="text-3xl font-bold text-black mb-6">Featured Products</h2>
      
      <div className={`transition-all duration-300 ease-in-out ${
        selectedProduct ? 'mr-[400px]' : ''
      }`}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                onSubProductSelect={(subProduct) => 
                  setSelectedProduct({ 
                    productName: product.name, 
                    subProduct 
                  })
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div 
        className={`fixed top-0 right-0 h-full w-[400px] bg-amber-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          selectedProduct ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedProduct && (
          <ProductDetails
            productName={selectedProduct.productName}
            subProduct={selectedProduct.subProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;