import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { Product } from '../types/product';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<{
    productName: string;
    subProduct: string;
  } | null>(null);

  return (
    <div className="relative">
      <div className={`grid gap-6 transition-all duration-300 ${
        selectedProduct 
          ? 'grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mr-[400px]' 
          : 'grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'
      }`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSubProductSelect={(subProduct) => 
              setSelectedProduct({ 
                productName: product.name, 
                subProduct 
              })
            }
          />
        ))}
      </div>
      
      {selectedProduct && (
        <div className="fixed top-0 right-0 h-full w-[400px] bg-gray-50 p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
          <ProductDetails
            productName={selectedProduct.productName}
            subProduct={selectedProduct.subProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </div>
      )}
    </div>
  );
};

export default ProductGrid;