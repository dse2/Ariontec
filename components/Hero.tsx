
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 md:pt-24 overflow-hidden bg-white scroll-mt-20">
      {/* Imagem de Impacto Inicial (Mapa Múndi) */}
      <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
        <img 
          src="https://i.postimg.cc/NjwdStSX/mapa-mundi.jpg" 
          alt="Conectividade Global" 
          className="w-full h-full object-cover object-center animate-fade-in"
        />
        {/* Overlay para suavizar a transição para o conteúdo branco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-6 pt-12 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#0056b3] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Tecnologia de Ponta em Belo Horizonte e Região</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a202c] leading-tight mb-8">
            Do Cabo à Inteligência Artificial: <br />
            <span className="text-[#0056b3]">A Solução Completa.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Há mais de 10 anos transformando negócios em Belo Horizonte e região. 
            Unimos a robustez da segurança física com a inovação do software e a inteligência da automação moderna.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#solucoes"
              className="w-full sm:w-auto bg-[#0056b3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#004494] transition-all flex items-center justify-center group shadow-xl shadow-blue-600/20"
            >
              Conheça Nossas Soluções
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              className="w-full sm:w-auto border-2 border-gray-200 text-[#1a202c] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center group"
            >
              <Play className="mr-2 w-4 h-4 text-[#0056b3] fill-[#0056b3]" />
              Ver Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
