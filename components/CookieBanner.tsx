import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    
    // If no choice stored, show banner after a small delay for better UX
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize analytics scripts (e.g., GA4)
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        
        {/* Content */}
        <div className="flex items-start gap-4 flex-1">
           <div className="bg-yellow-100 p-2.5 rounded-full text-brand-yellow shrink-0 hidden sm:flex items-center justify-center">
              <Cookie size={24} />
           </div>
           <div className="text-sm text-gray-600 leading-relaxed">
              <p className="font-bold text-gray-900 mb-1 text-base">Valorizamos sua privacidade</p>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. 
                Ao clicar em "Aceitar", você concorda com o uso de cookies de acordo com nossa{' '}
                <Link to="/privacidade" className="text-brand-green font-semibold hover:underline">
                  Política de Privacidade
                </Link>.
              </p>
           </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full md:w-auto min-w-[280px]">
            <button 
              onClick={handleDecline}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200"
            >
              Recusar
            </button>
            <button 
              onClick={handleAccept}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-white bg-brand-green hover:bg-green-600 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Aceitar Cookies
            </button>
        </div>
      </div>
    </div>
  );
};