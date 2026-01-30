import React, { useState, useEffect } from 'react';
import { X, Gift, Send, Phone, User } from 'lucide-react';

export const DiscountPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  useEffect(() => {
    // Check if user has already seen/closed the popup
    const hasSeenPopup = localStorage.getItem('discount_popup_seen');

    if (!hasSeenPopup) {
      // Show popup after 8 seconds of browsing to not be too intrusive initially
      // and allow the cookie banner to be seen first
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('discount_popup_seen', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `Olá! Vi o a opção do desconto de 10% no site e gostaria de garantir minha vaga.\n\n*Nome do Responsável:* ${formData.name}\n*Telefone:* ${formData.phone}\n\nGostaria de saber mais detalhes sobre a matrícula.`;
    
    // Mark as seen so it doesn't show again
    localStorage.setItem('discount_popup_seen', 'true');
    setIsVisible(false);

    // Redirect to WhatsApp
    window.open(`https://wa.me/5511981948844?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100 animate-fade-in">
        
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-brand-yellow to-orange-400 p-6 text-center relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-black/10 hover:bg-black/20 rounded-full p-1"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-brand-yellow">
            <Gift size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Ganhe 10% OFF</h3>
          <p className="text-white/90 text-sm font-medium">Na primeira mensalidade para novos alunos!</p>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8">
          <p className="text-gray-600 text-center mb-6 text-sm">
            Preencha seus dados abaixo para garantir seu cupom de desconto exclusivo. Nossa equipe entrará em contato.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome do Responsável"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition text-gray-700 bg-gray-50"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Seu WhatsApp / Telefone"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition text-gray-700 bg-gray-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-green text-white font-bold py-3.5 rounded-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
            >
              Quero meu Desconto <Send size={18} />
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              Ao enviar, você concorda em ser contatado pela escola via WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};