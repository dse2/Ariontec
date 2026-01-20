
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 md:pt-24 overflow-hidden bg-white scroll-mt-20">
      {/* Container do Mapa Animado */}
      <div className="w-full h-[45vh] md:h-[60vh] relative overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0 opacity-40">
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0056b3" stopOpacity="0" />
                <stop offset="50%" stopColor="#00a3ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#0056b3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g fill="#2d3748">
              {Array.from({ length: 150 }).map((_, i) => (
                <circle 
                  key={`dot-${i}`}
                  cx={Math.random() * 1000} 
                  cy={Math.random() * 500} 
                  r={Math.random() * 1.5 + 0.5} 
                  className="animate-pulse"
                  style={{ animationDelay: `${Math.random() * 3}s` }}
                />
              ))}
            </g>
            <g filter="url(#glow)">
              {[
                { d: "M200,150 Q500,50 800,200", delay: "0s" },
                { d: "M150,300 Q400,250 700,400", delay: "1.5s" },
                { d: "M300,400 Q600,300 900,100", delay: "3s" },
                { d: "M100,100 Q450,450 850,350", delay: "4.5s" },
                { d: "M500,50 L500,450", delay: "2s", opacity: 0.2 }
              ].map((path, idx) => (
                <g key={`path-group-${idx}`}>
                  <path 
                    d={path.d} 
                    fill="none" 
                    stroke="#0056b3" 
                    strokeWidth="0.5" 
                    strokeOpacity={path.opacity || 0.3} 
                  />
                  <path 
                    d={path.d} 
                    fill="none" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="1.5" 
                    strokeDasharray="50, 950"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="1000" 
                      to="0" 
                      dur="5s" 
                      begin={path.delay} 
                      repeatCount="indefinite" 
                    />
                  </path>
                </g>
              ))}
            </g>
            <g>
              {[
                { x: 200, y: 150 }, { x: 800, y: 200 }, { x: 150, y: 300 }, 
                { x: 700, y: 400 }, { x: 300, y: 400 }, { x: 900, y: 100 },
                { x: 450, y: 250 }, { x: 550, y: 180 }
              ].map((node, i) => (
                <g key={`node-${i}`}>
                  <circle cx={node.x} cy={node.y} r="4" fill="#0056b3" opacity="0.4">
                    <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={node.x} cy={node.y} r="2" fill="#00a3ff" />
                </g>
              ))}
            </g>
          </svg>
        </div>

        {/* Overlay de Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-white"></div>
        
        {/* Título Parte 1 - DENTRO DA IMAGEM */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start container mx-auto px-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] text-center md:text-left">
            Do Cabo à Inteligência Artificial:
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 md:-mt-24 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#0056b3] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Tecnologia de Ponta em Minas Gerais</span>
          </div>

          {/* Título Parte 2 - NA PARTE BRANCA */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0056b3] leading-none mb-8">
            A Solução Completa.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Há mais de 10 anos transformando negócios em Belo Horizonte e região. 
            Unimos a robustez da segurança física com a inovação do software e a inteligência da automação moderna.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#solucoes"
              className="w-full sm:w-auto bg-[#0056b3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#004494] transition-all flex items-center justify-center group shadow-xl"
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
