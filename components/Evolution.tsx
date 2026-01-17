
import React from 'react';
import { History, Target, Zap } from 'lucide-react';

const Evolution: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white border-y border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/800/600?tech" 
              alt="Ariontec Escritório" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0056b3] rounded-3xl -z-0 hidden md:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl z-20 hidden lg:block border border-blue-50">
              <p className="text-[#0056b3] text-4xl font-bold mb-1">10+</p>
              <p className="text-gray-600 font-medium">Anos de Experiência</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-6 leading-tight">
              A Evolução da Tecnologia <br />
              <span className="text-[#0056b3]">em Nossas Mãos.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A Ariontec nasceu do compromisso com a infraestrutura e segurança em Belo Horizonte. 
              Hoje, evoluímos para ser o hub tecnológico definitivo da cidade central e região metropolitana. Mantemos nossa essência de 
              solidez física enquanto construímos o futuro através de software e IA.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <History className="w-6 h-6 text-[#0056b3]" />,
                  title: "Tradição Regional",
                  text: "Uma década de confiança construída com empresas de Belo Horizonte e região."
                },
                {
                  icon: <Target className="w-6 h-6 text-[#0056b3]" />,
                  title: "Hub de Soluções",
                  text: "De infraestrutura predial a sistemas complexos na nuvem."
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#0056b3]" />,
                  title: "Inovação Ágil",
                  text: "Implementamos as ferramentas mais modernas do mercado global."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1a202c] mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
