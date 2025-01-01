import React from 'react';

interface ModalOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose, children }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
    <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
      {children}
    </div>
  </div>
);