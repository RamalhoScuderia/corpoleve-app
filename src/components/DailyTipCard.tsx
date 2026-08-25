import React, { useState } from 'react';
import { DAILY_TIPS, getDailyTipIndex, DailyTip } from '../data/dailyTips';

export const DailyTipCard: React.FC = () => {
  const defaultIndex = getDailyTipIndex();
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);

  const currentTip: DailyTip = DAILY_TIPS[currentIndex];

  const handleNextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_TIPS.length);
  };

  return (
    <div className="bg-surface border border-surface-variant rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgb(143,188,143,0.08)] flex flex-col gap-4 relative overflow-hidden transition-all">
      {/* Decorative gradient corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-surface-variant/40 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary-container/30 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-lg">lightbulb</span>
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-on-surface flex items-center gap-2">
              Dica do Dia
              <span className="font-label text-[10px] font-semibold bg-primary-fixed/30 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">
                Renova a cada 24h
              </span>
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={handleNextTip}
          className="text-secondary hover:text-primary font-label text-xs font-semibold flex items-center gap-1 hover:bg-surface-bright px-2.5 py-1.5 rounded-full transition-colors cursor-pointer shrink-0 border border-transparent hover:border-surface-variant"
          title="Ver outra dica saudável"
        >
          <span className="material-symbols-outlined text-sm">autorenew</span>
          <span className="hidden sm:inline">Ver Outra</span>
        </button>
      </div>

      {/* Body Content */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="font-label text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{currentTip.icon}</span>
            {currentTip.category}
          </span>
        </div>

        <h4 className="font-display text-lg font-bold text-on-surface leading-tight">
          {currentTip.title}
        </h4>

        <p className="font-body text-sm text-secondary leading-relaxed">
          {currentTip.content}
        </p>

        {currentTip.actionableStep && (
          <div className="mt-1 bg-surface-bright border border-primary-container/40 rounded-xl p-3.5 flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">
              task_alt
            </span>
            <div className="flex flex-col">
              <span className="font-label text-[11px] uppercase font-bold text-primary tracking-wider mb-0.5">
                Passo Prático de Hoje
              </span>
              <p className="font-body text-xs font-medium text-on-surface">
                {currentTip.actionableStep}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
