import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-gray-100 py-16 text-center">
         <div className="max-w-4xl mx-auto px-4">
             <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
             <p className="text-xl text-gray-600">Última atualização: Março de 2025</p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Ao acessar e usar o site da Escola Semeando Futuro, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, você não deve usar nosso site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Uso do Site</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Este site destina-se a fornecer informações sobre a Escola Semeando Futuro, sua metodologia, infraestrutura e para facilitar o contato entre a escola e os pais ou responsáveis. É proibido usar o site para qualquer finalidade ilegal ou não autorizada.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Propriedade Intelectual</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade exclusiva da Escola Semeando Futuro ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais do Brasil.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Precisão das Informações</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Embora nos esforcemos para manter as informações do site precisas e atualizadas, não garantimos que todo o conteúdo esteja livre de erros. As informações sobre matrículas, horários e atividades podem ser alteradas sem aviso prévio. Recomendamos o contato direto com a secretaria para confirmação.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Links para Terceiros</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            Nosso site pode conter links para sites de terceiros (como redes sociais ou parceiros). Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Alterações nos Termos</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
            A Escola Semeando Futuro reserva-se o direito de revisar estes termos de uso a qualquer momento. Ao usar este site, você concorda em ficar vinculado à versão atual desses Termos de Uso.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Contato</h3>
            <p className="text-gray-600 leading-relaxed">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@escolasemeandofuturo.com.br
            </p>
        </div>
      </div>
    </div>
  );
};