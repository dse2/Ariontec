
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1a202c]/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="p-6 md:p-10 overflow-y-auto text-gray-600 leading-relaxed space-y-6">
          {children}
        </div>
        
        <div className="p-6 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#0056b3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#004494] transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
