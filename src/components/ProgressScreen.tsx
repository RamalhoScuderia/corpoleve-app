import React from 'react';

interface ProgressScreenProps {
  completedDays: number[];
  currentDay: number;
  completedChecklistsCount: number;
  favoriteRecipesCount: number;
  onOpenDayPlan: (dayNum: number) => void;
  onResetProgress?: () => void;
}

export const ProgressScreen: React.FC<ProgressScreenProps> = ({
  completedDays,
  currentDay,
  completedChecklistsCount,
  favoriteRecipesCount,
  onOpenDayPlan,
  onResetProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = React.useState(false);
  const totalCompleted = completedDays.length;

  return (
    <div className="px-6 md:px-16 pt-8 pb-28 max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <section className="text-center md:text-left space-y-3">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface">
          Seu Progresso
        </h2>
        <p className="font-body text-base text-on-surface-variant">
          Você já concluiu <span className="font-bold text-primary">{totalCompleted}</span> dos 14 dias. Continue focada no seu bem-estar!
        </p>
      </section>

      {/* Bento Grid Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Dias */}
        <div className="bg-surface border border-surface-variant rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center md:items-start justify-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-1 text-primary">
            <span className="material-symbols-outlined text-2xl icon-fill">calendar_month</span>
          </div>
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
            Dias Concluídos
          </span>
          <div className="flex items-baseline space-x-1">
            <span className="font-display text-4xl font-bold text-on-surface">{totalCompleted}</span>
            <span className="font-display text-xl text-on-surface-variant font-semibold">/ 14</span>
          </div>
        </div>

        {/* Card 2: Checklists */}
        <div className="bg-surface border border-surface-variant rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center md:items-start justify-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-2xl">checklist</span>
          </div>
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
            Checklists Completos
          </span>
          <span className="font-display text-4xl font-bold text-on-surface">{completedChecklistsCount}</span>
        </div>

        {/* Card 3: Receitas */}
        <div className="bg-surface border border-surface-variant rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center md:items-start justify-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-1 text-tertiary">
            <span className="material-symbols-outlined text-2xl icon-fill">favorite</span>
          </div>
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
            Receitas Favoritas
          </span>
          <span className="font-display text-4xl font-bold text-on-surface">{favoriteRecipesCount}</span>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-surface border border-surface-variant rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-xl font-bold text-on-surface">Jornada de 14 Dias</h3>
          <span className="font-label text-xs text-secondary">Clique no dia para abrir o plano</span>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-7 gap-3 md:gap-4 relative z-10">
          {Array.from({ length: 14 }, (_, i) => i + 1).map(dayNum => {
            const isDone = completedDays.includes(dayNum);
            const isCurrent = dayNum === currentDay;

            return (
              <button
                key={dayNum}
                onClick={() => onOpenDayPlan(dayNum)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${
                  isDone
                    ? 'bg-primary-container/20 border-primary text-primary font-bold shadow-sm'
                    : isCurrent
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-md scale-105'
                    : 'bg-surface border-surface-variant text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-label text-sm mb-1">
                  {isDone ? (
                    <span className="material-symbols-outlined text-lg text-primary icon-fill">check</span>
                  ) : (
                    <span>{dayNum}</span>
                  )}
                </div>
                <span className="font-label text-[10px] uppercase font-semibold">
                  Dia {dayNum}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {onResetProgress && (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="text-red-600 hover:text-red-700 font-label text-xs font-semibold py-2 px-4 rounded-full border border-red-200 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              <span>Zerar Progresso</span>
            </button>
          )}

          <button
            onClick={() => onOpenDayPlan(currentDay)}
            className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label text-sm font-semibold h-12 px-8 rounded-full transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            Ver Plano do Dia {currentDay}
          </button>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-2xl p-6 md:p-8 max-w-md w-full space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="font-display text-xl font-bold text-on-surface">
                Zerar todo o seu progresso?
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed">
                Essa ação irá redefinir todos os dias concluídos, checklists marcados e voltar para o Dia 1. Suas receitas favoritas não serão afetadas.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="flex-1 bg-surface-container-low border border-surface-variant text-on-surface font-label text-sm font-semibold py-3 rounded-full hover:bg-surface-variant transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowConfirmReset(false);
                  if (onResetProgress) onResetProgress();
                }}
                className="flex-1 bg-red-600 text-white font-label text-sm font-semibold py-3 rounded-full hover:bg-red-700 transition-colors cursor-pointer shadow-xs"
              >
                Sim, Zerar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
