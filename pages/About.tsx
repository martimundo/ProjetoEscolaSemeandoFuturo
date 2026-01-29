import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <div className="bg-green-50 py-16 text-center">
         <div className="max-w-4xl mx-auto px-4">
             <h1 className="text-4xl font-bold text-brand-green mb-4">Sobre Nós</h1>
             <p className="text-xl text-gray-600">Conheça um pouco da nossa história e o que nos move.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
         {/* History */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pl-4 border-l-4 border-brand-yellow">
                  Nossa História
               </h2>
               <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                     Fundada em janeiro de 2009 pela Diretora Daniela Souza, a Semeando o Futuro atende crianças de 4 meses à 6 anos de idade e possui vasta experiência no ramo pedagógico infantil.
                  </p>
                  <p>
                     Tudo iniciou após o nascimento do primeiro filho da Diretora. Ela encontrou uma grande dificuldade e preocupação das mães retornarem ao mercado de trabalho após a maternidade. Diante disso, surgiu a Escola Semeando Futuro para oferecer todo suporte necessário com infraestrutura, didática e principalmente amor.
                  </p>
                  <p>
                     Com uma equipe altamente qualificada, a escola se destaca por seu compromisso com a educação infantil de qualidade, proporcionando um ambiente seguro e acolhedor.
                  </p>
               </div>
            </div>
            <div className="relative">
                <img src="/images/Diretora_Daniela.png" alt="Foto da Diretora da Escola" className="rounded-3xl shadow-xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-[#235f5b] text-white p-6 rounded-xl shadow-lg hidden md:block">
                   <p className="font-bold text-2xl">Desde 2009</p>
                   <p className="text-sm opacity-90">Construindo sonhos</p>
                </div>
            </div>
         </div>

         {/* Mission Vision Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-green text-center">
               <div className="text-4xl mb-4">🚀</div>
               <h3 className="text-xl font-bold mb-4">Missão</h3>
               <p className="text-gray-600">Proporcionar uma educação infantil de qualidade, com amor e carinho, preparando as crianças para um futuro brilhante.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue text-center">
               <div className="text-4xl mb-4">👁️</div>
               <h3 className="text-xl font-bold mb-4">Visão</h3>
               <p className="text-gray-600">Ser reconhecida como a melhor escola de educação infantil da região, referência em ensino e desenvolvimento.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-yellow text-center">
               <div className="text-4xl mb-4">💎</div>
               <h3 className="text-xl font-bold mb-4">Valores</h3>
               <ul className="text-gray-600 space-y-2">
                  <li>Respeito</li>
                  <li>Amor & Dedicação</li>
                  <li>Inovação</li>
                  <li>Compromisso</li>
               </ul>
            </div>
         </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-brand-green to-green-400 text-white text-center mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dê o Próximo Passo Rumo ao Futuro!</h2>
          <p className="text-lg text-blue-100 mb-8">
            Agende agora mesmo uma visita para conhecer de perto a Escola Semeando Futuro. 
            Descubra nosso ambiente acolhedor e nossa equipe dedicada.
          </p>
          <a 
            href="https://wa.me/5511981948844" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-white text-brand-blue px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-100 transition-colors"
          >
            Agendar Visita Agora
          </a>
        </div>
      </div>
    </div>
  );
};