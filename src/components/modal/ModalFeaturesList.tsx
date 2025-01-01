import React from 'react';

interface ModalFeaturesListProps {
  title: string;
  items: string[];
}

export const ModalFeaturesList: React.FC<ModalFeaturesListProps> = ({ title, items }) => (
  <div>
    <h4 className="text-lg font-semibold mb-3">{title}:</h4>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="pl-2">{item}</li>
      ))}
    </ul>
  </div>
);