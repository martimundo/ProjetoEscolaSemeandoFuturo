import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Clock,
  UserCheck,
  Star,
  CircleDollarSign,
  BicepsFlexed,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Sou mãe de um casal de Gêmeos, a maternidade foi meu maior sonho realizado, mas como muitas mães uma profissional de carreira que se viu em um dilema de deixar o mercado de trabalho e de dedicar a ser mãe em tempo integral. Hoje com 5 anos eles nunca reclamaram de ir a escola, chegam muito alegres, são espertos, ja reconhecem números e conta até 100.",
    author: "Lucilane",
    role: "Mãe do Wel e Luz Marina",
  },
  {
    id: 2,
    text: "Gostaria de compartilhar minha satisfação com a familia Seamando o Futuro. Desde que meu pinguinho entrou na escola, nós como pais de primeira viagem ficamos com medo e preocupados. Mas, hoje, estamos felizes",
    author: "Yasmin",
    role: "Jonh",
  },
  {
    id: 3,
    text: "Desde o berçário, o acolhimento foi excepcional. A comunicação é transparente e o ambiente é muito familiar. É gratificante ver o quanto meu filho é feliz aqui.",
    author: "Fernanda Costa",
    role: "Mãe do Pedro (Berçário)",
  },
  {
    id: 4,
    text: "A equipe pedagógica é fantástica. Percebo a evolução social e cognitiva do meu filho a cada dia. As atividades extras como o Karatê fazem toda a diferença.",
    author: "Roberto Almeida",
    role: "Pai do Lucas (Pré-escola)",
  },
];

