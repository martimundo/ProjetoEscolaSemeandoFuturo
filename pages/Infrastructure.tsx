import React, { useState } from 'react';
import { ShieldCheck, Sun, Layout, Coffee, Monitor, Music, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    title: "Salas de Aula Estimulantes",
    description: "Ambientes climatizados, com mobiliário ergonômico e materiais pedagógicos ao alcance das crianças.",
    image: "/public/images/Infraestrutu_SF001.jpeg"
  },
  {
    title: "Sala do Sono",
    description: "Um cantinho tranquilo, com iluminação suave e conforto térmico para o descanso necessário.",
    image: "/public/images/Infraestrutura_SF002.jpeg"
  },
  {
    title: "Sala de Aula Iluminada",
    description: "Uma sala de aula iluminada favorece para o bom aprendizado dos alunos.",
    image: "/public/images/infraestrutura_SF003.jpeg"
  },
  {
    title: "Sala da TV",
    description: "Um cantinho tranquilo, onde nossas crianças assistem desenhos e contos educacionais.",
    image: "/public/images/infraestrutura_SF004.jpeg"
  },
  {
    title: "Sala de Leitura",
    description: "Espaço dedicado à imaginação, repleto de livros infantis que despertam o amor pela leitura.",
    image: "/public/images/infraestrutura_Sala02.jpg"
  },
  {
    title: "Espaço Baby",
    description: "Berçário equipado com piso emborrachado e brinquedos sensoriais para os primeiros passos.",
    image: "/public/images/infraestrutura_SF005.jpeg"
  }
];

export const Infrastructure: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore background scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <div className="bg-brand-light py-16 lg:py-24 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 relative z-10">
             <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-4 block">Conheça Nosso Espaço</span>
             <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Um ambiente pensado para <span className="text-brand-green">acolher</span>, <span className="text-brand-yellow">proteger</span> e <span className="text-brand-blue">inspirar</span>.
             </h1>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Mais do que paredes e salas, oferecemos um cenário seguro onde seu filho pode explorar o mundo com confiança.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Persuasive Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-green pl-4">
                    Por que nossa estrutura é perfeita para seu filho?
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Sabemos que, ao escolher uma escola, a segurança física e o conforto são prioridades absolutas para os pais. Na <strong>Semeando Futuro</strong>, cada detalhe da nossa infraestrutura foi planejado com o olhar de quem cuida.
                    </p>
                    <p>
                        Nossos espaços não são apenas seguros; eles são <strong>pedagogicamente intencionais</strong>. O layout das salas favorece a autonomia, o piso é adequado para evitar machucados nas brincadeiras e a iluminação é pensada para manter o foco e o bem-estar.
                    </p>
                    <p>
                        Aqui, seu filho não fica confinado. Ele tem espaço para gastar energia, para descansar com tranquilidade e para se alimentar com higiene rigorosa. É a extensão do cuidado que você tem em casa.
                    </p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Destaques do nosso ambiente:</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-lg text-brand-green"><ShieldCheck size={24} /></div>
                        <span className="font-medium text-gray-700">Monitoramento por Câmeras 24h</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="bg-yellow-100 p-3 rounded-lg text-brand-yellow"><Sun size={24} /></div>
                        <span className="font-medium text-gray-700">Áreas externas ensolaradas e arejadas</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-brand-blue"><Layout size={24} /></div>
                        <span className="font-medium text-gray-700">Pisos adaptados e proteção nas quinas</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-500"><Coffee size={24} /></div>
                        <span className="font-medium text-gray-700">Refeitório exclusivo e higienizado</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tour Virtual pelos Nossos Espaços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        onClick={() => openModal(item.image)}
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-between">
                                <span className="text-white font-bold tracking-wide">Ampliar Foto</span>
                                <ZoomIn className="text-white" size={24} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-gradient-to-r from-brand-green to-green-600 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10 max-w-3xl mx-auto">
                <Monitor className="mx-auto mb-6 text-green-200" size={48} />
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Venha sentir essa energia de perto</h2>
                <p className="text-green-50 mb-10 text-lg">
                    Fotos mostram muito, mas nada substitui a sensação de entrar aqui e ser recebido com um sorriso. Agende sua visita e conheça cada cantinho que preparamos para o seu filho.
                </p>
                <a 
                    href="https://wa.me/5511981948844" 
                    target="_blank"
                    rel="noreferrer" 
                    className="inline-block bg-white text-brand-green px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
                >
                    Agendar Visita Presencial
                </a>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-yellow opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300 animate-fade-in backdrop-blur-sm"
            onClick={closeModal}
        >
            <button 
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-[110]"
                onClick={closeModal}
                aria-label="Fechar zoom"
            >
                <X size={32} />
            </button>
            <div 
                className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center" 
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={selectedImage} 
                    alt="Visualização ampliada" 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
      )}
    </div>
  );
};