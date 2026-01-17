
import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onToggleBot: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy, onToggleBot }) => {
  const logoUrl = "https://i.postimg.cc/wjJQ6NXw/logo.jpg";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contato" className="bg-[#1a202c] pt-20 pb-10 text-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <img 
                  src={logoUrl} 
                  alt="Ariontec Logo" 
                  className="h-8 w-auto object-contain rounded-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
                  }}
                />
                <div className="fallback-logo hidden w-8 h-8 bg-[#0056b3] rounded flex items-center justify-center overflow-hidden">
                   <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Ariontec</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Hub de Tecnologia em Belo Horizonte e Região. Segurança, Software e Inteligência Artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"><Instagram size={20} /></a>
              <a 
                href="https://www.facebook.com/ariontec/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <button 
                onClick={onToggleBot}
                className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"
                title="Conversar com ArionBot"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Soluções</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">Segurança Eletrônica</a></li>
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">Agentes de IA</a></li>
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">Infraestrutura de TI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 w-5 h-5 text-[#0056b3] shrink-0" />
                <span>Atendimento em toda<br />Belo Horizonte e Região Metropolitana</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 w-5 h-5 text-[#0056b3]" />
                <span>(31) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 w-5 h-5 text-[#0056b3]" />
                <span>contato@ariontec.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2012 Ariontec Soluções Tecnológicas. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={onOpenTerms} className="hover:text-gray-300 transition-colors">Termos de Uso</button>
            <button onClick={onOpenPrivacy} className="hover:text-gray-300 transition-colors">Privacidade</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
