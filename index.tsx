
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Menu, X, ChevronRight, Shield, Layout, Cpu, CheckCircle2, 
  MapPin, Lightbulb, Users, History, Target, Zap, 
  Instagram, Facebook, MessageCircle, Mail, Phone, ArrowRight, Play, Bot, Send, Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- DADOS DA APLICAÇÃO ---
const SERVICES = [
  {
    id: "infra",
    title: "Infraestrutura e Segurança",
    description: "Proteção total e conectividade ininterrupta para seu negócio.",
    icon: <Shield className="w-8 h-8 text-white" />,
    items: ["Instalação CFTV (Câmeras)", "Cabeamento Estruturado", "Wi-Fi Corporativo", "Controle de Acesso"],
    color: "bg-[#1a202c]",
    fullContent: {
      mainTitle: "A Base Sólida que Seu Negócio Precisa",
      subtitle: "Conectividade estável e proteção patrimonial estratégica.",
      introduction: "Na era digital, uma falha na internet significa vendas perdidas e vulnerabilidade. A Ariontec cuida da sua camada física com soluções de rede e segurança de nível empresarial.",
      details: [
        { label: "CFTV Inteligente", description: "Monitoramento HD com acesso via nuvem e inteligência de detecção." },
        { label: "Cabeamento de Rede", description: "Certificação de pontos e organização profissional de racks/servidores." },
        { label: "Wi-Fi Mesh Pro", description: "Cobertura total sem pontos cegos e isolamento de redes convidados." },
        { label: "Acesso Biométrico", description: "Controle de fluxo de pessoas com tags, biometria ou face." }
      ],
      cta: "Proteja sua empresa agora. Solicite uma visita técnica."
    }
  },
  {
    id: "web",
    title: "Desenvolvimento de Software",
    description: "Presença digital marcante com foco em performance e resultados.",
    icon: <Layout className="w-8 h-8 text-white" />,
    items: ["Sites Institucionais", "Landing Pages", "E-commerce Premium", "Sistemas Web SaaS"],
    color: "bg-[#0056b3]",
    fullContent: {
      mainTitle: "Sua Empresa Digital Aberta 24/7",
      subtitle: "Sites e sistemas que vendem, organizam e gerenciam.",
      introduction: "Desenvolvemos desde a sua vitrine online até o motor que gerencia sua operação. Unimos design moderno com arquiteturas de software escaláveis.",
      details: [
        { label: "Sites Otimizados (SEO)", description: "Alta velocidade de carregamento e foco em conversão orgânica no Google." },
        { label: "Sistemas Customizados", description: "Aplicações sob medida para automatizar as regras do seu negócio." },
        { label: "Plataformas de Venda", description: "Lojas virtuais integradas com gateways de pagamento e logística." },
        { label: "Experiência Mobile", description: "Interfaces responsivas que funcionam perfeitamente em qualquer tela." }
      ],
      cta: "Transforme sua ideia em código. Vamos construir seu projeto?"
    }
  },
  {
    id: "ia",
    title: "IA e Automação",
    description: "O próximo nível de eficiência operacional para sua empresa.",
    icon: <Cpu className="w-8 h-8 text-white" />,
    items: ["Agentes de Atendimento", "Automação RPA", "Insights de Dados", "Chatbots Cognitivos"],
    color: "bg-[#1a202c]",
    fullContent: {
      mainTitle: "A Inteligência Artificial no Seu Negócio",
      subtitle: "Reduza custos e elimine tarefas repetitivas com robôs inteligentes.",
      introduction: "A Ariontec implementa agentes de IA que substituem processos lentos por fluxos instantâneos, liberando sua equipe para o que realmente importa.",
      details: [
        { label: "Agentes de Atendimento", description: "IAs que agendam horários e tiram dúvidas via WhatsApp 24/7." },
        { label: "Automação de Processos", description: "Execução automática de tarefas como emissão de notas e planilhas." },
        { label: "Análise Preditiva", description: "Modelos que analisam seus dados para prever tendências de vendas." },
        { label: "Chatbots de Triagem", description: "Qualificação automática de leads para sua equipe comercial." }
      ],
      cta: "Descubra quanto você pode economizar. Fale com um especialista em IA."
    }
  }
];

// --- COMPONENTES ---

