
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
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const [isBotOpen, setIsBotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden scroll-smooth">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Evolution />
        <Solutions />
        <WhyUs />
      </main>

      <Footer 
        onOpenTerms={() => setModalType('terms')} 
        onOpenPrivacy={() => setModalType('privacy')} 
        onToggleBot={() => setIsBotOpen(!isBotOpen)}
      />

      {/* Assistente de IA controlado pelo rodapé */}
      <AIAssistant isOpen={isBotOpen} setIsOpen={setIsBotOpen} />

      {/* Modais Legais */}
      <Modal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)} 
        title="Termos de Uso"
      >
        <div className="space-y-4">
          <p>Bem-vindo à Ariontec. Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
          <h3 className="text-xl font-bold text-[#1a202c]">1. Uso de Licença</h3>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site Ariontec.</p>
          <h3 className="text-xl font-bold text-[#1a202c]">2. Isenção de Responsabilidade</h3>
          <p>Os materiais no site da Ariontec são fornecidos 'como estão'.</p>
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Política de Privacidade"
      >
        <div className="space-y-4">
          <p>A sua privacidade é importante para nós. Cumprimos a LGPD para garantir sua segurança.</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
