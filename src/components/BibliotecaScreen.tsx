import React, { useState, useEffect } from 'react';
import { Screen } from '../types';
import { LIBRARY_ITEMS, LibraryItem } from '../data/libraryData';
import { EXTRA_RECIPES } from '../data/extraRecipes';
import { getItemFromStorage, setItemInStorage, STORAGE_KEYS } from '../utils/storage';

interface BibliotecaScreenProps {
  onNavigate: (screen: Screen) => void;
  completedDays?: number[] | number;
  onOpenRecipe?: (recipeId: string) => void;
}

export const BibliotecaScreen: React.FC<BibliotecaScreenProps> = ({
  onNavigate,
  completedDays = 0,
  onOpenRecipe,
}) => {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const [showLockModal, setShowLockModal] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // LocalStorage state for Day 7 Celebration Modal
  const [hasSeenCelebration, setHasSeenCelebration] = useState<boolean>(() =>
    getItemFromStorage<boolean>(STORAGE_KEYS.DAY7_CELEBRATION_SEEN, false)
  );
  const [showCelebrationModal, setShowCelebrationModal] = useState<boolean>(false);

  // Normalize completedDays to a count number
  const daysCompletedCount = Array.isArray(completedDays)
    ? completedDays.length
    : typeof completedDays === 'number'
      ? completedDays
      : 0;

  // Auto-trigger Day 7 Celebration modal when reaching Day 7 for the first time
  useEffect(() => {
    if (daysCompletedCount >= 7 && !hasSeenCelebration) {
      setShowCelebrationModal(true);
    }
  }, [daysCompletedCount, hasSeenCelebration]);

  const handleDismissCelebration = () => {
    setItemInStorage(STORAGE_KEYS.DAY7_CELEBRATION_SEEN, true);
    setHasSeenCelebration(true);
    setShowCelebrationModal(false);
  };

  const isItemUnlocked = (item: LibraryItem) => {
    const requiredDay = item.unlockDay || 1;
    if (requiredDay <= 1) return true;
    return daysCompletedCount >= requiredDay;
  };

  const unlockedCount = LIBRARY_ITEMS.filter((item) => isItemUnlocked(item)).length;
  const totalCount = LIBRARY_ITEMS.length;

  const handleCardClick = (item: LibraryItem) => {
    if (!isItemUnlocked(item)) {
      setShowLockModal(true);
      return;
    }

    if (item.type === 'navigation' && item.navTarget) {
      onNavigate(item.navTarget);
    } else {
      setSelectedItem(item);
      setOpenFaqIndex(0);
    }
  };

  return (
    <div className="px-6 md:px-16 pt-8 pb-28 max-w-6xl mx-auto w-full">
      {/* Header Section */}
      <section className="mb-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-2xl">auto_stories</span>
          <span className="font-label text-xs uppercase tracking-widest font-semibold text-primary">
            Acervo Exclusivo
          </span>
        </div>
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          Biblioteca
        </h1>
        <p className="font-body text-base text-secondary max-w-2xl">
          Conteúdos extras para potencializar sua jornada.
        </p>
      </section>

      {/* Top Banner Card */}
      <section className="mb-10 bg-gradient-to-br from-surface-bright via-surface to-primary-container/10 border border-primary-container/40 rounded-[28px] p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary-container/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface">
                Conteúdos Exclusivos
              </h2>
            </div>
            <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
              Novos materiais serão liberados durante o desafio para ajudar você a manter os resultados e tornar sua jornada ainda mais leve.
            </p>
          </div>

          {/* Indicator Badge */}
          <div className="shrink-0 self-start md:self-center">
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest border border-primary-container/50 px-4 py-2.5 rounded-2xl shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label text-xs md:text-sm font-semibold text-primary">
                {unlockedCount} de {totalCount} conteúdos disponíveis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Library Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LIBRARY_ITEMS.map((item) => {
          const unlocked = isItemUnlocked(item);

          return (
            <article
              key={item.id}
              onClick={() => handleCardClick(item)}
              className={`bg-surface border border-surface-variant rounded-[24px] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                !unlocked
                  ? 'opacity-85 bg-surface/90 hover:border-primary-container/60'
                  : 'hover:shadow-md'
              }`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container/40 via-primary to-tertiary-container/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low border border-surface-variant flex items-center justify-center text-2xl group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
                      {item.iconEmoji}
                    </div>
                    {!unlocked && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-bright border border-surface-variant rounded-full flex items-center justify-center text-secondary text-xs shadow-xs">
                        <span className="material-symbols-outlined text-xs">lock</span>
                      </div>
                    )}
                  </div>

                  {item.badgeText && (
                    <span
                      className={`font-label text-[11px] font-semibold px-3 py-1 rounded-full border ${
                        unlocked
                          ? 'bg-primary-container/20 text-on-primary-container border-primary-container/30'
                          : 'bg-surface-container-high text-secondary border-surface-variant'
                      }`}
                    >
                      {item.badgeText}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h2>

                <p className="font-body text-sm text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              {unlocked ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                  className="w-full bg-surface-container-low hover:bg-primary-container text-on-surface hover:text-on-primary-container border border-surface-variant hover:border-primary-container font-label text-sm font-semibold py-3 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-sm"
                >
                  <span>Abrir</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                  className="w-full bg-surface-container-high text-secondary border border-surface-variant font-label text-sm font-semibold py-3 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-highest opacity-90"
                >
                  <span>🔒 Disponível no Dia 7</span>
                </button>
              )}
            </article>
          );
        })}
      </section>

      {/* Lock Info Modal */}
      {/* Celebration Modal (Day 7 Unlock) */}
      {showCelebrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[28px] max-w-md w-full p-6 md:p-8 shadow-2xl flex flex-col items-center text-center animate-scale-up relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl pointer-events-none"></div>

            {/* Icon Header */}
            <div className="w-16 h-16 rounded-full bg-primary-container/30 border border-primary-container/50 flex items-center justify-center text-3xl mb-5 shrink-0 shadow-xs">
              🎉
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Parabéns!
            </h3>

            {/* Body Text */}
            <div className="font-body text-sm md:text-base text-secondary leading-relaxed space-y-3 mb-8 text-center">
              <p>
                Você concluiu a primeira semana do{' '}
                <strong className="font-bold text-on-surface">Desafio Corpo Leve</strong>.
              </p>
              <p>A maioria das pessoas desiste antes de chegar até aqui.</p>
              <p>
                Como recompensa, acabamos de liberar seus{' '}
                <strong className="font-bold text-on-surface">Conteúdos Exclusivos</strong> para acelerar seus resultados.
              </p>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleDismissCelebration}
              className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-base font-semibold py-4 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
            >
              <span>Abrir Conteúdos Exclusivos</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {showLockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[28px] max-w-md w-full p-6 md:p-8 shadow-2xl flex flex-col items-center text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 border border-primary-container/50 flex items-center justify-center text-primary text-3xl mb-5">
              <span className="material-symbols-outlined text-3xl">lock</span>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3">
              Continue sua jornada
            </h3>

            <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-6">
              Esses conteúdos serão liberados automaticamente quando você concluir o Dia 7 do desafio.
              <br className="hidden sm:inline" />
              Cada etapa foi organizada para que você evolua no momento certo.
            </p>

            <div className="w-full space-y-3">
              <button
                onClick={() => {
                  setShowLockModal(false);
                  onNavigate('day_plan');
                }}
                className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-sm font-semibold py-3.5 px-6 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continuar Jornada</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <button
                onClick={() => setShowLockModal(false)}
                className="w-full bg-surface-container-low hover:bg-surface-container-high text-secondary hover:text-on-surface border border-surface-variant font-label text-sm font-semibold py-3 px-6 rounded-full transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reader Modal / Drawer (for unlocked items) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[28px] max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-surface-variant flex items-center justify-between bg-surface-bright sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-xl shrink-0">
                  {selectedItem.iconEmoji}
                </div>
                <div>
                  <span className="font-label text-xs uppercase text-secondary tracking-widest font-semibold block">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-on-surface leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-secondary hover:text-primary transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <p className="font-body text-base text-secondary leading-relaxed bg-surface-container-lowest p-4 rounded-xl border border-surface-variant">
                {selectedItem.description}
              </p>

              {/* Extra Recipes List Content */}
              {selectedItem.type === 'recipes_list' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-lg font-bold text-primary">
                      30 Receitas Exclusivas ({EXTRA_RECIPES.length})
                    </h4>
                    <span className="font-label text-xs font-semibold text-secondary bg-surface-bright px-3 py-1 rounded-full border border-surface-variant">
                      Sem Trigo & Sem Açúcar
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {EXTRA_RECIPES.map((recipe) => (
                      <div
                        key={recipe.id}
                        onClick={() => {
                          if (onOpenRecipe) {
                            setSelectedItem(null);
                            onOpenRecipe(recipe.id);
                          }
                        }}
                        className="bg-surface-bright border border-surface-variant rounded-2xl overflow-hidden hover:border-primary-container p-4 flex gap-4 items-center group cursor-pointer transition-all hover:shadow-xs"
                      >
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-label text-[10px] uppercase font-bold text-primary tracking-wider block mb-0.5">
                            {recipe.category} • {recipe.prepTime}
                          </span>
                          <h5 className="font-display text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                            {recipe.title}
                          </h5>
                          <p className="font-body text-xs text-secondary line-clamp-1 mt-1">
                            {recipe.summary}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-secondary group-hover:text-primary text-base shrink-0">
                          chevron_right
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guide Content */}
              {selectedItem.type === 'guide' && selectedItem.sections && (
                <div className="space-y-6">
                  {selectedItem.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="font-display text-lg font-bold text-primary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {sec.title}
                      </h4>
                      <ul className="space-y-2 font-body text-sm text-on-surface pl-4 border-l-2 border-primary-container/40">
                        {sec.items.map((it, iidx) => (
                          <li key={iidx} className="leading-relaxed">
                            • {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Substitutions Content */}
              {selectedItem.type === 'substitutions' && selectedItem.substitutions && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-primary mb-2">
                    Tabela de Equivalências Nutricionais
                  </h4>
                  {selectedItem.substitutions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-surface-bright border border-surface-variant rounded-2xl p-4 space-y-2"
                    >
                      <div className="font-label text-xs uppercase tracking-wider text-secondary font-semibold">
                        Item Original
                      </div>
                      <div className="font-display text-base font-bold text-on-surface">
                        {sub.original}
                      </div>
                      <div className="h-px bg-surface-variant my-2"></div>
                      <div className="font-label text-xs uppercase tracking-wider text-primary font-semibold">
                        Pode ser substituído por:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sub.substitutes.map((item, sidx) => (
                          <span
                            key={sidx}
                            className="bg-primary-container/20 text-on-primary-container border border-primary-container/30 px-3 py-1 rounded-full font-body text-xs"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Habits Content */}
              {selectedItem.type === 'habits' && selectedItem.habits && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-primary mb-2">
                    5 Hábitos de Ouro para o Pós-Desafio
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedItem.habits.map((habit, idx) => (
                      <div
                        key={idx}
                        className="bg-surface-bright border border-surface-variant p-4 rounded-xl flex gap-3 items-start"
                      >
                        <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5 icon-fill">
                          verified
                        </span>
                        <div>
                          <h5 className="font-display text-base font-bold text-on-surface mb-1">
                            {habit.title}
                          </h5>
                          <p className="font-body text-sm text-secondary leading-relaxed">
                            {habit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Content */}
              {selectedItem.type === 'faq' && selectedItem.faqs && (
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-primary mb-2">
                    Dúvidas Frequentes
                  </h4>
                  {selectedItem.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-surface-variant rounded-xl overflow-hidden bg-surface-bright"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 text-left flex justify-between items-center font-display text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className="material-symbols-outlined text-secondary shrink-0">
                            {isOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 font-body text-sm text-secondary border-t border-surface-variant/50 leading-relaxed bg-surface-container-lowest">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-surface-variant bg-surface-bright flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-sm font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
