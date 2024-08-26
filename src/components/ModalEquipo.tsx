import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const ModalEquipo: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-8 shadow-lg absolute z-60 max-w-2xl w-full mx-4 max-sm:w-5/6">
        <button className="absolute top-2 right-2 text-yellow-500 hover:text-blue-500 transition duration-300 text-4xl p-3" onClick={onClose}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default ModalEquipo;
