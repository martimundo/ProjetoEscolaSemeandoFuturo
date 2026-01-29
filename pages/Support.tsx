import React from 'react';
import { Camera, Utensils, Globe, Clock, Smile } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
        <div className="bg-blue-50 py-16 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#235f5b] mb-4">Suporte aos Pais</h1>
                <p className="text-xl text-gray-600">Tranquilidade e segurança para você, cuidado integral para seu filho.</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <Camera className="text-brand-blue" size={32} />
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Monitoramento Online</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A Escola Semeando Futuro valoriza a transparência. Oferecemos um sistema exclusivo de acesso às câmeras de monitoramento, proporcionando uma janela direta e segura para o dia a dia dos seus filhos.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Por meio dele, os pais podem acompanhar, em tempo real, momentos importantes da rotina escolar, promovendo mais tranquilidade e participação.
                        </p>
                    </div>
                    <div className="bg-gray-100 relative h-64 lg:h-auto">
                        <img src="../public/src/monitoramento.jpg" alt="Sistema de Monitoramento" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">O que dispomos:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                        <div className="bg-green-100 p-3 rounded-full text-brand-green"><Utensils size={24}/></div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Nutrição</h4>
                            <p className="text-sm text-gray-600">Alimentação balanceada desenvolvida por nutricionista.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                        <div className="bg-blue-100 p-3 rounded-full text-brand-blue"><Globe size={24}/></div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Bilinguismo</h4>
                            <p className="text-sm text-gray-600">Aulas de Inglês integradas à rotina.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                        <div className="bg-yellow-100 p-3 rounded-full text-brand-yellow"><Clock size={24}/></div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Período Integral</h4>
                            <p className="text-sm text-gray-600">Atendimento das 6:00 às 18:00.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-500"><Smile size={24}/></div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Recreação</h4>
                            <p className="text-sm text-gray-600">Curso recreativo de férias e atividades lúdicas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};