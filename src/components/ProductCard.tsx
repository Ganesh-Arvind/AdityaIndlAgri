import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSubProductSelect: (subProduct: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSubProductSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden relative h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-black">{product.description}</p>
      </div>
      
      <div className={`absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="p-6 text-white h-full overflow-y-auto">
          <h4 className="text-lg font-semibold mb-4">Available Products:</h4>
          <ul className="space-y-2">
            {product.subProducts.map((subProduct, index) => (
              <li 
                key={index} 
                className="flex items-center cursor-pointer hover:text-amber-600 transition-colors"
                onClick={() => onSubProductSelect(subProduct)}
              >
                <ChevronRight size={16} className="mr-2 text-amber-600" />
                {subProduct}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;