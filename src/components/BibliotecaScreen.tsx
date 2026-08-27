import React, { useEffect, useMemo, useState } from 'react';
import { Screen } from '../types';
import {
  LIBRARY_ITEMS,
  LibraryChecklist,
  LibraryItem,
  LibraryPlannerBlock,
  LibrarySection,
  LibraryToolGroup,
} from '../data/libraryData';
import { EXTRA_RECIPES } from '../data/extraRecipes';
import {
  getItemFromStorage,
  setItemInStorage,
  STORAGE_KEYS,
} from '../utils/storage';

interface BibliotecaScreenProps {
  onNavigate: (screen: Screen) => void;
  completedDays?: number[] | number;
  onOpenRecipe?: (recipeId: string) => void;
}

type ToolSelections = Record<string, string[]>;
type PlannerValues = Record<string, string>;
type ChecklistValues = Record<string, boolean>;

const TOOL_KEY = 'corpo_leve_library_tool_selections';
const PLANNER_KEY = 'corpo_leve_library_planner_values';
const CHECKLIST_KEY = 'corpo_leve_library_checklists';

const loadJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const BibliotecaScreen: React.FC<BibliotecaScreenProps> = ({
  onNavigate,
  completedDays = 0,
  onOpenRecipe,
}) => {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const [lockedItem, setLockedItem] = useState<LibraryItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openRecipeIndex, setOpenRecipeIndex] = useState<number | null>(0);

  const [toolSelections, setToolSelections] = useState<ToolSelections>(() =>
    loadJson<ToolSelections>(TOOL_KEY, {})
  );
  const [plannerValues, setPlannerValues] = useState<PlannerValues>(() =>
    loadJson<PlannerValues>(PLANNER_KEY, {})
  );
  const [checklistValues, setChecklistValues] = useState<ChecklistValues>(() =>
    loadJson<ChecklistValues>(CHECKLIST_KEY, {})
  );

  const [hasSeenCelebration, setHasSeenCelebration] = useState<boolean>(() =>
    getItemFromStorage<boolean>(STORAGE_KEYS.DAY7_CELEBRATION_SEEN, false)
  );
  const [showCelebrationModal, setShowCelebrationModal] =
    useState<boolean>(false);

  const daysCompletedCount = Array.isArray(completedDays)
    ? completedDays.length
    : typeof completedDays === 'number'
      ? completedDays
      : 0;

  useEffect(() => {
    if (daysCompletedCount >= 7 && !hasSeenCelebration) {
      setShowCelebrationModal(true);
    }
  }, [daysCompletedCount, hasSeenCelebration]);

  useEffect(() => {
    try {
      window.localStorage.setItem(TOOL_KEY, JSON.stringify(toolSelections));
    } catch {}
  }, [toolSelections]);

  useEffect(() => {
    try {
      window.localStorage.setItem(PLANNER_KEY, JSON.stringify(plannerValues));
    } catch {}
  }, [plannerValues]);

  useEffect(() => {
    try {
      window.localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checklistValues));
    } catch {}
  }, [checklistValues]);

  const handleDismissCelebration = () => {
    setItemInStorage(STORAGE_KEYS.DAY7_CELEBRATION_SEEN, true);
    setHasSeenCelebration(true);
    setShowCelebrationModal(false);
  };

  const isItemUnlocked = (item: LibraryItem) => {
    const requiredDay = item.unlockDay || 1;
    return requiredDay <= 1 || daysCompletedCount >= requiredDay;
  };

  const unlockedCount = LIBRARY_ITEMS.filter(isItemUnlocked).length;
  const totalCount = LIBRARY_ITEMS.length;

  const handleCardClick = (item: LibraryItem) => {
    if (!isItemUnlocked(item)) {
      setLockedItem(item);
      return;
    }

    if (item.type === 'navigation' && item.navTarget) {
      onNavigate(item.navTarget);
      return;
    }

    setSelectedItem(item);
    setOpenFaqIndex(0);
    setOpenRecipeIndex(0);
  };

  const toolId = (itemId: string, groupId: string) =>
    `${itemId}::${groupId}`;
  const plannerId = (itemId: string, fieldId: string) =>
    `${itemId}::${fieldId}`;
  const checklistId = (
    itemId: string,
    checklistIndex: number,
    itemIndex: number
  ) => `${itemId}::${checklistIndex}::${itemIndex}`;

  const toggleToolOption = (
    itemId: string,
    group: LibraryToolGroup,
    optionId: string
  ) => {
    const id = toolId(itemId, group.id);
    const current = toolSelections[id] || [];

    if (current.includes(optionId)) {
      setToolSelections((prev) => ({
        ...prev,
        [id]: current.filter((value) => value !== optionId),
      }));
      return;
    }

    if (group.maxSelections === 1) {
      setToolSelections((prev) => ({ ...prev, [id]: [optionId] }));
      return;
    }

    if (group.maxSelections && current.length >= group.maxSelections) {
      return;
    }

    setToolSelections((prev) => ({
      ...prev,
      [id]: [...current, optionId],
    }));
  };

  const updatePlannerValue = (
    itemId: string,
    fieldId: string,
    value: string
  ) => {
    setPlannerValues((prev) => ({
      ...prev,
      [plannerId(itemId, fieldId)]: value,
    }));
  };

  const toggleChecklist = (
    itemId: string,
    checklistIndex: number,
    itemIndex: number
  ) => {
    const id = checklistId(itemId, checklistIndex, itemIndex);
    setChecklistValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const plateBuilderResult = useMemo(() => {
    if (selectedItem?.type !== 'plate_builder' || !selectedItem.toolGroups) {
      return null;
    }

    const selectedLabels = selectedItem.toolGroups.flatMap((group) => {
      const selected = toolSelections[toolId(selectedItem.id, group.id)] || [];
      return group.options
        .filter((option) => selected.includes(option.id))
        .map((option) => ({
          groupId: group.id,
          label: option.label,
        }));
    });

    const protein = selectedLabels.find((item) => item.groupId === 'proteina');
    const carb = selectedLabels.find((item) => item.groupId === 'carboidrato');
    const vegetables = selectedLabels.filter(
      (item) => item.groupId === 'vegetais'
    );

    return {
      ready: Boolean(protein) && Boolean(carb) && vegetables.length >= 2,
      protein: protein?.label,
      carb: carb?.label,
      vegetables: vegetables.map((item) => item.label),
    };
  }, [selectedItem, toolSelections]);

  const renderSections = (sections?: LibrarySection[]) => {
    if (!sections?.length) return null;

    return (
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={`${section.title}-${index}`} className="space-y-3">
            <h4 className="font-display text-lg font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {section.title}
            </h4>
            <ul className="space-y-2 font-body text-sm text-on-surface pl-4 border-l-2 border-primary-container/40">
              {section.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderToolGroups = (
    item: LibraryItem,
    groups?: LibraryToolGroup[]
  ) => {
    if (!groups?.length) return null;

    return (
      <div className="space-y-5">
        {groups.map((group) => {
          const id = toolId(item.id, group.id);
          const selected = toolSelections[id] || [];

          return (
            <div
              key={group.id}
              className="bg-surface-bright border border-surface-variant rounded-2xl p-5"
            >
              <h4 className="font-display text-base font-bold text-primary">
                {group.title}
              </h4>

              {group.subtitle && (
                <p className="font-body text-xs text-secondary mt-1">
                  {group.subtitle}
                </p>
              )}

              {(group.minSelections || group.maxSelections) && (
                <p className="font-label text-[11px] text-secondary mt-2 mb-4">
                  {group.minSelections && group.maxSelections
                    ? `Escolha de ${group.minSelections} a ${group.maxSelections}`
                    : group.minSelections
                      ? `Escolha pelo menos ${group.minSelections}`
                      : `Escolha até ${group.maxSelections}`}
                </p>
              )}

              {!group.minSelections && !group.maxSelections && (
                <div className="mb-4" />
              )}

              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const active = selected.includes(option.id);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        toggleToolOption(item.id, group, option.id)
                      }
                      className={`px-3.5 py-2 rounded-full border font-label text-xs font-semibold transition-colors cursor-pointer ${
                        active
                          ? 'bg-primary text-on-primary border-primary'
                          : 'bg-surface text-on-surface border-surface-variant hover:border-primary-container hover:bg-primary-container/10'
                      }`}
                    >
                      {active ? '✓ ' : ''}
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderChecklists = (
    item: LibraryItem,
    checklists?: LibraryChecklist[]
  ) => {
    if (!checklists?.length) return null;

    return (
      <div className="space-y-5">
        {checklists.map((checklist, checklistIndex) => (
          <div
            key={`${checklist.title}-${checklistIndex}`}
            className="bg-surface-bright border border-surface-variant rounded-2xl p-5"
          >
            <h4 className="font-display text-lg font-bold text-primary mb-4">
              {checklist.title}
            </h4>

            <div className="space-y-2">
              {checklist.items.map((checkItem, itemIndex) => {
                const id = checklistId(
                  item.id,
                  checklistIndex,
                  itemIndex
                );
                const checked = Boolean(checklistValues[id]);

                return (
                  <button
                    key={`${checkItem}-${itemIndex}`}
                    type="button"
                    onClick={() =>
                      toggleChecklist(
                        item.id,
                        checklistIndex,
                        itemIndex
                      )
                    }
                    className="w-full flex items-start gap-3 text-left p-3 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${
                        checked ? 'text-primary icon-fill' : 'text-secondary'
                      }`}
                    >
                      {checked ? 'check_circle' : 'radio_button_unchecked'}
                    </span>

                    <span
                      className={`font-body text-sm leading-relaxed ${
                        checked
                          ? 'text-primary font-medium'
                          : 'text-on-surface'
                      }`}
                    >
                      {checkItem}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderPlannerBlocks = (
    item: LibraryItem,
    blocks?: LibraryPlannerBlock[]
  ) => {
    if (!blocks?.length) return null;

    return (
      <div className="space-y-5">
        {blocks.map((block, blockIndex) => (
          <div
            key={`${block.title}-${blockIndex}`}
            className="bg-surface-bright border border-surface-variant rounded-2xl p-5"
          >
            <h4 className="font-display text-lg font-bold text-primary mb-1">
              {block.title}
            </h4>

            {block.description && (
              <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                {block.description}
              </p>
            )}

            <div className="space-y-4">
              {block.fields.map((field) => {
                const id = plannerId(item.id, field.id);

                return (
                  <label key={field.id} className="block">
                    <span className="font-label text-xs font-semibold text-on-surface block mb-1.5">
                      {field.label}
                    </span>

                    <textarea
                      value={plannerValues[id] || ''}
                      onChange={(event) =>
                        updatePlannerValue(
                          item.id,
                          field.id,
                          event.target.value
                        )
                      }
                      placeholder={field.placeholder || 'Escreva aqui...'}
                      rows={2}
                      className="w-full resize-y min-h-[72px] bg-surface border border-surface-variant rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-secondary/60 outline-none focus:ring-2 focus:ring-primary-container"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const isRecipesContent =
    selectedItem?.type === 'recipes_list' ||
    selectedItem?.type === 'extra_recipes';

  return (
    <div className="px-6 md:px-16 pt-8 pb-28 max-w-6xl mx-auto w-full">
      <section className="mb-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-2xl">
            auto_stories
          </span>
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

      <section className="mb-10 bg-gradient-to-br from-surface-bright via-surface to-primary-container/10 border border-primary-container/40 rounded-[28px] p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface">
                Conteúdos Exclusivos
              </h2>
            </div>

            <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
              Novos materiais são liberados nos Dias 4, 7, 10 e 14 para
              acompanhar sua evolução e ampliar sua autonomia.
            </p>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest border border-primary-container/50 px-4 py-2.5 rounded-2xl shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="font-label text-xs md:text-sm font-semibold text-primary">
                {unlockedCount} de {totalCount} conteúdos disponíveis
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LIBRARY_ITEMS.map((item) => {
          const unlocked = isItemUnlocked(item);
          const requiredDay = item.unlockDay || 1;

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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container/40 via-primary to-tertiary-container/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low border border-surface-variant flex items-center justify-center text-2xl group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
                      {item.iconEmoji}
                    </div>

                    {!unlocked && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-bright border border-surface-variant rounded-full flex items-center justify-center text-secondary text-xs shadow-xs">
                        <span className="material-symbols-outlined text-xs">
                          lock
                        </span>
                      </div>
                    )}
                  </div>

                  {item.badgeText && (
                    <span
                      className={`font-label text-[11px] font-semibold px-3 py-1 rounded-full border text-right ${
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

              {unlocked ? (
                <button
                  onClick={(event) => {
                    event.stopPropagation();
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
                  onClick={(event) => {
                    event.stopPropagation();
                    setLockedItem(item);
                  }}
                  className="w-full bg-surface-container-high text-secondary border border-surface-variant font-label text-sm font-semibold py-3 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-highest opacity-90"
                >
                  <span>🔒 Disponível no Dia {requiredDay}</span>
                </button>
              )}
            </article>
          );
        })}
      </section>

      {showCelebrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[28px] max-w-md w-full p-6 md:p-8 shadow-2xl flex flex-col items-center text-center animate-scale-up relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 border border-primary-container/50 flex items-center justify-center text-3xl mb-5">
              🎉
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Primeira semana concluída!
            </h3>

            <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-3">
              Você chegou ao Dia 7 do{' '}
              <strong className="font-bold text-on-surface">
                Desafio Corpo Leve
              </strong>
              .
            </p>

            <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-8">
              Novos conteúdos da Biblioteca acabam de ser liberados.
            </p>

            <button
              onClick={handleDismissCelebration}
              className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-base font-semibold py-4 px-6 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
            >
              <span>Explorar novos conteúdos</span>
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}

      {lockedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[28px] max-w-md w-full p-6 md:p-8 shadow-2xl flex flex-col items-center text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 border border-primary-container/50 flex items-center justify-center text-primary text-3xl mb-5">
              <span className="material-symbols-outlined text-3xl">lock</span>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3">
              Continue sua jornada
            </h3>

            <p className="font-body text-sm md:text-base text-secondary leading-relaxed mb-2">
              <strong className="text-on-surface">{lockedItem.title}</strong>{' '}
              será liberado quando você concluir o Dia{' '}
              {lockedItem.unlockDay || 1}.
            </p>

            <p className="font-body text-sm text-secondary leading-relaxed mb-6">
              Cada etapa da Biblioteca acompanha o seu avanço no desafio.
            </p>

            <div className="w-full space-y-3">
              <button
                onClick={() => {
                  setLockedItem(null);
                  onNavigate('day_plan');
                }}
                className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-sm font-semibold py-3.5 px-6 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continuar Jornada</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={() => setLockedItem(null)}
                className="w-full bg-surface-container-low hover:bg-surface-container-high text-secondary hover:text-on-surface border border-surface-variant font-label text-sm font-semibold py-3 px-6 rounded-full transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-surface-variant rounded-[24px] sm:rounded-[28px] max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up">
            <div className="p-5 md:p-7 border-b border-surface-variant flex items-center justify-between gap-4 bg-surface-bright sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-xl shrink-0">
                  {selectedItem.iconEmoji}
                </div>

                <div className="min-w-0">
                  <span className="font-label text-[10px] sm:text-xs uppercase text-secondary tracking-widest font-semibold block">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface leading-tight truncate">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-secondary hover:text-primary transition-colors cursor-pointer shrink-0"
                aria-label="Fechar"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-5 md:p-8 overflow-y-auto space-y-7">
              <p className="font-body text-base text-secondary leading-relaxed bg-surface-container-lowest p-4 rounded-xl border border-surface-variant">
                {selectedItem.description}
              </p>

              {selectedItem.intro && (
                <div className="bg-primary-container/10 border border-primary-container/30 rounded-2xl p-5">
                  <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed">
                    {selectedItem.intro}
                  </p>
                </div>
              )}

              {isRecipesContent && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h4 className="font-display text-lg font-bold text-primary">
                      {selectedItem.type === 'extra_recipes'
                        ? `Receitas Extras (${EXTRA_RECIPES.length})`
                        : 'Receitas Exclusivas'}
                    </h4>

                    <span className="font-label text-xs font-semibold text-secondary bg-surface-bright px-3 py-1 rounded-full border border-surface-variant self-start sm:self-auto">
                      {selectedItem.type === 'extra_recipes'
                        ? 'Mais Variedade'
                        : 'Receituário Premium'}
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

                          <h5 className="font-display text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
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

              {!isRecipesContent && renderSections(selectedItem.sections)}

              {selectedItem.type === 'substitutions' &&
                selectedItem.substitutions && (
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-primary">
                      Tabela de Substituições
                    </h4>

                    {selectedItem.substitutions.map((sub, index) => (
                      <div
                        key={`${sub.original}-${index}`}
                        className="bg-surface-bright border border-surface-variant rounded-2xl p-4 space-y-2"
                      >
                        <div className="font-label text-xs uppercase tracking-wider text-secondary font-semibold">
                          Item Original
                        </div>
                        <div className="font-display text-base font-bold text-on-surface">
                          {sub.original}
                        </div>

                        <div className="h-px bg-surface-variant my-2" />

                        <div className="font-label text-xs uppercase tracking-wider text-primary font-semibold">
                          Pode ser substituído por:
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {sub.substitutes.map((substitute, subIndex) => (
                            <span
                              key={`${substitute}-${subIndex}`}
                              className="bg-primary-container/20 text-on-primary-container border border-primary-container/30 px-3 py-1 rounded-full font-body text-xs"
                            >
                              ✓ {substitute}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              {selectedItem.type === 'habits' && selectedItem.habits && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-primary">
                    Hábitos para continuar
                  </h4>

                  {selectedItem.habits.map((habit, index) => (
                    <div
                      key={`${habit.title}-${index}`}
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
              )}

              {selectedItem.type === 'faq' && selectedItem.faqs && (
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-primary">
                    Dúvidas Frequentes
                  </h4>

                  {selectedItem.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;

                    return (
                      <div
                        key={`${faq.question}-${index}`}
                        className="border border-surface-variant rounded-xl overflow-hidden bg-surface-bright"
                      >
                        <button
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : index)
                          }
                          className="w-full p-4 text-left flex justify-between items-center font-display text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className="material-symbols-outlined text-secondary shrink-0">
                            {isOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-3 font-body text-sm text-secondary border-t border-surface-variant/50 leading-relaxed bg-surface-container-lowest">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {selectedItem.type === 'desserts' && selectedItem.recipes && (
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-primary">
                    12 Sobremesas Corpo Leve
                  </h4>

                  {selectedItem.recipes.map((recipe, index) => {
                    const isOpen = openRecipeIndex === index;

                    return (
                      <div
                        key={recipe.id}
                        className="border border-surface-variant rounded-2xl overflow-hidden bg-surface-bright"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenRecipeIndex(isOpen ? null : index)
                          }
                          className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <div>
                            <span className="font-label text-[10px] uppercase text-primary font-bold tracking-wider">
                              {recipe.time}
                            </span>
                            <h5 className="font-display text-base font-bold text-on-surface mt-1">
                              {index + 1}. {recipe.title}
                            </h5>
                          </div>

                          <span className="material-symbols-outlined text-secondary shrink-0">
                            {isOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-5 border-t border-surface-variant/60 bg-surface-container-lowest space-y-5">
                            {recipe.image && (
                              <div className="relative rounded-2xl overflow-hidden h-44 sm:h-52 bg-surface-container-low border border-surface-variant/60">
                                <img
                                  src={recipe.image}
                                  alt={recipe.title}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    ((e.currentTarget as HTMLElement).parentElement as HTMLElement)?.classList.add('hidden');
                                  }}
                                />
                              </div>
                            )}

                            <div>
                              <h6 className="font-label text-xs uppercase tracking-wider font-bold text-primary mb-2">
                                Ingredientes
                              </h6>

                              <ul className="space-y-1.5 font-body text-sm text-on-surface">
                                {recipe.ingredients.map(
                                  (ingredient, ingredientIndex) => (
                                    <li
                                      key={`${ingredient}-${ingredientIndex}`}
                                      className="flex gap-2"
                                    >
                                      <span className="text-primary">•</span>
                                      <span>{ingredient}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <h6 className="font-label text-xs uppercase tracking-wider font-bold text-primary mb-2">
                                Preparo
                              </h6>

                              <div className="space-y-2">
                                {recipe.steps.map((step, stepIndex) => (
                                  <div
                                    key={`${step}-${stepIndex}`}
                                    className="flex gap-3 items-start"
                                  >
                                    <span className="w-6 h-6 rounded-full bg-primary-container/30 text-primary font-label text-xs font-bold flex items-center justify-center shrink-0">
                                      {stepIndex + 1}
                                    </span>
                                    <p className="font-body text-sm text-secondary leading-relaxed">
                                      {step}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {recipe.nutrition && (
                              <p className="font-body text-[11px] text-secondary/80 border-t border-surface-variant pt-3">
                                {recipe.nutrition}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {renderToolGroups(selectedItem, selectedItem.toolGroups)}

              {selectedItem.type === 'plate_builder' &&
                plateBuilderResult && (
                  <div
                    className={`rounded-2xl border p-5 ${
                      plateBuilderResult.ready
                        ? 'bg-primary-container/20 border-primary-container/50'
                        : 'bg-surface-bright border-surface-variant'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">
                        {plateBuilderResult.ready ? '🍽️' : '🧩'}
                      </span>
                      <h4 className="font-display text-lg font-bold text-primary">
                        {plateBuilderResult.ready
                          ? 'Seu prato está montado!'
                          : 'Monte seu prato'}
                      </h4>
                    </div>

                    {plateBuilderResult.ready ? (
                      <p className="font-body text-sm text-on-surface leading-relaxed">
                        <strong>{plateBuilderResult.protein}</strong>
                        {' + '}
                        <strong>{plateBuilderResult.carb}</strong>
                        {' + '}
                        <strong>
                          {plateBuilderResult.vegetables.join(' + ')}
                        </strong>
                        .
                      </p>
                    ) : (
                      <p className="font-body text-sm text-secondary leading-relaxed">
                        Escolha uma proteína, um acompanhamento e pelo menos
                        dois vegetais.
                      </p>
                    )}
                  </div>
                )}

              {renderChecklists(selectedItem, selectedItem.checklists)}
              {renderPlannerBlocks(selectedItem, selectedItem.plannerBlocks)}

              {selectedItem.closingMessage && (
                <div className="bg-primary-container/15 border border-primary-container/30 rounded-2xl p-5 text-center">
                  <p className="font-display text-base font-semibold text-primary leading-relaxed">
                    {selectedItem.closingMessage}
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-surface-variant bg-surface-bright flex justify-end shrink-0">
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