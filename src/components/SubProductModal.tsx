import React from 'react';
import { subProductDetails } from '../data/subProductDetails';
import { ModalHeader } from './modal/ModalHeader';
import { ModalFeaturesList } from './modal/ModalFeaturesList';
import { ModalOverlay } from './modal/ModalOverlay';

interface SubProductModalProps {
  productName: string;
  subProduct: string;
  onClose: () => void;
}

const SubProductModal: React.FC<SubProductModalProps> = ({ productName, subProduct, onClose }) => {
  const details = subProductDetails[productName]?.[subProduct] || {};

  return (
    <ModalOverlay onClose={onClose}>
      <ModalHeader title={subProduct} onClose={onClose} />
      <p className="text-gray-800 mb-6">
        {details.description}
      </p>
      <div className="space-y-6">
        <ModalFeaturesList title="Features" items={details.features} />
        <ModalFeaturesList title="Applications" items={details.applications} />
      </div>
    </ModalOverlay>
  );
};

export default SubProductModal;