import React from 'react';
import { Screen } from '../types';
import { USER_PROFILE_IMAGE } from '../data/challengeData';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onBack,
  showBack = true
}) => {
  const isMainTab = ['dashboard', 'progress', 'recipes', 'library'].includes(currentScreen);

  return (
    <header className="w-full sticky top-0 bg-background/95 backdrop-blur-md border-b border-surface-variant z-40">
      <div className="flex justify-between items-center px-6 md:px-16 h-16 w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          {showBack && !isMainTab && (
            <button
              onClick={onBack || (() => onNavigate('dashboard'))}
              aria-label="Voltar"
              className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-2 -ml-2 active:scale-95 duration-200 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <button 
            onClick={() => onNavigate('dashboard')} 
            className="font-display text-2xl font-bold text-primary hover:opacity-90 transition-opacity text-left cursor-pointer"
          >
            Corpo Leve
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`font-label text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              currentScreen === 'dashboard' ? 'text-primary font-bold bg-surface-container-low' : 'text-secondary hover:text-primary'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onNavigate('progress')}
            className={`font-label text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              currentScreen === 'progress' ? 'text-primary font-bold bg-surface-container-low' : 'text-secondary hover:text-primary'
            }`}
          >
            Progresso
          </button>
          <button
            onClick={() => onNavigate('recipes')}
            className={`font-label text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              currentScreen === 'recipes' || currentScreen === 'recipe_detail' ? 'text-primary font-bold bg-surface-container-low' : 'text-secondary hover:text-primary'
            }`}
          >
            Receitas
          </button>
          <button
            onClick={() => onNavigate('library')}
            className={`font-label text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              currentScreen === 'library' ? 'text-primary font-bold bg-surface-container-low' : 'text-secondary hover:text-primary'
            }`}
          >
            Biblioteca
          </button>
        </nav>

        {/* Profile Pic */}
        <div 
          onClick={() => onNavigate('progress')}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-variant flex-shrink-0 cursor-pointer hover:border-primary transition-colors"
        >
          <img
            src={USER_PROFILE_IMAGE}
            alt="Foto do Perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
