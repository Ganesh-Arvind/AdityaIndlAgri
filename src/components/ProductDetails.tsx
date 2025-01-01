import React from 'react';
import { X } from 'lucide-react';
import { subProductDetails } from '../data/subProductDetails';
import { ModalFeaturesList } from './modal/ModalFeaturesList';

interface ProductDetailsProps {
  productName: string;
  subProduct: string;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productName, subProduct, onClose }) => {
  const details = subProductDetails[productName]?.[subProduct] || {
    description: `Detailed information about ${subProduct} from our ${productName} category.`,
    features: ['High-quality materials', 'Precision engineering'],
    applications: ['Industrial machinery', 'Manufacturing equipment']
  };

  return (
    <div className="h-screen flex flex-col bg-amber-50">
      <div className="p-6 border-b border-amber-800 flex-shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{subProduct}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-amber-200 rounded-full transition-colors"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <p className="text-gray-900 text-justify mb-6">{details.description}</p>
          </div>
          <ModalFeaturesList title="Features" items={details.features} />
          <ModalFeaturesList title="Applications" items={details.applications} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;