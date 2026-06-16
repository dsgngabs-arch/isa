import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Lock, Users, HeadsetIcon, Lightbulb, Trophy } from "lucide-react";
import { useState } from "react";
import HERO_IMAGE from "../assets/hero pag.png";
import MOBILE_IMAGE from "../assets/Prancheta 2.png";
/**
 * Landing Page - Isa Exclusive Community
 * 
 * Design Philosophy: Premium Feminine Elegance
 * - Hero: 100vh, 40% text (left, max-width 520px) + 60% image (right)
 * - Overlay: Transparent (no overlay)
 * - Section 02: White background (#FFFFFF), 6 premium cards with all benefits
 * - Section Final: CTA
 * - Typography: Outfit (modern, digital, feminine) + Poppins
 * - Button: Neon glow effect with #c0286e
 * - Focus: WhatsApp conversion, legal compliance
 */

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#21040e] text-white overflow-hidden">
      {/* Hero Section - 100vh, No Header */}
      <section className="relative w-full h-screen flex items-stretch overflow-hidden">
        {/* Background Image - Mobile Only */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <img
            src={MOBILE_IMAGE}
            alt="Isa"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <img
            src={HERO_IMAGE}
            alt="Isa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* No Overlay - Full Transparent Background */}

        {/* Content - Left Side (40%) with breathing room */}
        <div className="relative z-10 w-full flex items-center justify-start">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 flex justify-start">
            <div className="w-full max-w-[520px] space-y-8">
              {/* Headline - Modern, Digital, Feminine */}
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Aprenda Como Ativar as <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0286e] to-[#e85a9e]" style={{ textShadow: '0 0 20px rgba(192, 40, 110, 0.8), 0 0 40px rgba(192, 40, 110, 0.5)' }}>RODADAS GRÁTIS</span> sem Precisar Comprar Funcionalidade
                </h1>

                {/* Subheadline - Simplified */}
                <p className="text-base sm:text-lg md:text-lg text-gray-200 font-light leading-relaxed">
                  Entre para o grupo exclusivo da Isa e receba todas as orientações diretamente no WhatsApp.
                </p>
              </div>

              {/* CTA Button - Neon Glow Effect */}
              <div className="pt-4">
                <a
  href="https://chat.whatsapp.com/CE0IEf7S84rB1lXazbXzRy?s=cl&p=a&mlu=1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full sm:w-auto"
>
                  <button 
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #c0286e 0%, #a01f5a 100%)',
                      boxShadow: '0 0 20px rgba(192, 40, 110, 0.6), 0 0 40px rgba(192, 40, 110, 0.3)',
                      border: '2px solid rgba(192, 40, 110, 0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(192, 40, 110, 1), 0 0 60px rgba(192, 40, 110, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(192, 40, 110, 0.6), 0 0 40px rgba(192, 40, 110, 0.3)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span className="relative z-10">Entrar no Grupo Exclusivo</span>
                    {/* Glow effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Benefits Cards with White Background - 6 Cards */}
      <section id="section-02" className="relative py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#21040e]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              O Que Você Encontra Aqui?
            </h2>
            <div className="w-20 h-1 bg-[#c0286e] mx-auto rounded-full" />
          </div>

          {/* Cards Grid - 6 Premium White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Lançamentos Diários",
                description:
                  "Receba informações sobre novos lançamentos compartilhados pela comunidade.",
              },
              {
                icon: Lock,
                title: "Grupo Exclusivo",
                description:
                  "Ambiente reservado para participantes que buscam conteúdos e novidades atualizadas.",
              },
              {
                icon: Users,
                title: "Compartilhamento da Comunidade",
                description:
                  "Acompanhe experiências e conteúdos compartilhados pelos participantes.",
              },
              {
                icon: HeadsetIcon,
                title: "Suporte e Orientações",
                description:
                  "Receba informações e orientações diretamente da equipe responsável pelo grupo.",
              },
              {
                icon: Lightbulb,
                title: "Canal de Dicas",
                description:
                  "Aprenda estratégias exclusivas e dicas diárias de como aproveitar ao máximo a plataforma.",
              },
              {
                icon: Trophy,
                title: "Dinâmicas e Premiações",
                description:
                  "Participe de dinâmicas semanais com prêmios incríveis e recompensas exclusivas.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-[#c0286e]/30"
              >
                <div className="flex gap-4 items-start mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#c0286e]/10 flex items-center justify-center group-hover:bg-[#c0286e]/20 transition-colors">
                    <card.icon className="w-7 h-7 text-[#c0286e]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#21040e]" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button - Premium Neon Glow, Centered and Large */}
          <div className="flex justify-center pt-8">
            <a
  href="https://chat.whatsapp.com/CE0IEf7S84rB1lXazbXzRy?s=cl&p=a&mlu=1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full md:w-auto max-w-md"
>
              <button 
                className="w-full md:w-auto px-10 md:px-14 py-5 md:py-6 text-lg md:text-xl font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #c0286e 0%, #a01f5a 100%)',
                  boxShadow: '0 0 30px rgba(192, 40, 110, 0.7), 0 0 60px rgba(192, 40, 110, 0.4), 0 0 90px rgba(192, 40, 110, 0.2)',
                  border: '2px solid rgba(192, 40, 110, 0.9)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(192, 40, 110, 1), 0 0 80px rgba(192, 40, 110, 0.6), 0 0 120px rgba(192, 40, 110, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(192, 40, 110, 0.7), 0 0 60px rgba(192, 40, 110, 0.4), 0 0 90px rgba(192, 40, 110, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="relative z-10">Quero Participar do Grupo</span>
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Section Final - CTA */}
      <section
        id="section-final"
        className="relative py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#2a0817] to-[#21040e]"
      >
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Faça Parte Do Grupo Da Isa
            </h2>
            <div className="w-20 h-1 bg-[#c0286e] mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Entre para o grupo exclusivo e acompanhe lançamentos, novidades e conteúdos compartilhados diariamente em um ambiente reservado para participantes.
          </p>

          {/* Final CTA Button */}
          <div className="pt-8">
            <a
              href="https://chat.whatsapp.com/CE0IEf7S84rB1lXazbXzRy?s=cl&p=a&mlu=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto"
            >
              <button 
                className="w-full md:w-auto px-8 md:px-12 py-6 md:py-6 text-lg md:text-xl font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #c0286e 0%, #a01f5a 100%)',
                  boxShadow: '0 0 30px rgba(192, 40, 110, 0.7), 0 0 60px rgba(192, 40, 110, 0.4)',
                  border: '2px solid rgba(192, 40, 110, 0.9)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(192, 40, 110, 1), 0 0 80px rgba(192, 40, 110, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(192, 40, 110, 0.7), 0 0 60px rgba(192, 40, 110, 0.4)';
                }}
              >
                <span className="relative z-10">Entrar no Grupo Agora</span>
              </button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {[
              { number: "500+", label: "Mulheres" },
              { number: "100%", label: "Seguro" },
              { number: "24/7", label: "Ativo" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-[#c0286e]">
                  {item.number}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-gray-400 text-sm">
            © 2026 Isa. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Comunidade exclusiva • Espaço seguro • Sem promessas vazias
          </p>
        </div>
      </footer>
    </div>
  );
}
