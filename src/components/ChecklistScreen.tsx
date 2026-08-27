import React, { useState, useEffect } from 'react';
import { DAILY_CHECKLIST_ITEMS } from '../data/challengeData';

interface ChecklistScreenProps {
  onSaveProgress: (checkedItems: string[], dayNum: number) => void;
  savedItems?: string[];
  currentDay?: number;
  waterGoal?: number;
  userWeight?: number | null;
  onUpdateWaterGoal?: (goal: number) => void;
  onUpdateWeight?: (weight: number) => void;
}

export const ChecklistScreen: React.FC<ChecklistScreenProps> = ({
  onSaveProgress,
  savedItems = [],
  currentDay = 1,
  waterGoal = 3.5,
  userWeight = null,
  onUpdateWaterGoal,
  onUpdateWeight,
}) => {
  const [checkedIds, setCheckedIds] = useState<string[]>(savedItems);
  const [currentWaterGoal, setCurrentWaterGoal] = useState<number>(waterGoal);
  const [showWeightInput, setShowWeightInput] = useState<boolean>(!userWeight);
  const [weightInput, setWeightInput] = useState<string>(
    userWeight ? String(userWeight) : '70'
  );
  const [showSavedToast, setShowSavedToast] = useState(false);

  useEffect(() => {
    setCheckedIds(savedItems);
  }, [currentDay, savedItems]);

  useEffect(() => {
    setCurrentWaterGoal(waterGoal);
  }, [waterGoal]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleCalculateAndSaveWeight = () => {
    const parsedWeight = parseFloat(weightInput);

    if (
      !isNaN(parsedWeight) &&
      parsedWeight > 20 &&
      parsedWeight < 250
    ) {
      const calculatedGoal = Number((parsedWeight / 20).toFixed(1));

      setCurrentWaterGoal(calculatedGoal);

      if (onUpdateWeight) {
        onUpdateWeight(parsedWeight);
      }

      if (onUpdateWaterGoal) {
        onUpdateWaterGoal(calculatedGoal);
      }

      setShowWeightInput(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    onSaveProgress(checkedIds, currentDay);

    if (onUpdateWaterGoal) {
      onUpdateWaterGoal(currentWaterGoal);
    }

    setShowSavedToast(true);

    setTimeout(() => {
      setShowSavedToast(false);
    }, 3000);
  };

  const previewGoal = () => {
    const w = parseFloat(weightInput);

    if (!isNaN(w) && w > 20) {
      return (w / 20).toFixed(1);
    }

    return null;
  };

  return (
    <div className="flex-grow px-6 py-8 md:px-16 max-w-2xl mx-auto w-full pb-28">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="font-label text-xs uppercase text-primary font-semibold tracking-widest bg-primary-container/20 border border-primary-container/30 px-3 py-1 rounded-full inline-block mb-2">
          Dia {currentDay} de 14
        </span>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
          Checklist Diário
        </h2>

        <p className="font-body text-base text-secondary">
          Acompanhe seus pequenos passos para um grande bem-estar.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-surface border border-surface-variant rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgb(143,188,143,0.06)]">
        {/* Meta de Água Personalizada */}
        {showWeightInput ? (
          <div className="mb-6 p-5 bg-surface-bright border border-primary-container/50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  scale
                </span>

                <h3 className="font-display text-base font-bold text-primary">
                  Qual é o seu peso?
                </h3>
              </div>

              {userWeight && (
                <button
                  type="button"
                  onClick={() => setShowWeightInput(false)}
                  className="text-secondary text-xs hover:underline cursor-pointer"
                >
                  Cancelar
                </button>
              )}
            </div>

            <p className="font-body text-xs text-secondary">
              Digite seu peso em kg para calcularmos sua meta de hidratação ideal.
            </p>

            <div className="flex gap-2 items-center">
              <div className="relative flex-grow">
                <input
                  type="number"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                  placeholder="Ex: 70"
                  className="w-full bg-surface border border-surface-variant rounded-xl pl-4 pr-10 py-3 font-body text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label text-xs font-semibold text-secondary">
                  kg
                </span>
              </div>

              <button
                type="button"
                onClick={handleCalculateAndSaveWeight}
                className="bg-primary-container text-on-primary-container font-label text-sm font-semibold px-5 py-3 rounded-xl whitespace-nowrap cursor-pointer hover:bg-primary hover:text-on-primary transition-colors shadow-xs"
              >
                Salvar Meta
              </button>
            </div>

            {previewGoal() && (
              <p className="font-label text-xs text-primary font-semibold flex items-center gap-1 pt-1">
                <span className="material-symbols-outlined text-sm">
                  water_drop
                </span>

                <span>
                  Meta calculada: {previewGoal()} Litros / dia
                </span>
              </p>
            )}
          </div>
        ) : (
          <div className="mb-6 p-4 bg-surface-bright border border-surface-variant rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    water_drop
                  </span>
                </div>

                <div>
                  <span className="font-label text-xs uppercase text-secondary font-semibold block">
                    Meta Diária de Água
                    {userWeight ? ` (${userWeight} kg)` : ''}
                  </span>

                  <span className="font-display text-base font-bold text-on-surface">
                    {currentWaterGoal.toFixed(1)} Litros / dia
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowWeightInput(true)}
                className="text-primary hover:text-primary-container font-label text-xs font-semibold underline cursor-pointer shrink-0"
              >
                Alterar Peso
              </button>
            </div>

            <p className="font-body text-[11px] text-secondary/80 border-t border-surface-variant/40 pt-2 leading-tight">
              Meta calculada considerando aproximadamente 1 litro para cada 20 kg de peso corporal.
            </p>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          {DAILY_CHECKLIST_ITEMS.map((item, index) => {
            const isChecked = checkedIds.includes(item.id);

            const displayLabel =
              item.id === 'water'
                ? 'Cumpri minha meta de hidratação do dia'
                : item.label;

            return (
              <React.Fragment key={item.id}>
                {index > 0 && (
                  <div className="h-px bg-surface-variant w-full opacity-50" />
                )}

                <label
                  onClick={() => toggleItem(item.id)}
                  className="checklist-item flex items-center justify-between p-4 rounded-lg cursor-pointer border border-transparent hover:border-surface-variant transition-colors select-none"
                >
                  <span
                    className={`font-body text-base md:text-lg transition-all ${
                      isChecked
                        ? 'text-primary font-medium'
                        : 'text-on-surface'
                    }`}
                  >
                    {displayLabel}
                  </span>

                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="custom-checkbox focus:ring-primary focus:ring-offset-background focus:outline-none"
                  />
                </label>
              </React.Fragment>
            );
          })}

          {/* Toast */}
          {showSavedToast && (
            <div className="p-3 bg-primary-container/30 border border-primary-container text-on-primary-container rounded-lg text-center text-sm font-medium animate-fade-in">
              ✨ Progresso do Dia {currentDay} salvo com sucesso!
            </div>
          )}

          {/* Save Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label text-base font-semibold py-4 rounded-full transition-colors active:scale-95 duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
            >
              <span className="material-symbols-outlined icon-fill">
                check_circle
              </span>

              <span>Salvar progresso do Dia {currentDay}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};