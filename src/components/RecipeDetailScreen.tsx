import React, { useState } from 'react';
import { Recipe } from '../types';
import { RECIPES } from '../data/challengeData';
import { EXTRA_RECIPES } from '../data/extraRecipes';

interface RecipeDetailScreenProps {
  recipeId: string;
  onBack: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({
  recipeId,
  onBack,
  isFavorite = false,
  onToggleFavorite
}) => {
  const [fav, setFav] = useState(isFavorite);
  const allRecipes = [...RECIPES, ...EXTRA_RECIPES];
  const recipe: Recipe = allRecipes.find(r => r.id === recipeId) || RECIPES[0];

  const handleFav = () => {
    setFav(!fav);
    if (onToggleFavorite) {
      onToggleFavorite(recipe.id);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-28">
      {/* Detail Header Bar */}
      <div className="sticky top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-surface-variant flex justify-between items-center px-6 h-16 transition-colors">
        <button
          onClick={onBack}
          aria-label="Voltar"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-200 text-primary cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-display text-xl font-bold text-primary">Corpo Leve</span>
        <button
          onClick={handleFav}
          aria-label="Favoritar"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-200 text-primary cursor-pointer"
        >
          <span className={`material-symbols-outlined ${fav ? 'icon-fill text-red-500' : ''}`}>
            {fav ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>

      <main className="w-full">
        {/* Hero Image */}
        <div className="w-full h-72 md:h-96 bg-surface-container overflow-hidden relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="px-6 md:px-16 -mt-8 relative z-10">
          {/* Title & Meta Card */}
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(143,188,143,0.08)] border border-surface-variant mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-container/20 text-on-primary-container font-label text-xs font-semibold">
                {recipe.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-xs font-semibold">
                {recipe.prepTime}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-xs font-semibold">
                {recipe.difficulty}
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-on-background mb-3">
              {recipe.title}
            </h1>
            <p className="font-body text-base text-secondary leading-relaxed">
              {recipe.summary}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Column: Ingredients & Substitutions */}
            <div className="md:col-span-1 space-y-8">
              <section className="bg-surface p-6 rounded-2xl border border-surface-variant">
                <h2 className="font-display text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">shopping_basket</span>
                  Ingredientes
                </h2>
                <ul className="space-y-4 font-body text-sm text-on-surface">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5 icon-fill">
                        check_circle
                      </span>
                      <span className="leading-snug">{ing}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {recipe.substitutions.length > 0 && (
                <section className="bg-surface-container-low rounded-2xl p-6 border border-surface-variant">
                  <h3 className="font-label text-xs text-on-surface-variant mb-3 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">swap_horiz</span>
                    Substituições
                  </h3>
                  <p className="font-body text-xs text-secondary mb-3">
                    Sinta-se livre para adaptar esta receita às suas preferências:
                  </p>
                  <ul className="space-y-2 font-body text-xs text-secondary">
                    {recipe.substitutions.map((sub, idx) => (
                      <li key={idx}>• {sub}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column: Steps & Nutrition */}
            <div className="md:col-span-2 space-y-8">
              <section className="bg-surface p-6 md:p-8 rounded-2xl border border-surface-variant">
                <h2 className="font-display text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">format_list_numbered</span>
                  Modo de Preparo
                </h2>
                <div className="space-y-6">
                  {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label text-sm font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-label text-base font-semibold text-on-surface mb-1">
                          {step.title}
                        </h4>
                        <p className="font-body text-sm text-secondary leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nutrition Info Card */}
              <section className="bg-surface rounded-2xl p-6 border border-surface-variant">
                <h3 className="font-label text-xs text-on-surface-variant mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">monitor_weight</span>
                  Informação Nutricional
                </h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-display text-2xl font-bold text-primary mb-0.5">
                      {recipe.nutrition.calories}
                    </div>
                    <div className="font-label text-xs text-secondary">Calorias</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-primary mb-0.5">
                      {recipe.nutrition.protein}
                    </div>
                    <div className="font-label text-xs text-secondary">Proteína</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-primary mb-0.5">
                      {recipe.nutrition.carbs}
                    </div>
                    <div className="font-label text-xs text-secondary">Carboidratos</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-primary mb-0.5">
                      {recipe.nutrition.fats}
                    </div>
                    <div className="font-label text-xs text-secondary">Gorduras</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
