import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay showing content for a smoother entrance
      const timer = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(timer);
    }
    setShowContent(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowContent(false);
      setTimeout(onClose, 200); // Wait for animation to complete
    }
  };

  const handleCloseClick = () => {
    setShowContent(false);
    setTimeout(onClose, 200); // Wait for animation to complete
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        showContent ? "bg-black/40 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-gray-800/90 backdrop-blur-md rounded-xl max-w-md w-full p-8 shadow-2xl border border-gray-700/50 transition-all duration-300 transform ${
          showContent 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:rotate-90 transform duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <div className={`transition-opacity duration-200 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 