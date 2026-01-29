import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sobre Nós', path: '/sobre' },
  { label: 'Metodologia', path: '/#metodologia' },
  { label: 'Infraestrutura', path: '/#infraestrutura' },
  { label: 'Parcerias', path: '/#parcerias' },
  { label: 'Suporte', path: '/suporte' },
  { label: 'Contato', path: '/contato' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling when location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-brand-green text-white py-2 px-4 text-xs md:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> (11) 98194-8844</span>
            <span className="flex items-center gap-1"><Mail size={14} /> semeandofuturo@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/escolasemeandoofuturocotia" target="_blank" rel="noreferrer" className="hover:text-brand-yellow transition"><Facebook size={14} /></a>
            <a href="https://instagram.com/semeandofuturocotia" target="_blank" rel="noreferrer" className="hover:text-brand-yellow transition"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform lg:w-20 md:w-64 w-32">
               <img src="/pages/src/Logo_Semeando_FuturoSemFundo.png" alt="logo da escola semeando o futuro" srcset=""/>
            </div>
            <div className="leading-tight">
              <h1 className="text-lg md:text-xl font-bold text-[#235f5b]">Semeando</h1>
              <span className="text-[#235f5b] font-semibold text-sm md:text-base">Futuro</span>
            </div>
          </Link>

          {/* Menu Mobile */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                 // Handle internal hash links from other pages
                 <Link 
                    key={link.label}
                    to={link.path.replace('/', '')} // simplistic handling for demo, ideally smooth scroll component
                    className="text-gray-600 hover:text-brand-green font-medium transition-colors text-sm lg:text-base relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
                  </Link> 
                ) : (
                  <Link 
                    key={link.label}
                    to={link.path} 
                    className={`font-medium transition-colors text-sm lg:text-base relative group ${location.pathname === link.path ? 'text-brand-green' : 'text-gray-600 hover:text-brand-green'}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                )
            ))}
            <a 
              href="https://wa.me/5511981948844" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-green text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Agendar Visita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-brand-green transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
               link.path.startsWith('/#') ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={closeMenu}
                    className="text-gray-600 hover:text-brand-green font-medium px-2 py-1"
                  >
                    {link.label}
                  </a>
               ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={closeMenu}
                  className={`font-medium px-2 py-1 ${location.pathname === link.path ? 'text-brand-green bg-green-50 rounded-md' : 'text-gray-600 hover:text-brand-green'}`}
                >
                  {link.label}
                </Link>
               )
            ))}
            
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511981948844"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Contato Via WhatsApp"
      >
        <img src="/pages/src/whatsapp.png" alt="WhatsApp" className="w-10 md:w-10 lg:w-10 h-10" />
      </a>

      {/* Footer */}
      <footer className="bg-[#235f5b] text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold lg:w-20 md:w-64 w-32"><img src="/pages/src/Logo_Semeando_FuturoSemFundo.png" alt="logo da escola semeando o futuro" srcset=""/></div>
                <h3 className="text-xl font-bold text-white">Semeando Futuro</h3>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Preparando as crianças para um futuro brilhante com amor.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/escolasemeandoofuturocotia"target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"><Facebook size={18} /></a>
                <a href="https://instagram.com/semeandofuturocotia" target="blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Instagram size={18} /></a>                
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Navegação</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
                <li><Link to="/sobre" className="hover:text-brand-yellow transition-colors">Sobre Nós</Link></li>
                <li><Link to="/#metodologia" className="hover:text-brand-yellow transition-colors">Metodologia</Link></li>
                <li><Link to="/suporte" className="hover:text-brand-yellow transition-colors">Suporte</Link></li>
                <li><Link to="/contato" className="hover:text-brand-yellow transition-colors">Contato</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Páginas</h3>
              <ul className="space-y-3">
                <li><Link to="/termos" className="hover:text-brand-yellow transition-colors">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="hover:text-brand-yellow transition-colors">Política de Privacidade</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-green flex-shrink-0 mt-1" size={18} />
                  <span>Rua Miraguai, 173 - Granja Carolina<br />São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-brand-green flex-shrink-0" size={18} />
                  <span>(11) 98194-8844</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-brand-green flex-shrink-0" size={18} />
                  <span>semeandofuturo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>© 2025 Escola Semeando Futuro. Todos os direitos reservados.</p>
            <p>Desenvolvido com <span className="text-red-500">❤</span> por Pixel e Performance</p>
          </div>
        </div>
      </footer>
    </div>
  );
};