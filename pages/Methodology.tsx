import React from 'react';
import { BookOpen, Puzzle, Users, Sprout, Brain, Smile, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Methodology: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-brand-light py-16 lg:py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-green rounded-full blur-3xl"></div>
         </div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
             <span className="text-brand-green font-bold tracking-wider text-sm uppercase mb-4 block">Nossa Essência Pedagógica</span>
             <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Aprender é uma <span className="text-brand-blue">construção</span> diária feita com afeto e descoberta.
             </h1>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Na Semeando Futuro, a criança não é apenas uma aluna, é a protagonista da sua própria história de aprendizado.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative shadow-lg shadow-blue-500/50 rounded-3xl">
                <img src="/public/images/Socio_Construtivista.webp" alt="Crianças interagindo" className="rounded-3xl shadow-xl w-full transform rotate-1 hover:rotate-0 transition duration-500 " />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-yellow max-w-xs hidden md:block">
                   <p className="text-gray-800 italic font-medium">"O saber que se constrói é o saber que permanece."</p>
                </div>
            </div>
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-brand-blue font-semibold text-sm mb-6">
                    <Users size={18} /> Abordagem Sócio-Construtivista
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">A Criança como Protagonista</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
                    <p>
                        Acreditamos que o conhecimento não é algo que se transmite passivamente, mas algo que se constrói. Inspirados na abordagem <strong>Sócio-Construtivista</strong>, enxergamos cada criança como um ser potente, capaz de formular hipóteses, investigar e dar sentido ao mundo ao seu redor.
                    </p>
                    <p>
                        Aqui, o aprendizado acontece na interação: com os colegas, com os educadores e com o ambiente. O professor atua como um mediador atento, que escuta, provoca a curiosidade e oferece os recursos necessários para que a criança avance em suas descobertas, respeitando sempre o seu tempo e sua individualidade.
                    </p>
                </div>
            </div>
            
        </div>

        {/* BNCC Alignment */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-brand-green/5 p-10 lg:p-14 flex flex-col justify-center">
                     <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <BookOpen className="text-brand-green" />
                        Alinhados à BNCC
                     </h2>
                     <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Nossa prática pedagógica segue rigorosamente as diretrizes da <strong>Base Nacional Comum Curricular (BNCC)</strong>, garantindo os seis direitos de aprendizagem e desenvolvimento:
                     </p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Conviver', 'Brincar', 'Participar', 'Explorar', 'Expressar', 'Conhecer-se'].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-gray-700 font-medium">
                                <CheckCircle size={20} className="text-brand-green" /> {item}
                            </li>
                        ))}
                     </ul>
                </div>
                <div className="p-10 lg:p-14">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Desenvolvimento Integral</h3>
                    <p className="text-gray-600 mb-6">
                        Não focamos apenas no cognitivo. Trabalhamos os cinco campos de experiência para formar cidadãos completos:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-brand-blue mt-1"><Brain size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-800">O eu, o outro e o nós</h4>
                                <p className="text-sm text-gray-500">Construção da identidade e autonomia.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-lg text-brand-yellow mt-1"><Sprout size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Corpo, gestos e movimentos</h4>
                                <p className="text-sm text-gray-500">Consciência corporal e motricidade.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-pink-100 p-2 rounded-lg text-pink-500 mt-1"><Smile size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Traços, sons, cores e formas</h4>
                                <p className="text-sm text-gray-500">Manifestações artísticas e culturais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Ludic Learning */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Poder do Brincar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Para a criança, brincar é coisa séria. É através da ludicidade que ela elabora sentimentos, testa limites e compreende regras sociais.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-brand-light rounded-2xl p-8 hover:bg-green-50 transition-colors duration-300 border border-transparent hover:border-green-100">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-green mb-6 text-2xl">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Imaginação Criativa</h3>
                <p className="text-gray-600">
                    O faz-de-conta permite que a criança experimente diferentes papéis sociais e desenvolva a criatividade para resolver problemas.
                </p>
            </div>
            <div className="bg-brand-light rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 border border-transparent hover:border-blue-100">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6 text-2xl">🧩</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Raciocínio Lógico</h3>
                <p className="text-gray-600">
                    Jogos e brincadeiras dirigidas estimulam o pensamento estratégico, a contagem e a classificação de forma natural e divertida.
                </p>
            </div>
            <div className="bg-brand-light rounded-2xl p-8 hover:bg-yellow-50 transition-colors duration-300 border border-transparent hover:border-yellow-100">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-yellow mb-6 text-2xl">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Socialização</h3>
                <p className="text-gray-600">
                    Aprender a dividir, esperar a vez e cooperar são habilidades fundamentais trabalhadas diariamente no pátio e na sala.
                </p>
            </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-brand-blue rounded-3xl p-10 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <Puzzle className="mx-auto mb-6 text-blue-200" size={48} />
                <h2 className="text-3xl font-bold mb-4">Venha ver nossa metodologia em ação</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Nada substitui a experiência de ver o brilho nos olhos das nossas crianças. Agende uma visita e converse com nossa coordenação pedagógica.
                </p>
                <Link to="/contato" className="inline-block bg-white text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                    Agendar Conversa Pedagógica
                </Link>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-20 -mb-20"></div>
        </div>

      </div>
    </div>
  );
};