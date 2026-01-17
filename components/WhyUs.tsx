
import React from 'react';
import { MapPin, Lightbulb, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="consultoria" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a202c] mb-6">
              Por que escolher a <br />
              <span className="text-[#0056b3]">Ariontec?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Não somos apenas prestadores de serviço, somos seu parceiro estratégico de crescimento em Belo Horizonte e região.
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: <MapPin className="w-7 h-7" />,
                  title: "Suporte Local e Presencial",
                  description: "Estamos em Belo Horizonte. Nada de atendimentos distantes; estamos aqui quando você precisa."
                },
                {
                  icon: <Lightbulb className="w-7 h-7" />,
                  title: "Tecnologia de Ponta",
                  description: "Acesso às mesmas ferramentas usadas pelas grandes techs mundiais adaptadas ao seu negócio."
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Projetos Personalizados",
                  description: "Entendemos sua dor real para criar uma solução sob medida, sem desperdícios."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex group">
                  <div className="mr-6 bg-blue-50 text-[#0056b3] p-4 rounded-2xl group-hover:bg-[#0056b3] group-hover:text-white transition-colors duration-300 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1a202c] mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 bg-[#1a202c] rounded-[3rem] p-12 text-white relative">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Pronto para o próximo nível?</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Agende uma consultoria gratuita com nossos especialistas e descubra como a Ariontec pode blindar e escalar sua empresa.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#0056b3] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Seu E-mail" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#0056b3] transition-all"
                />
                <button className="w-full bg-[#0056b3] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#004494] transition-all shadow-xl shadow-blue-900/30">
                  Solicitar Consultoria
                </button>
              </form>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-[3rem]">
              <div className="grid grid-cols-6 gap-2 rotate-12 -translate-y-20">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="h-20 bg-white/20 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