const HeroMap: React.FC = () => (
  <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
    <defs>
      <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0056b3" stopOpacity="0"/><stop offset="50%" stopColor="#00a3ff" stopOpacity="1"/><stop offset="100%" stopColor="#0056b3" stopOpacity="0"/></linearGradient>
    </defs>
    <g fill="#2d3748">
      {Array.from({ length: 120 }).map((_, i) => (
        <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 500} r={Math.random() * 1.5 + 0.5} className="pulse-dot" style={{ animationDelay: `${Math.random() * 5}s` }} />
      ))}
    </g>
    <g filter="url(#glow)">
      {[
        { d: "M200,150 Q500,50 800,200", delay: "0s" },
        { d: "M150,300 Q400,250 700,400", delay: "1.5s" },
        { d: "M300,400 Q600,300 900,100", delay: "3s" },
        { d: "M100,100 Q450,450 850,350", delay: "4.5s" }
      ].map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke="url(#lineGrad)" strokeWidth="1.8" strokeDasharray="60, 940">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6s" begin={p.delay} repeatCount="indefinite" />
        </path>
      ))}
    </g>
    <g>
      {[ { x: 450, y: 250 }, { x: 200, y: 150 }, { x: 800, y: 200 }, { x: 300, y: 350 }, { x: 700, y: 120 } ].map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="3.5" fill="#00a3ff" filter="url(#glow)" />
      ))}
    </g>
  </svg>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<any>(null);
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente inteligente da Ariontec. Em que posso ajudar você hoje?' }
  ]);
  const [botInput, setBotInput] = useState('');
  const [isBotLoading, setIsBotLoading] = useState(false);
  const botScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (botScrollRef.current) botScrollRef.current.scrollTop = botScrollRef.current.scrollHeight;
  }, [messages, isBotLoading]);

  const scrollTo = (id: string) => {
    // Normalização para lidar com acentos em "Soluções" -> "solucoes"
    const normalizedId = id.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const el = document.getElementById(normalizedId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handleBotSend = async () => {
    if (!botInput.trim() || isBotLoading) return;
    const userMsg = botInput.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setBotInput('');
    setIsBotLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Você é o ArionBot, da Ariontec (Brasil). Serviços: 1. Infraestrutura/CFTV, 2. Web/Software, 3. IA/Automação. Seja profissional, técnico e convide o usuário para consultoria.",
        },
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Desculpe, tente novamente." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Erro na conexão. Fale conosco no WhatsApp!" }]);
    } finally {
      setIsBotLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={() => scrollTo('inicio')} className="flex items-center space-x-2">
            <img src="https://i.postimg.cc/wjJQ6NXw/logo.jpg" alt="Logo" className="h-10 rounded shadow-sm" />
            <span className="text-2xl font-black text-[#1a202c]">Arion<span className="text-[#0056b3]">tec</span></span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Soluções', 'Sobre', 'Contato'].map(item => (
              <a key={item} href={`#${item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item); }} className="font-semibold text-[#1a202c] hover:text-[#0056b3] transition-colors">{item}</a>
            ))}
            <button onClick={() => scrollTo('consultoria')} className="bg-[#0056b3] text-white px-7 py-3 rounded-full font-bold hover:bg-[#004494] shadow-lg shadow-blue-900/10 flex items-center group">
              Agendar Consultoria <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative flex flex-col">
        <div className="hero-dark-bg h-[45vh] md:h-[55vh] relative overflow-hidden flex flex-col justify-end">
          <div className="absolute inset-0 opacity-40 pointer-events-none"><HeroMap /></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1a]/60"></div>
          
          <div className="container mx-auto px-6 relative z-10 pb-10 md:pb-16">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-5xl leading-tight animate-fade-in drop-shadow-2xl">
              Do Cabo à Inteligência Artificial:
            </h1>
          </div>
        </div>

        <div className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0056b3] leading-none mb-10 animate-fade-in delay-100">
                A Solução Completa.
              </h2>
              
              <div className="flex items-center space-x-3 bg-blue-50 text-[#0056b3] px-5 py-2 rounded-full w-fit mb-12 shadow-sm font-bold text-sm">
                <span className="relative flex h-3 w-3"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span></span>
                <span>Tecnologia de Alta Performance desde 2012</span>
              </div>

              <p className="text-xl md:text-3xl text-gray-500 mb-12 leading-relaxed max-w-3xl">
                Liderando a transformação tecnológica em todo Brasil com segurança física, software e inteligência autônoma.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button onClick={() => scrollTo('solucoes')} className="bg-[#0056b3] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#004494] shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center">
                  Ver Soluções <ArrowRight className="ml-2" />
                </button>
                <button onClick={() => scrollTo('sobre')} className="border-2 border-gray-100 text-[#1a202c] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center">
                  <Play className="mr-2 fill-[#0056b3] text-[#0056b3]" size={20} /> Nossa História
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVOLUTION */}
      <section id="sobre" className="py-32 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] opacity-30 group-hover:opacity-50 transition-all"></div>
            <img src="https://picsum.photos/1000/800?tech" alt="Office" className="rounded-[2.5rem] shadow-2xl relative z-10 w-full" />
            <div className="absolute top-10 right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 text-center border border-blue-50">
              <p className="text-[#0056b3] text-6xl font-black mb-1">12</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Anos de Inovação</p>
            </div>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">O Hub Tecnológico <br/><span className="text-[#0056b3]">de todo o Brasil.</span></h3>
            <p className="text-gray-500 text-xl leading-relaxed mb-10">A Ariontec consolidou sua liderança unindo a engenharia de infraestrutura com o poder computacional da IA moderna, atendendo clientes em escala nacional.</p>
            <div className="space-y-8">
              {[
                { icon: <History />, title: "Tradição Sólida", text: "Mais de uma década servindo as maiores empresas do país." },
                { icon: <Target />, title: "Foco no Resultado", text: "Projetos desenhados para gerar ROI imediato para o cliente." },
                { icon: <Zap />, title: "Escalabilidade", text: "Sistemas preparados para crescer junto com seu negócio." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-2xl text-[#0056b3] mr-6">{item.icon}</div>
                  <div><h4 className="text-xl font-bold mb-1">{item.title}</h4><p className="text-gray-400">{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solucoes" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-6 text-center mb-20">
          <h3 className="text-4xl md:text-6xl font-bold text-[#1a202c]">Tudo o que sua empresa precisa.</h3>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-12 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col group h-full">
              <div className={`${s.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform`}>{s.icon}</div>
              <h4 className="text-3xl font-bold mb-6">{s.title}</h4>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">{s.description}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-medium"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> {item}</li>
                ))}
              </ul>
              <button onClick={() => setActiveModal(s)} className="w-full py-5 rounded-2xl border-2 border-gray-100 font-bold text-lg hover:bg-[#1a202c] hover:text-white transition-all">Saiba Mais</button>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTANCY FORM */}
      <section id="consultoria" className="py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#1a202c] rounded-[4rem] p-10 md:p-24 text-white flex flex-col lg:flex-row gap-20 items-center overflow-hidden relative shadow-3xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none -mr-40"><HeroMap /></div>
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none">Pronto para o Próximo Nível?</h2>
              <div className="space-y-10">
                <div className="flex items-center"><div className="bg-white/10 p-4 rounded-2xl mr-6"><MapPin className="text-[#0056b3]" /></div><p className="text-xl">Atendimento especializado em todo o Brasil</p></div>
                <div className="flex items-center"><div className="bg-white/10 p-4 rounded-2xl mr-6"><Lightbulb className="text-[#0056b3]" /></div><p className="text-xl">Consultoria Estratégica Gratuita</p></div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-white rounded-[3rem] p-10 md:p-14 text-[#1a202c] relative z-10 shadow-2xl">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div><label className="block text-sm font-bold mb-2 text-gray-400 uppercase tracking-widest">Nome Completo</label><input type="text" placeholder="Digite seu nome completo" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:border-[#0056b3] outline-none transition-all" /></div>
                <div><label className="block text-sm font-bold mb-2 text-gray-400 uppercase tracking-widest">E-mail Principal</label><input type="email" placeholder="exemplo@email.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:border-[#0056b3] outline-none transition-all" /></div>
                <button className="w-full bg-[#0056b3] text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/40">Solicitar Contato</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#1a202c] pt-32 pb-12 text-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                <img src="https://i.postimg.cc/wjJQ6NXw/logo.jpg" alt="Logo" className="h-10 rounded" />
                <span className="text-3xl font-black">Ariontec</span>
              </div>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">Referência em Soluções Tecnológicas. Segurança física, lógica e cognitiva em todo o Brasil.</p>
              <div className="flex space-x-5">
                {[Instagram, Facebook, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-[#0056b3] transition-colors"><Icon size={24}/></a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black mb-10 text-xl border-b border-white/10 pb-4 inline-block">Explore</h4>
              <ul className="space-y-5 text-gray-400 text-lg font-medium">
                {['Solucoes', 'Sobre', 'Contato'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l); }} className="hover:text-white transition-colors">{l === 'Solucoes' ? 'Soluções' : l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-10 text-xl border-b border-white/10 pb-4 inline-block">Assistência</h4>
              <ul className="space-y-5 text-gray-400 text-lg">
                <li><button onClick={() => setIsBotOpen(true)} className="flex items-center hover:text-white transition-colors"><MessageCircle className="mr-3 text-[#0056b3]" /> Chat ArionBot</button></li>
                <li><a href="#" className="flex items-center hover:text-white transition-colors"><Phone className="mr-3 text-[#0056b3]" /> (31) 98765-4321</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-10 text-xl border-b border-white/10 pb-4 inline-block">Alcance</h4>
              <p className="text-gray-400 text-lg leading-relaxed flex items-start"><MapPin className="mr-3 text-[#0056b3] mt-1 shrink-0" /> Atendimento Premium em todo território nacional</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-bold uppercase tracking-widest">
            <p>© 2025 Ariontec Soluções Tecnológicas.</p>
            <p className="mt-4 md:mt-0">Tecnologia Certificada • Ariontec Group</p>
          </div>
        </div>
      </footer>

      {/* MODAL UNIFICADO */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1a202c]/80 backdrop-blur-md animate-in fade-in" onClick={() => setActiveModal(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="p-10 border-b flex items-center justify-between">
              <h2 className="text-3xl font-black text-[#1a202c]">{activeModal.title}</h2>
              <button onClick={() => setActiveModal(null)} className="p-3 hover:bg-gray-100 rounded-full transition-colors"><X size={32} /></button>
            </div>
            <div className="p-10 overflow-y-auto custom-scrollbar space-y-10">
              <div className="border-l-8 border-[#0056b3] pl-8">
                <h3 className="text-3xl font-bold mb-2">{activeModal.fullContent.mainTitle}</h3>
                <p className="text-xl text-[#0056b3] font-bold italic">{activeModal.fullContent.subtitle}</p>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed">{activeModal.fullContent.introduction}</p>
              <div className="grid md:grid-cols-2 gap-8">
                {activeModal.fullContent.details.map((d: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h4 className="font-black text-[#1a202c] text-xl mb-4 flex items-center"><span className="w-3 h-3 bg-[#0056b3] rounded-full mr-4"></span>{d.label}</h4>
                    <p className="text-gray-400 text-lg">{d.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-12 rounded-[3rem] text-center border border-blue-100">
                <p className="text-2xl font-black mb-8">{activeModal.fullContent.cta}</p>
                <button onClick={() => { setActiveModal(null); scrollTo('consultoria'); }} className="bg-[#0056b3] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-600 shadow-xl">Agendar Agora</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHAT WINDOW (ARIONBOT) */}
      <div className={`fixed bottom-8 right-8 z-[100] w-[420px] h-[600px] bg-white rounded-[3rem] shadow-3xl flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isBotOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#1a202c] p-8 text-white flex items-center justify-between shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#0056b3] rounded-2xl flex items-center justify-center"><Bot size={28}/></div>
            <div><p className="font-black text-lg">ArionBot</p><div className="flex items-center text-[10px] text-green-400 font-bold uppercase tracking-widest"><span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>Especialista Online</div></div>
          </div>
          <button onClick={() => setIsBotOpen(false)} className="p-3 hover:bg-white/10 rounded-full"><X size={28}/></button>
        </div>
        <div ref={botScrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 bg-gray-50 custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-[#0056b3] text-white rounded-br-none' : 'bg-white text-gray-600 rounded-bl-none border border-gray-100'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isBotLoading && <div className="flex justify-start"><div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100"><Loader2 className="animate-spin text-[#0056b3]" size={24}/></div></div>}
        </div>
        <div className="p-6 bg-white border-t">
          <div className="relative flex items-center">
            <input type="text" value={botInput} onChange={e => setBotInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleBotSend()} placeholder="Como posso te ajudar?" className="w-full bg-gray-100 rounded-2xl px-6 py-4 pr-16 text-sm outline-none focus:ring-2 focus:ring-[#0056b3]/20" />
            <button onClick={handleBotSend} className="absolute right-2 p-3 bg-[#0056b3] text-white rounded-xl hover:bg-blue-600 transition-colors shadow-lg"><Send size={20}/></button>
          </div>
          <p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-[0.2em] font-bold">Ariontec Intelligence • Brasil</p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
