
import React from 'react';
import { Shield, Layout, Cpu, CheckCircle2 } from 'lucide-react';

interface SolutionsProps {
  onOpenService: (content: any) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onOpenService }) => {
  const services = [
    {
      title: "Infraestrutura e Segurança",
      description: "Proteção total e conectividade ininterrupta para seu negócio.",
      icon: <Shield className="w-8 h-8 text-white" />,
      items: ["Instalação CFTV (Câmeras)", "Cabeamento Estruturado", "Wi-Fi Corporativo", "Controle de Acesso"],
      color: "bg-[#1a202c]",
      fullContent: {
        title: "Infraestrutura e Segurança",
        mainTitle: "A Base Sólida que Seu Negócio Precisa para Crescer",
        subtitle: "Conectividade estável e proteção patrimonial: garantindo que sua operação nunca pare.",
        introduction: "Na era digital, uma falha na internet significa vendas perdidas e um sistema de segurança fraco coloca seu patrimônio em risco. A Ariontec cuida da camada física da sua empresa, implementando soluções robustas que garantem estabilidade, monitoramento e controle total do ambiente.",
        details: [
          {
            label: "Instalação de CFTV (Câmeras de Segurança)",
            description: "• Monitoramento em alta definição com acesso remoto via celular.\n• Sistemas inteligentes que gravam em nuvem ou localmente.\n• Vigilância estratégica para áreas de caixa, estoque e entrada."
          },
          {
            label: "Cabeamento Estruturado",
            description: "• Organização profissional de racks e cabos de rede.\n• Eliminação da 'bagunça de fios' que causa mau contato e lentidão.\n• Infraestrutura preparada para alta velocidade e expansão futura."
          },
          {
            label: "Wi-Fi Corporativo (Redes Mesh e Profissionais)",
            description: "• Conexão estável em todos os cantos da empresa, sem 'pontos cegos'.\n• Redes separadas para visitantes (segurança para seus dados internos).\n• Controle de banda para garantir que o sistema de vendas tenha prioridade."
          },
          {
            label: "Controle de Acesso",
            description: "• Fechaduras biométricas, tags ou reconhecimento facial.\n• Registro de entrada e saída de funcionários.\n• Restrição de acesso a áreas sensíveis (como estoque ou financeiro)."
          }
        ],
        cta: "Não deixe sua empresa vulnerável ou desconectada. Solicite uma visita técnica da Ariontec hoje mesmo."
      }
    },
    {
      title: "Desenvolvimento Web & Software",
      description: "Presença digital marcante com foco em performance e resultados.",
      icon: <Layout className="w-8 h-8 text-white" />,
      items: ["Sites Institucionais", "Landing Pages", "E-commerce de Alta Conversão", "Sistemas Customizados"],
      color: "bg-[#0056b3]",
      fullContent: {
        title: "Desenvolvimento Web & Software",
        mainTitle: "Sua Empresa Digital, Aberta 24 Horas por Dia",
        subtitle: "Sites e sistemas que não servem apenas para \"enfeite\", mas para vender, organizar e gerenciar.",
        introduction: "Ter um site é o básico. Ter uma ferramenta digital que trabalha pelo seu negócio é o diferencial da Ariontec. Desenvolvemos desde a sua vitrine online até o \"motor\" que gerencia sua operação nos bastidores. Unimos design moderno com funcionalidades poderosas.",
        details: [
          {
            label: "Sites Institucionais de Alto Impacto",
            description: "• Design responsivo (perfeito no celular e no computador).\n• Otimização para Google (SEO) para você ser encontrado.\n• Velocidade de carregamento otimizada para não perder visitantes."
          },
          {
            label: "Landing Pages de Alta Conversão",
            description: "• Páginas focadas em uma única missão: vender um produto ou capturar um lead.\n• Estratégias de copy e design voltadas para resultados imediatos."
          },
          {
            label: "Sistemas Web Customizados (SaaS)",
            description: "• Aplicações feitas sob medida para sua regra de negócio (como gestão de barbearias, clínicas ou imobiliárias).\n• Painéis administrativos com controle de estoque, financeiro e RH.\n• Acesso seguro de qualquer lugar, sem necessidade de instalações pesadas."
          },
          {
            label: "E-commerce e Vendas Online",
            description: "• Lojas virtuais integradas com cálculo de frete e pagamentos (Pix/Cartão).\n• Gestão de catálogo e pedidos simplificada."
          }
        ],
        cta: "Transforme sua ideia em software ou coloque sua loja na internet. Vamos construir seu projeto digital?"
      }
    },
    {
      title: "IA e Automação",
      description: "O próximo nível de eficiência operacional para sua empresa.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      items: ["Agentes de IA para Atendimento", "Automação de Processos", "Chatbots Inteligentes", "Análise de Dados"],
      color: "bg-[#1a202c]",
      fullContent: {
        title: "IA e Automação",
        mainTitle: "Inteligência Artificial Trabalhando Enquanto Você Dorme",
        subtitle: "Reduza custos, elimine tarefas repetitivas e atenda seus clientes instantaneamente com a tecnologia da Ariontec.",
        introduction: "O futuro não é sobre trabalhar mais, é sobre trabalhar melhor. A Ariontec implementa agentes de Inteligência Artificial e automações que substituem processos manuais lentos por fluxos digitais instantâneos. Liberte sua equipe humana para o que realmente importa e deixe os robôs cuidarem da rotina.",
        details: [
          {
            label: "Agentes de IA para Atendimento (WhatsApp/Site)",
            description: "• 'Secretários Virtuais' que agendam horários, tiram dúvidas e enviam orçamentos 24/7.\n• Compreensão de linguagem natural (o cliente fala como quiser e o robô entende).\n• Integração direta com a agenda da sua empresa."
          },
          {
            label: "Automação de Processos (RPA)",
            description: "• Tarefas repetitivas (como emitir notas fiscais, enviar lembretes ou atualizar planilhas) feitas automaticamente.\n• Redução drástica de falhas humanas e retrabalho."
          },
          {
            label: "Análise de Dados e Relatórios Inteligentes",
            description: "• IAs que analisam seu histórico de vendas e geram insights de negócio.\n• Previsão de demanda, alertas de estoque e relatórios de desempenho de equipe."
          },
          {
            label: "Chatbots Inteligentes e Triagem",
            description: "• Filtre curiosos e entregue apenas os 'leads quentes' para sua equipe de vendas.\n• Atendimento simultâneo para centenas de clientes sem fila de espera."
          }
        ],
        cta: "Pare de perder tempo com tarefas repetitivas. Descubra quanto a Ariontec pode economizar para você com Automação."
      }
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

              <button 
                onClick={() => onOpenService(service.fullContent)}
                className="w-full py-4 rounded-xl border-2 border-gray-100 text-[#1a202c] font-bold hover:bg-[#1a202c] hover:text-white hover:border-[#1a202c] transition-all"
              >
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
