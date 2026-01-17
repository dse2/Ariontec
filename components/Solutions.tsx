
import React from 'react';
import { Shield, Layout, Cpu, CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    {
      title: "Infraestrutura e Segurança",
      description: "Proteção total e conectividade ininterrupta para seu negócio.",
      icon: <Shield className="w-8 h-8 text-white" />,
      items: ["Instalação CFTV (Câmeras)", "Cabeamento Estruturado", "Wi-Fi Corporativo", "Controle de Acesso"],
      color: "bg-[#1a202c]"
    },
    {
      title: "Desenvolvimento Web & Software",
      description: "Presença digital marcante com foco em performance e resultados.",
      icon: <Layout className="w-8 h-8 text-white" />,
      items: ["Sites Institucionais", "Landing Pages", "E-commerce de Alta Conversão", "Sistemas Customizados"],
      color: "bg-[#0056b3]"
    },
    {
      title: "IA e Automação",
      description: "O próximo nível de eficiência operacional para sua empresa.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      items: ["Agentes de IA para Atendimento", "Automação de Processos", "Chatbots Inteligentes", "Análise de Dados"],
      color: "bg-[#1a202c]"
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#f7fafc] scroll-mt-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold text-[#0056b3] uppercase tracking-[0.2em] mb-4">Nossas Soluções</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#1a202c] max-w-3xl mx-auto">
          Tudo o que sua empresa precisa em um só lugar.
        </h3>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-50"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#1a202c] mb-4">{service.title}</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl border-2 border-gray-100 text-[#1a202c] font-bold hover:bg-[#1a202c] hover:text-white hover:border-[#1a202c] transition-all">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
