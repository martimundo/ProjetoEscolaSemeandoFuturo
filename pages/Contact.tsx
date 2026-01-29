import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    idade: 'bebe',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission or redirect to WhatsApp
    const text = `Olá, me chamo ${formData.nome}. Meu filho tem ${formData.idade} anos de idade: . Mensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5511981948844?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-8 pb-20">
      <div className="bg-brand-yellow/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#235f5b] mb-4">Entre em Contato</h1>
            <p className="text-xl text-gray-600">Quer conhecer a nossa escola? Estamos prontos para te atender.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
                <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Endereço</h3>
                            <p className="text-gray-600">Rua Miraguai, 173 - Granja Carolina<br />São Paulo - SP</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Telefone & WhatsApp</h3>
                            <p className="text-gray-600">(11) 98194-8844</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">E-mail</h3>
                            <p className="text-gray-600">contato@escolasemeandofuturo.com.br</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-10 h-64 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.982166675819!2d-46.939649124668556!3d-23.603056378771225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0771f27223c3%3A0xa03f3b36161b52b4!2sEscola%20de%20Educacao%20Infantil%20Semeando%20o%20Futuro!5e1!3m2!1spt-BR!2sbr!4v1747672159940!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map"
                    ></iframe>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            value={formData.nome} 
                            onChange={handleChange}
                            required 
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                        <input 
                            type="tel" 
                            id="telfone" 
                            name="telfone" 
                            value={formData.telfone} 
                            onChange={handleChange}
                            required 
                            placeholder="(11) 99999-9999"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Idade da Criança</label>
                        <select 
                            id="idade" 
                            name="idade"
                            value={formData.idade} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
                        >
                            <option value="bebe">0 à 4 meses</option>
                            <option value="1">1 ano</option>
                            <option value="2">2 anos</option>
                            <option value="3">3 anos</option>
                            <option value="4">4 anos</option>
                            <option value="5">5 anos</option>
                            <option value="6">6 anos</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                        <textarea 
                            id="mensagem" 
                            name="mensagem" 
                            value={formData.mensagem} 
                            onChange={handleChange}
                            rows={4}
                            placeholder="Como podemos ajudar?"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
                    >
                        Enviar Mensagem <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};