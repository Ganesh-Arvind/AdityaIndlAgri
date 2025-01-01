import React from 'react';
import { X } from 'lucide-react';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => (
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-2xl font-bold">{title}</h3>
    <button 
      onClick={onClose} 
      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
    >
      <X size={24} />
    </button>
  </div>
);