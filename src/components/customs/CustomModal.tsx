import React from 'react';
import { Button } from '../ui/Button';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-3xl max-w-md w-full mx-4 text-center relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-4xl font-bold text-valentine-primary mb-6">
          ONAYS! 🎉
        </h2>
        <p className="text-xl mb-6">
          Date time! Binondo + kaimn! 💕
        </p>
        <div className="flex justify-center">
          <Button
            onClick={onClose} 
            className="bg-valentine-primary hover:bg-pink-600 text-white py-3 px-10 text-xl"
          >
            YEMHEY! 💖
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;