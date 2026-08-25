import React from 'react';
import { ONBOARDING_IMAGE } from '../data/challengeData';

interface OnboardingScreenProps {
  onStart: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      {/* Header */}
      <header className="w-full sticky top-0 bg-background/90 backdrop-blur-md border-b border-surface-variant flex justify-between items-center px-6 h-16 z-40">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-primary">spa</span>
        </div>
        <h1 className="font-display text-2xl font-bold text-primary">Corpo Leve</h1>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-surface-variant flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 py-12 w-full max-w-4xl mx-auto z-10 relative">
        {/* Image Container */}
        <div className="w-full md:w-2/3 lg:w-1/2 aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden mb-12 relative soft-blur border border-surface-variant group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img
            src={ONBOARDING_IMAGE}
            alt="Bem-vinda ao Desafio"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Ambient Glow */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container rounded-full blur-[40px] opacity-30 z-0"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-tertiary-container rounded-full blur-[30px] opacity-20 z-0"></div>
        </div>

        {/* Text Content */}
        <div className="text-center w-full md:w-3/4 lg:w-2/3 flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface mb-4 leading-tight">
            Bem-vinda ao Desafio 14 Dias Corpo Leve
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            Durante os próximos 14 dias você seguirá um plano simples para criar hábitos alimentares mais saudáveis, reduzir a sensação de inchaço e recuperar o controle da sua rotina.
          </p>

          {/* Primary Action Button */}
          <button
            onClick={onStart}
            className="bg-primary-container text-on-primary-container font-label font-semibold text-base px-10 py-4 rounded-full min-h-[52px] hover:bg-primary hover:text-on-primary hover:shadow-lg transition-all active:scale-95 duration-200 flex items-center justify-center gap-2 group w-full md:w-auto soft-blur cursor-pointer"
          >
            <span>Começar desafio</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </main>

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-surface-container-low to-primary-container/10 blur-[100px] absolute -top-40 -left-40 opacity-50"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-surface-container-low to-tertiary-container/10 blur-[120px] absolute -bottom-20 -right-20 opacity-50"></div>
      </div>
    </div>
  );
};