export const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-white text-brand-green px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6 border border-green-100">
                🌱 Bem-vindo à Semeando Futuro
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Ensino que transforma o presente e semeia um{" "}
                <span className="text-brand-green">futuro brilhante</span>.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Você busca o melhor para a educação do seu filho? Oferecemos um
                ambiente acolhedor e estimulante, do berçário à pré-escola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5511981948844"
                  className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Agendar Visita
                </a>
                <Link
                  to="/sobre"
                  className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-brand-green transition-all"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-brand-yellow opacity-20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-blue opacity-20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="../public/src/Crianças_Banner.png"
                alt="Crianças aprendendo e brincando"
                className="relative rounded-3xl shadow-2xl z-10 w-full object-cover transform transition hover:scale-[1.01] duration-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro/About Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-light rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Seu Parceiro na Jornada Educacional
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong>Para pais que sonham com um futuro promissor:</strong>{" "}
                  Se você está procurando a primeira escola do seu bebê (a
                  partir de 4 meses) ou deseja proporcionar uma nova experiência
                  de aprendizado para seu filho de até 6 anos, encontrou o lugar
                  ideal.
                </p>
                <p>
                  <strong>Para pais que buscam um ensino diferenciado:</strong>{" "}
                  A Escola Semeando Futuro oferece um ensino de qualidade
                  comprovada, com acompanhamento individualizado e atividades
                  que estimulam a curiosidade.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  to="/sobre"
                  className="text-brand-green font-bold hover:underline"
                >
                  Conheça nossa história &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Metodologia */}
      <section id="metodologia" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma abordagem completa que une carinho, tecnologia e pedagogia
              para o desenvolvimento integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-yellow group">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="text-brand-yellow" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ensino Individualizado
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Valorizamos a jornada única de cada aluno, adaptando estratégias
                e conteúdos às suas necessidades com acompanhamento
                personalizado.
              </p>
              <a
                href="https://wa.me/5511981948844?text=Olá%20quero%20agendar%20uma%20visita"
                targe="_blank"
                className="text-sm font-semibold text-brand-yellow hover:text-yellow-600"
              >
                Agendar Visita &rarr;
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-green transform md:-translate-y-4 group">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professoras Qualificadas
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Nossas educadoras dedicadas promovem um ensino inovador e
                inclusivo, utilizando as metodologias mais modernas para
                inspirar.
              </p>
              <a
                href="https://wa.me/5511981948844"
                className="text-sm font-semibold text-brand-green hover:text-green-700"
              >
                Conhecer Equipe &rarr;
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-blue group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Horários Flexíveis
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Opções que permitem conciliar o aprendizado com a rotina
                familiar, garantindo um ambiente adaptável e acessível.
              </p>
              <a
                href="https://wa.me/5511981948844?text=Olá%20quero%20saber%20mais%20sobre%20os%20horários%20disponível"
                className="text-sm font-semibold text-brand-blue hover:text-blue-700"
                target="_blank"
              >
                Ver Horários &rarr;
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="../public/src/Professora_Ensinando.jpg"
                alt="Professora ensinando"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">
                Pedagogia Ativa
              </h3>
              <p className="text-gray-600 mb-6">
                Na Escola Semeando Futuro, acreditamos que a educação infantil é
                a base para o desenvolvimento integral. Nossa metodologia visa
                promover o aprendizado de forma lúdica.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-brand-green mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Vivências em português e inglês multimodal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-brand-green mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Estímulo à comunicação e pensamento crítico
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-brand-green mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Aprendizado ativo através da descoberta
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Seção Infraestrutura*/}
      <section id="infraestrutura" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Nossa Infraestrutura
            </h2>
            <p className="text-gray-600 mt-4">
              Espaços amplos, seguros e acolhedores.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src="../public/src/infraestrutura_Sala01.jpg"
                alt="Sala da TV"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">Sala da TV</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src="../public/src/infraestrutura_Sala02.jpg"
                alt="Sala de Leitura"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">Sala de Leitura</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src="../public/src/infraestrutura_Sala03.jpg"
                alt="Sala de Aula"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">Sala de Aula</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src="../public/src/infraestrutura_Sala04.jpg"
                alt="Sala do Sono"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">Sala do Sono</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="italic text-gray-500">
              "Aqui, cada cantinho da escola é semeado com propósito e cuidado."
            </p>
          </div>
        </div>
      </section>

      {/* Seção parcerias */}
      <section id="parcerias" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Atividades Extras e Parcerias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-500">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ballet Clássico</h3>
              <p className="text-sm text-gray-600">
                Expressão corporal e disciplina com a Prof. Kelly Cristina.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-500">
                <BicepsFlexed size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Karatê</h3>
              <p className="text-sm text-gray-600">
                Desenvolvimento físico e respeito com o Sensei Josi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
                <CircleDollarSign size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Educação Financeira</h3>
              <p className="text-sm text-gray-600">
                Parceria com a Forme para um futuro promissor desde cedo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              O Que Dizem os Pais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Histórias reais de quem confia no nosso trabalho.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm relative min-h-[340px] md:min-h-[280px] flex items-center justify-center">
              <div className="absolute top-6 left-6 text-brand-yellow/30">
                <Quote size={80} />
              </div>

              <div className="relative z-10 w-full text-center">
                <div key={currentTestimonial} className="animate-fade-in">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-medium leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <span className="text-brand-green font-medium block mt-1">
                      {testimonials[currentTestimonial].role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white text-gray-400 hover:text-brand-green p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-100 hidden md:flex"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white text-gray-400 hover:text-brand-green p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-100 hidden md:flex"
              aria-label="Próximo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Mobile Controls / Dots */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="md:hidden p-2 text-gray-400 hover:text-brand-green"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-brand-green w-8"
                        : "bg-gray-300 w-3 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="md:hidden p-2 text-gray-400 hover:text-brand-green"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-green-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dê o Próximo Passo Rumo ao Futuro!
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Agende agora mesmo uma visita para conhecer de perto a Escola
            Semeando Futuro. Descubra nosso ambiente acolhedor e nossa equipe
            dedicada.
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
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.029598830355!2d-46.936871100000005!3d-23.6032714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf077735205807%3A0xea1eccff94443527!2sR.%20Miraguai%2C%20173%20-%20Granja%20Carolina%2C%20Cotia%20-%20SP%2C%2006700-190!5e0!3m2!1spt-BR!2sbr!4v1769687301119!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Escola Location"
        ></iframe>
      </section>
    </>
  );
};
