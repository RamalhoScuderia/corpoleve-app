import React from 'react';
import { Screen } from '../types';
import { DailyTipCard } from './DailyTipCard';

interface DashboardScreenProps {
  currentDay: number;
  completedDaysCount: number;
  onNavigate: (screen: Screen) => void;
  onOpenDayPlan: (dayNum: number) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  currentDay,
  completedDaysCount,
  onNavigate,
  onOpenDayPlan,
}) => {
  const progressPercent = Math.min(100, Math.round((completedDaysCount / 14) * 100));

  return (
    <div className="px-6 pt-6 pb-28 md:px-16 max-w-2xl mx-auto flex flex-col gap-8">
      {/* Hero / Objective Section */}
      <section className="flex flex-col gap-4">
        <div className="bg-primary-fixed/20 rounded-2xl border border-primary-fixed/30 p-6 flex flex-col gap-5 shadow-[0_4px_20px_rgb(62,104,66,0.05)] relative overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <h2 className="font-display text-2xl font-bold text-on-surface">Seu Objetivo</h2>
          </div>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Você está no Dia {currentDay} de 14. Cada pequeno passo conta. Complete as atividades de hoje e avance rumo a uma rotina mais leve e saudável.
          </p>
          <div className="flex flex-col gap-2 mt-1">
            <div className="w-full h-2.5 bg-surface-variant rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(7, progressPercent)}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs font-semibold text-primary">
              <span>Dia {currentDay} ativo</span>
              <span>{completedDaysCount} de 14 dias concluídos ({progressPercent}%)</span>
            </div>
          </div>
        </div>

        <div className="px-2">
          <p className="font-body text-sm text-secondary text-center italic">
            "O primeiro passo é sempre o mais importante. Hoje você começa uma nova rotina."
          </p>
        </div>
      </section>

      {/* Dica do Dia Section */}
      <DailyTipCard />

      {/* Bento Grid Actions */}
      <section className="grid grid-cols-2 gap-4">
        {/* Main Action: Full Width "Continuar Desafio" */}
        <button
          onClick={() => onOpenDayPlan(currentDay)}
          className="col-span-2 bg-primary hover:bg-primary/90 text-on-primary rounded-xl overflow-hidden group shadow-md active:scale-[0.98] transition-all duration-200 p-5 flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex flex-col z-10">
            <div className="flex items-center gap-1.5 mb-1 text-primary-fixed">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
              <span className="font-label text-xs uppercase tracking-wider font-semibold">Ação de Hoje</span>
            </div>
            <h3 className="font-display text-xl font-bold text-on-primary">Continuar Desafio</h3>
            <span className="font-body text-xs text-primary-fixed opacity-90">Ver plano do Dia {currentDay}</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-on-primary/20 flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-3xl icon-fill">arrow_forward</span>
          </div>
        </button>

        {/* Secondary Actions */}
        <button
          onClick={() => onNavigate('shopping_list')}
          className="bg-surface rounded-xl border border-surface-variant p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-surface-container-lowest active:scale-95 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-low group-hover:bg-primary-container/20 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
          </div>
          <span className="font-label text-sm font-medium text-on-surface text-center">Lista de<br />Compras</span>
        </button>

        <button
          onClick={() => onNavigate('recipes')}
          className="bg-surface rounded-xl border border-surface-variant p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-surface-container-lowest active:scale-95 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-low group-hover:bg-primary-container/20 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">menu_book</span>
          </div>
          <span className="font-label text-sm font-medium text-on-surface text-center">Receitas</span>
        </button>

        <button
          onClick={() => onNavigate('checklist')}
          className="bg-surface rounded-xl border border-surface-variant p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-surface-container-lowest active:scale-95 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-low group-hover:bg-primary-container/20 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">checklist</span>
          </div>
          <span className="font-label text-sm font-medium text-on-surface text-center">Checklist</span>
        </button>

        <button
          onClick={() => onNavigate('library')}
          className="bg-surface rounded-xl border border-surface-variant p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-surface-container-lowest active:scale-95 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-primary-container/30 flex items-center justify-center text-primary group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
          <span className="font-label text-sm font-medium text-on-surface text-center">Biblioteca</span>
        </button>
      </section>

      {/* Quick Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-surface rounded-xl border border-surface-variant p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-xl">🔥</div>
          <div className="flex flex-col">
            <span className="font-label text-xs text-secondary">Sequência Atual</span>
            <span className="font-display text-lg font-bold text-on-surface">{completedDaysCount > 0 ? `${completedDaysCount} dias` : '1 dia'}</span>
          </div>
        </div>
        <div className="bg-surface rounded-xl border border-surface-variant p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-xl">✅</div>
          <div className="flex flex-col">
            <span className="font-label text-xs text-secondary">Dias Concluídos</span>
            <span className="font-display text-lg font-bold text-on-surface">{completedDaysCount}/14</span>
          </div>
        </div>
        <div className="bg-surface rounded-xl border border-surface-variant p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-xl">🏆</div>
          <div className="flex flex-col">
            <span className="font-label text-xs text-secondary">Meta</span>
            <span className="font-display text-lg font-bold text-on-surface">14 dias</span>
          </div>
        </div>
      </section>
    </div>
  );
};
