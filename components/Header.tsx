
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Soluções', id: 'solucoes' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Contato', id: 'contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
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

  const logoUrl = "https://i.postimg.cc/wjJQ6NXw/logo.jpg";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src={logoUrl} 
              alt="Ariontec Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 rounded-md shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
              }}
            />
            <div className="fallback-logo hidden w-10 h-10 bg-[#0056b3] rounded-lg flex items-center justify-center overflow-hidden">
               <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#1a202c]">
            Arion<span className="text-[#0056b3]">tec</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-[#1a202c] hover:text-[#0056b3] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#consultoria"
            onClick={(e) => scrollToSection(e, 'consultoria')}
            className="bg-[#0056b3] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#004494] transition-all flex items-center group shadow-lg shadow-blue-900/10"
          >
            Agende sua consultoria
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1a202c]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                className="text-lg font-medium text-[#1a202c]"
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#consultoria"
              className="bg-[#0056b3] text-white px-6 py-3 rounded-xl font-semibold text-center"
              onClick={(e) => scrollToSection(e, 'consultoria')}
            >
              Agende sua consultoria
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
