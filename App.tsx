
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Evolution from './components/Evolution';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalType, setModalType] = useState<'terms' | 'privacy' | 'service' | null>(null);
  const [activeService, setActiveService] = useState<any>(null);
  const [isBotOpen, setIsBotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openServiceModal = (serviceContent: any) => {
    setActiveService(serviceContent);
    setModalType('service');
  };

  const handleServiceCTA = () => {
    setModalType(null);
    const element = document.getElementById('consultoria');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden scroll-smooth">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Evolution />
        <Solutions onOpenService={openServiceModal} />
        <WhyUs />
      </main>

      <Footer 
        onOpenTerms={() => setModalType('terms')} 
        onOpenPrivacy={() => setModalType('privacy')} 
        onToggleBot={() => setIsBotOpen(!isBotOpen)}
      />

      <AIAssistant isOpen={isBotOpen} setIsOpen={setIsBotOpen} />

      {/* Modal de Detalhes do Serviço */}
      <Modal 
        isOpen={modalType === 'service' && !!activeService} 
        onClose={() => setModalType(null)} 
        title={activeService?.title || ''}
      >
        {activeService && (
          <div className="space-y-8">
            <div className="border-l-4 border-[#0056b3] pl-6 py-2">
              <h3 className="text-2xl font-bold text-[#1a202c] mb-2">{activeService.mainTitle}</h3>
              <p className="text-lg text-[#0056b3] font-medium italic">{activeService.subtitle}</p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {activeService.introduction}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {activeService.details.map((detail: any, i: number) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#1a202c] text-lg mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#0056b3] rounded-full mr-3"></span>
                    {detail.label}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-10 text-center">
              <p className="text-[#1a202c] font-bold text-xl mb-6">
                {activeService.cta}
              </p>
              <button 
                onClick={handleServiceCTA}
                className="bg-[#0056b3] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#004494] transition-all shadow-lg"
              >
                Solicitar Consultoria Gratuita
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)} 
        title="Termos de Uso"
      >
        <div className="space-y-4">
          <p>Bem-vindo à Ariontec. Ao acessar este site, você concorda em cumprir estes termos de serviço.</p>
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Política de Privacidade"
      >
        <div className="space-y-4">
          <p>A sua privacidade é importante para nós. Cumprimos a LGPD.</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
