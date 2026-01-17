
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface AIAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente inteligente da Ariontec. Como posso ajudar você hoje com tecnologia?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fecha o bot ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Você é o ArionBot, assistente virtual da Ariontec, empresa de tecnologia em Belo Horizonte e Região. Seja prestativo, moderno e técnico. Fale sobre nossos serviços: 1. Infraestrutura/CFTV, 2. Desenvolvimento Web, 3. IA e Automação. Sempre convide o usuário a falar com um especialista no final se houver interesse comercial. Mantenha as respostas concisas.",
        },
      });

      const botResponse = response.text || "Desculpe, tive um problema ao processar sua solicitação. Poderia repetir?";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "No momento estou indisponível, mas você pode nos chamar no WhatsApp!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop opcional para mobile para fechar ao clicar fora */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Window */}
      <div 
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-2rem)] md:w-[380px] h-[550px] max-h-[80vh] md:max-h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#1a202c] p-4 md:p-5 text-white flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#0056b3] rounded-xl flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <p className="font-bold">ArionBot</p>
              <div className="flex items-center text-xs text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                Online
              </div>
            </div>
          </div>
          
          {/* Botão de Fechar - Aprimorado para melhor visibilidade e clique */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 hover:bg-white/10 rounded-full transition-all text-white/80 hover:text-white"
            aria-label="Fechar ArionBot"
            title="Fechar Chat (Esc)"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-[#0056b3] text-white rounded-br-none' 
                  : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 rounded-bl-none">
                <Loader2 size={20} className="animate-spin text-[#0056b3]" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sua mensagem..."
              className="w-full bg-gray-100 rounded-2xl px-5 py-3.5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-[#0056b3] text-white rounded-xl hover:bg-[#004494] disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-3">
            Ariontec AI Solution • Belo Horizonte, MG
          </p>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
