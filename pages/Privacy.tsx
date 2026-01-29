import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-gray-100 py-16 text-center">
         <div className="max-w-4xl mx-auto px-4">
             <h1 className="text-4xl font-bold text-[#235f5b] mb-4">Política de Privacidade</h1>
             <p className="text-xl text-gray-600">Seus dados e segurança são importantes para nós.</p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="mb-8 text-gray-600 leading-relaxed">
            A Escola Semeando Futuro está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais ao visitar nosso site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Coleta de Informações</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
            Coletamos informações que você nos fornece voluntariamente ao preencher formulários de contato ou agendamento de visitas no site. Isso pode incluir:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Nome completo;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de telefone;</li>
                <li>Informações sobre a idade da criança (para fins pedagógicos).</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Uso das Informações</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
            As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Responder às suas dúvidas e solicitações;</li>
                <li>Agendar visitas à escola;</li>
                <li>Enviar informações relevantes sobre matrículas e eventos escolares (caso autorizado);</li>
                <li>Melhorar a experiência de navegação em nosso site.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Proteção de Dados</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados são acessíveis apenas por funcionários autorizados da escola.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Dados</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            A Escola Semeando Futuro NÃO vende, troca ou transfere suas informações pessoais para terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Nosso site pode utilizar "cookies" para melhorar a experiência do usuário. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar o funcionamento de algumas partes do site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Seus Direitos</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Você tem o direito de solicitar o acesso, correção ou exclusão de suas informações pessoais armazenadas em nossa base de dados. Para exercer esses direitos, entre em contato conosco.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Contato</h3>
            <p className="text-gray-600 leading-relaxed">
            Para dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: semeandofuturo@gmail.com
            </p>
        </div>
      </div>
    </div>
  );
};