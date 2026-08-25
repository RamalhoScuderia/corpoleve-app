import React, { useState } from 'react';
import { RECIPES } from '../data/challengeData';
import { EXTRA_RECIPES } from '../data/extraRecipes';

const ALL_RECIPES = [...RECIPES, ...EXTRA_RECIPES];

interface RecipeListScreenProps {
  onOpenRecipe: (recipeId: string) => void;
  favoriteRecipes?: string[];
  onToggleFavorite?: (recipeId: string) => void;
}

export const RecipeListScreen: React.FC<RecipeListScreenProps> = ({
  onOpenRecipe,
  favoriteRecipes = [],
  onToggleFavorite,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = [
    'Todas',
    '❤️ Minhas Favoritas',
    'Café da Manhã',
    'Almoço',
    'Jantar',
    'Lanche',
    'SOS - Até 10 Min',
  ];

  const filteredRecipes = ALL_RECIPES.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((i) => i.toLowerCase().includes(searchTerm.toLowerCase()));

    if (activeCategory === '❤️ Minhas Favoritas') {
      return matchesSearch && favoriteRecipes.includes(recipe.id);
    }

    const matchesCategory =
      activeCategory === 'Todas' || recipe.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const isFavoritingTab = activeCategory === '❤️ Minhas Favoritas';
  const featuredRecipe = !isFavoritingTab
    ? filteredRecipes.find((r) => r.featured) || filteredRecipes[0]
    : null;
  const otherRecipes = featuredRecipe
    ? filteredRecipes.filter((r) => r.id !== featuredRecipe.id)
    : filteredRecipes;

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-16 pt-8 pb-28">
      {/* Search & Header Section */}
      <section className="mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-primary">Receitas</h2>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar ingredientes, pratos..."
            className="w-full bg-surface-container-low border border-surface-variant rounded-full py-4 pl-14 pr-6 font-body text-base text-on-surface focus:ring-2 focus:ring-primary-container outline-none transition-shadow placeholder:text-on-surface-variant"
          />
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary hover:text-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-label text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                    : 'bg-surface-container-low text-secondary border border-surface-variant hover:bg-surface-variant'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Empty State for Favoritas or Search */}
      {filteredRecipes.length === 0 ? (
        isFavoritingTab ? (
          <div className="text-center py-16 px-6 bg-surface rounded-[24px] border border-surface-variant max-w-md mx-auto shadow-xs">
            <span className="text-4xl mb-3 block">🤍</span>
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Você ainda não possui receitas favoritas.
            </h3>
            <p className="font-body text-sm text-secondary leading-relaxed">
              Toque no ❤️ das receitas que mais gostar para encontrá-las rapidamente sempre que precisar.
            </p>
          </div>
        ) : (
          <div className="text-center py-16 bg-surface rounded-2xl border border-surface-variant">
            <span className="material-symbols-outlined text-4xl text-secondary mb-2">search_off</span>
            <p className="font-body text-secondary font-medium">Nenhuma receita encontrada para a busca.</p>
          </div>
        )
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Recipe Card (if available and not on favorites tab) */}
          {featuredRecipe && (
            <article
              onClick={() => onOpenRecipe(featuredRecipe.id)}
              className="lg:col-span-2 bg-surface border border-surface-variant rounded-[24px] overflow-hidden ambient-shadow flex flex-col md:flex-row group cursor-pointer hover:shadow-md transition-all relative"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden shrink-0">
                <img
                  src={featuredRecipe.image}
                  alt={featuredRecipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                  <span className="font-label text-xs font-semibold text-primary">{featuredRecipe.prepTime}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onToggleFavorite) onToggleFavorite(featuredRecipe.id);
                  }}
                  aria-label="Favoritar"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/85 backdrop-blur-md flex items-center justify-center border border-surface-variant shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                >
                  <span
                    className={`material-symbols-outlined text-xl ${
                      favoriteRecipes.includes(featuredRecipe.id)
                        ? 'icon-fill text-red-500'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {favoriteRecipes.includes(featuredRecipe.id) ? 'favorite' : 'favorite_border'}
                  </span>
                </button>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <span className="text-primary-container font-label text-xs font-bold uppercase tracking-wider mb-2 block">
                    Destaque da Semana
                  </span>
                  <h3 className="font-display text-2xl font-bold mb-3 text-primary group-hover:text-primary-container transition-colors">
                    {featuredRecipe.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {featuredRecipe.summary}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-label text-xs text-secondary mb-2 uppercase tracking-wider font-semibold">
                      Ingredientes Chave
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredRecipe.ingredients.slice(0, 3).map((ing, idx) => (
                        <span
                          key={idx}
                          className="bg-surface-container-low text-on-surface text-xs px-3 py-1 rounded-full border border-surface-variant"
                        >
                          {ing.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenRecipe(featuredRecipe.id);
                  }}
                  className="w-full md:w-auto bg-primary-container text-on-primary-container font-label text-sm font-semibold py-3 px-6 rounded-full hover:bg-primary hover:text-on-primary transition-all flex justify-center items-center gap-2 cursor-pointer"
                >
                  <span>🍳 Ver Receita</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </article>
          )}

          {/* Standard Recipe Cards */}
          {otherRecipes.map((recipe) => {
            const isFav = favoriteRecipes.includes(recipe.id);
            return (
              <article
                key={recipe.id}
                onClick={() => onOpenRecipe(recipe.id)}
                className="bg-surface border border-surface-variant rounded-[24px] overflow-hidden ambient-shadow flex flex-col group cursor-pointer hover:shadow-md transition-all relative"
              >
                <div className="w-full h-48 relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-surface-variant">
                    <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                    <span className="font-label text-xs font-semibold text-primary">{recipe.prepTime}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleFavorite) onToggleFavorite(recipe.id);
                    }}
                    aria-label="Favoritar"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/85 backdrop-blur-md flex items-center justify-center border border-surface-variant shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${
                        isFav ? 'icon-fill text-red-500' : 'text-on-surface-variant'
                      }`}
                    >
                      {isFav ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-primary group-hover:text-primary-container transition-colors leading-tight">
                      {recipe.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                      {recipe.summary}
                    </p>
                    <div className="mb-6">
                      <span className="text-secondary text-xs">
                        {recipe.ingredients.slice(0, 3).join(' • ')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenRecipe(recipe.id);
                    }}
                    className="w-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-container font-label text-sm font-semibold py-3 rounded-full transition-all flex justify-center items-center gap-1 cursor-pointer"
                  >
                    <span>🍳 Ver Receita</span>
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};