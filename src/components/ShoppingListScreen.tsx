import React, { useState, useEffect } from 'react';
import { SHOPPING_CATEGORIES } from '../data/challengeData';
import {
  getItemFromStorage,
  setItemInStorage,
  STORAGE_KEYS,
} from '../utils/storage';

export const ShoppingListScreen: React.FC = () => {
  const [openCategory, setOpenCategory] =
    useState<string>('cat-proteinas');

  const [checkedItems, setCheckedItems] = useState<
    Record<string, boolean>
  >(() =>
    getItemFromStorage<Record<string, boolean>>(
      STORAGE_KEYS.SHOPPING_LIST,
      {}
    )
  );

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.SHOPPING_LIST, checkedItems);
  }, [checkedItems]);

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? '' : id));
  };

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getCategoryIcon = (
    categoryName: string,
    originalIcon: string
  ) => {
    if (categoryName === 'Laticínios') {
      return 'local_drink';
    }

    return originalIcon;
  };

  return (
    <div className="px-6 md:px-16 py-8 max-w-3xl mx-auto w-full pb-28">
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-2">
          Lista de Compras
        </h2>

        <p className="font-body text-base text-on-surface-variant">
          Seus ingredientes essenciais para a semana.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-6">
        {SHOPPING_CATEGORIES.map((category) => {
          const isOpen = openCategory === category.id;
          const totalItems = category.items.length;

          const completedInCat = category.items.filter(
            (item) => checkedItems[item.id]
          ).length;

          const categoryIcon = getCategoryIcon(
            category.name,
            category.icon
          );

          return (
            <div
              key={category.id}
              className="spa-card bg-surface-bright rounded-xl border border-surface-variant overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0 overflow-hidden">
                    <span className="material-symbols-outlined text-2xl leading-none">
                      {categoryIcon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-on-surface">
                      {category.name}
                    </h3>

                    <span className="font-label text-xs text-secondary">
                      {completedInCat} de {totalItems} itens marcados
                    </span>
                  </div>
                </div>

                <span
                  className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-surface-variant/50 animate-fade-in">
                  <ul className="flex flex-col gap-3">
                    {category.items.map((item) => {
                      const isChecked = !!checkedItems[item.id];

                      return (
                        <li
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className="flex items-center gap-4 py-2 border-b border-surface-container last:border-0 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="square-checkbox"
                          />

                          <span
                            className={`font-body text-base flex-grow transition-all ${
                              isChecked
                                ? 'line-through text-secondary/70'
                                : 'text-on-surface font-normal'
                            }`}
                          >
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};