import React, { useEffect } from 'react';
import { Screen } from '../types';

interface CongratulationsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const CongratulationsScreen: React.FC<CongratulationsScreenProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Generate subtle sparkles dynamically
    const container = document.getElementById('sparkle-container');
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
      container.appendChild(sparkle);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white text-on-surface">
      {/* Top bar with back */}
      <header className="w-full absolute top-0 left-0 flex justify-between items-center px-6 h-16 z-40">
        <button
          onClick={() => onNavigate('dashboard')}
          aria-label="Voltar"
          className="text-secondary hover:bg-surface-container-low transition-colors rounded-full p-2 active:scale-95 duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-display text-xl font-bold text-primary">Corpo Leve</span>
        <div className="w-10"></div>
      </header>

      {/* Main Celebration Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto relative z-10 text-center py-12">
        {/* Sparkles Container */}
        <div id="sparkle-container" className="absolute inset-0 pointer-events-none overflow-hidden z-0"></div>

        {/* Achievement Icon */}
        <div className="fade-in-up relative z-10 mb-8">
          <div className="w-28 h-24 md:w-28 md:h-28 rounded-full bg-surface-container-low flex items-center justify-center shadow-[0_10px_30px_rgba(210,173,53,0.15)] border border-surface-variant relative">
            <span className="material-symbols-outlined text-tertiary-container icon-fill text-5xl">
              emoji_events
            </span>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary-container opacity-20 scale-125 animate-ping"></div>
        </div>

        {/* Headlines */}
        <div className="fade-in-up delay-1 relative z-10 w-full mb-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
            Parabéns!
          </h1>
          <p className="font-body text-lg text-on-surface-variant px-4 leading-snug">
            Você concluiu o Desafio 14 Dias Corpo Leve.
          </p>
        </div>

        <div className="fade-in-up delay-2 relative z-10 w-full mb-10">
          <p className="font-body text-sm md:text-base text-secondary leading-relaxed px-2">
            Este é apenas o começo da sua jornada rumo ao bem-estar contínuo. Sua dedicação é inspiradora. Respire fundo, celebre essa conquista e prepare-se para o próximo passo na sua transformação.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="fade-in-up delay-3 relative z-10 w-full flex flex-col gap-4">
          <button
            onClick={() => onNavigate('library')}
            className="w-full h-14 bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-base font-semibold rounded-full flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(143,188,143,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <span>Acessar Biblioteca de Conteúdos</span>
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </button>

          <button
            onClick={() => onNavigate('progress')}
            className="w-full h-14 border border-outline-variant hover:bg-surface-container-low text-secondary font-label text-base font-semibold rounded-full flex items-center justify-center transition-all active:scale-[0.98] cursor-pointer"
          >
            Ver meu progresso
          </button>
        </div>
      </main>
    </div>
  );
};
