import React from 'react';
import { Screen } from '../types';

interface BottomNavBarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentScreen, onNavigate }) => {
  // Hide bottom nav on onboarding or congratulations if desired, but keep on main views
  if (currentScreen === 'onboarding') {
    return null;
  }

  const isHomeActive = currentScreen === 'dashboard' || currentScreen === 'day_plan' || currentScreen === 'checklist' || currentScreen === 'shopping_list';
  const isProgressActive = currentScreen === 'progress';
  const isRecipesActive = currentScreen === 'recipes' || currentScreen === 'recipe_detail';
  const isLibraryActive = currentScreen === 'library';

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md border-t border-surface-variant shadow-sm md:hidden">
      <div className="flex justify-around items-center px-4 pt-2 pb-6 max-w-lg mx-auto">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 w-16 cursor-pointer ${
            isHomeActive ? 'text-primary font-bold' : 'text-on-secondary-container hover:text-primary'
          }`}
        >
          <span className={`material-symbols-outlined mb-1 ${isHomeActive ? 'icon-fill' : ''}`}>home</span>
          <span className="font-label text-[11px]">Início</span>
        </button>

        <button
          onClick={() => onNavigate('progress')}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 w-16 cursor-pointer ${
            isProgressActive ? 'text-primary font-bold' : 'text-on-secondary-container hover:text-primary'
          }`}
        >
          <span className={`material-symbols-outlined mb-1 ${isProgressActive ? 'icon-fill' : ''}`}>insights</span>
          <span className="font-label text-[11px]">Progresso</span>
        </button>

        <button
          onClick={() => onNavigate('recipes')}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 w-16 cursor-pointer ${
            isRecipesActive ? 'text-primary font-bold' : 'text-on-secondary-container hover:text-primary'
          }`}
        >
          <span className={`material-symbols-outlined mb-1 ${isRecipesActive ? 'icon-fill' : ''}`}>menu_book</span>
          <span className="font-label text-[11px]">Receitas</span>
        </button>

        <button
          onClick={() => onNavigate('library')}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 w-16 cursor-pointer ${
            isLibraryActive ? 'text-primary font-bold' : 'text-on-secondary-container hover:text-primary'
          }`}
        >
          <span className={`material-symbols-outlined mb-1 ${isLibraryActive ? 'icon-fill' : ''}`}>auto_stories</span>
          <span className="font-label text-[11px]">Biblioteca</span>
        </button>
      </div>
    </nav>
  );
};
