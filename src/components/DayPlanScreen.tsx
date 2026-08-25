import React from 'react';
import { DayPlan } from '../types';
import { FOURTEEN_DAYS_PLANS } from '../data/challengeData';

interface DayPlanScreenProps {
  dayNumber: number;
  completedDays: number[];
  onCompleteDay: (dayNum: number) => void;
  onOpenRecipe: (recipeId: string) => void;
  onChangeDay: (dayNum: number) => void;
}

export const DayPlanScreen: React.FC<DayPlanScreenProps> = ({
  dayNumber,
  completedDays,
  onCompleteDay,
  onOpenRecipe,
  onChangeDay
}) => {
  const plan: DayPlan = FOURTEEN_DAYS_PLANS.find(p => p.dayNumber === dayNumber) || FOURTEEN_DAYS_PLANS[0];
  const isCompleted = completedDays.includes(dayNumber);

  return (
    <div className="px-4 sm:px-6 md:px-16 py-8 max-w-3xl mx-auto pb-28">
      {/* Day Selector Header */}
      <div className="flex items-center justify-between mb-6 bg-surface p-3 sm:p-4 rounded-2xl border border-surface-variant shadow-xs">
        <button
          onClick={() => onChangeDay(Math.max(1, dayNumber - 1))}
          disabled={dayNumber <= 1}
          className="p-2 rounded-full hover:bg-surface-container-low disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer text-primary"
          aria-label="Dia anterior"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="text-center">
          <span className="font-label text-xs uppercase text-secondary tracking-widest font-semibold block">
            Jornada Corpo Leve
          </span>
          <h2 className="font-display text-lg sm:text-xl font-bold text-primary">
            Dia {plan.dayNumber} <span className="text-secondary font-medium text-sm sm:text-base">de 14</span>
          </h2>
        </div>

        <button
          onClick={() => onChangeDay(Math.min(14, dayNumber + 1))}
          disabled={dayNumber >= 14}
          className="p-2 rounded-full hover:bg-surface-container-low disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer text-primary"
          aria-label="Próximo dia"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Main Day Header */}
      <div className="mb-8 bg-surface-bright p-6 rounded-2xl border border-surface-variant">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="bg-primary-container/20 text-on-primary-container text-xs font-semibold px-3 py-1 rounded-full border border-primary-container/30">
            {isCompleted ? '✓ Dia Concluído' : `Dia ${dayNumber} de 14`}
          </span>
          {dayNumber >= 8 && (
            <span className="bg-tertiary-container/20 text-on-tertiary-container text-xs font-semibold px-3 py-1 rounded-full border border-tertiary-container/30">
              Fase 2: Autonomia
            </span>
          )}
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
          {plan.title || `Dia ${dayNumber}`}
        </h1>
        <p className="font-body text-base text-secondary italic">"{plan.quote}"</p>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {/* 1. ☀️ Conversa de Hoje */}
        {plan.todayTalk && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">☀️</span>
              <h2 className="font-display text-lg font-bold text-primary">Conversa de Hoje</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed whitespace-pre-line">
              {plan.todayTalk}
            </p>
          </section>
        )}

        {/* 2. 🎯 Missão do Dia */}
        {plan.mission && (
          <section className="bg-gradient-to-r from-primary-container/20 via-surface to-primary-container/10 rounded-2xl border border-primary-container/40 p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎯</span>
              <h2 className="font-display text-lg font-bold text-primary">Missão do Dia</h2>
            </div>
            <p className="font-body text-base font-semibold text-on-surface leading-relaxed">
              {plan.mission}
            </p>
          </section>
        )}

        {/* 3. 💡 Por que essa missão importa */}
        {plan.whyItMatters && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">💡</span>
              <h2 className="font-display text-lg font-bold text-primary">Por que essa missão importa</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-secondary leading-relaxed">
              {plan.whyItMatters}
            </p>
          </section>
        )}

        {/* 4. 🏆 Checklist de Conquistas de Hoje */}
        {plan.checklistItems && plan.checklistItems.length > 0 && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🏆</span>
              <h2 className="font-display text-lg font-bold text-primary">Checklist de Conquistas de Hoje</h2>
            </div>
            <ul className="space-y-2.5">
              {plan.checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 font-body text-sm sm:text-base text-on-surface">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5 icon-fill">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 🌱 Sua Evolução Até Aqui */}
        {plan.evolutionText && (
          <section className="bg-gradient-to-r from-primary-container/15 via-surface to-primary-container/20 rounded-2xl border border-primary-container/40 p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌱</span>
              <h2 className="font-display text-lg font-bold text-primary">Sua Evolução Até Aqui</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed">
              {plan.evolutionText}
            </p>
          </section>
        )}

        {/* 5. 🍽️ Plano Alimentar de Hoje */}
        {plan.meals && plan.meals.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <span className="text-xl">🍽️</span>
              <h2 className="font-display text-lg font-bold text-primary">Plano Alimentar de Hoje</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {plan.meals.map((meal) => (
                <article
                  key={meal.id}
                  className="bg-surface border border-surface-variant rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-primary-container/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-2xl">{meal.icon || 'restaurant'}</span>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-label text-xs font-semibold px-2.5 py-0.5 bg-primary-container/30 text-on-primary-container rounded-full">
                        {meal.time}
                      </span>
                      <h3 className="font-display text-base font-bold text-on-surface">{meal.title}</h3>
                    </div>
                    <p className="font-body text-sm text-secondary leading-relaxed">{meal.description}</p>
                  </div>

                  {meal.recipeId && (
                    <button
                      onClick={() => onOpenRecipe(meal.recipeId!)}
                      className="w-full sm:w-auto px-4 py-2 border border-outline-variant text-on-surface hover:bg-primary-container/20 hover:border-primary transition-colors rounded-lg font-label text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>🍳 Ver Receita</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 6. 🍳 Receita do Dia */}
        {plan.recipeHighlight && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍳</span>
                <h2 className="font-display text-lg font-bold text-primary">Receita do Dia</h2>
              </div>
              {plan.recipeHighlight.recipeId && (
                <button
                  onClick={() => onOpenRecipe(plan.recipeHighlight!.recipeId!)}
                  className="text-xs font-label font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Abrir no Receituário</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              )}
            </div>
            <h3 className="font-display text-base font-bold text-on-surface mb-1">
              {plan.recipeHighlight.title}
            </h3>
            <p className="font-body text-sm text-secondary leading-relaxed">
              {plan.recipeHighlight.description}
            </p>
          </section>
        )}

        {/* 7. 📌 Dica Prática */}
        {plan.practicalTip && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📌</span>
              <h2 className="font-display text-lg font-bold text-primary">Dica Prática</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed">
              {plan.practicalTip}
            </p>
          </section>
        )}

        {/* 8. 🛒 Dica para Hoje no Mercado */}
        {plan.marketTip && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🛒</span>
              <h2 className="font-display text-lg font-bold text-primary">Dica para Hoje no Mercado</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed">
              {plan.marketTip}
            </p>
          </section>
        )}

        {/* 9. 💡 Curiosidade do Dia */}
        {plan.curiosity && (
          <section className="bg-surface-bright rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">💡</span>
              <h2 className="font-display text-lg font-bold text-primary">Curiosidade do Dia</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-secondary leading-relaxed">
              {plan.curiosity}
            </p>
          </section>
        )}

        {/* 10. 🎉 Parabéns pelo Esforço */}
        {plan.congratulations && (
          <section className="bg-primary-container/20 border border-primary-container/40 rounded-2xl p-6 text-center shadow-xs">
            <span className="text-3xl block mb-2">🎉</span>
            <h2 className="font-display text-lg font-bold text-primary mb-2">Parabéns pelo Esforço!</h2>
            <p className="font-body text-sm sm:text-base text-on-primary-container leading-relaxed">
              {plan.congratulations}
            </p>
          </section>
        )}

        {/* 11. ⏳ O que esperar de amanhã */}
        {plan.nextDayExpectation && (
          <section className="bg-surface-bright rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">⏳</span>
              <h2 className="font-display text-lg font-bold text-primary">O que esperar de amanhã</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-secondary leading-relaxed">
              {plan.nextDayExpectation}
            </p>
          </section>
        )}

        {/* 12. 📝 Reflexão do Dia */}
        {plan.reflection && (
          <section className="bg-surface rounded-2xl border border-surface-variant p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📝</span>
              <h2 className="font-display text-lg font-bold text-primary">Reflexão do Dia</h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface italic leading-relaxed">
              "{plan.reflection}"
            </p>
          </section>
        )}
      </div>

      {/* Completion Button */}
      <div className="mt-10 flex justify-center pb-8">
        <button
          onClick={() => onCompleteDay(dayNumber)}
          className={`w-full sm:w-auto font-label text-base font-semibold py-4 px-10 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 min-h-[52px] cursor-pointer ${
            isCompleted
              ? 'bg-primary text-on-primary hover:bg-primary/90'
              : 'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary'
          }`}
        >
          <span className="material-symbols-outlined icon-fill">
            {isCompleted ? 'check_circle' : 'task_alt'}
          </span>
          <span>
            {dayNumber === 14 
              ? (isCompleted ? 'Finalizar Desafio 14 Dias ✨' : 'Concluir Dia 14 e Finalizar!') 
              : (isCompleted ? 'Dia Concluído! Avançar Próximo Dia' : 'Marcar dia como concluído')}
          </span>
        </button>
      </div>
    </div>
  );
};
