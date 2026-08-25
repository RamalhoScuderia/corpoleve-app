import { useState, useEffect } from 'react';
import { Screen } from './types';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { OnboardingScreen } from './components/OnboardingScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { DayPlanScreen } from './components/DayPlanScreen';
import { ChecklistScreen } from './components/ChecklistScreen';
import { ShoppingListScreen } from './components/ShoppingListScreen';
import { RecipeListScreen } from './components/RecipeListScreen';
import { RecipeDetailScreen } from './components/RecipeDetailScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { BibliotecaScreen } from './components/BibliotecaScreen';
import { CongratulationsScreen } from './components/CongratulationsScreen';
import {
  getItemFromStorage,
  setItemInStorage,
  STORAGE_KEYS,
} from './utils/storage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(
    'bowl-quinoa-batata-doce'
  );

  // Guarda de qual tela a receita foi aberta
  const [recipeReturnScreen, setRecipeReturnScreen] =
    useState<Screen>('recipes');

  // Local state persistence via LocalStorage
  const [completedDays, setCompletedDays] = useState<number[]>(() =>
    getItemFromStorage<number[]>(STORAGE_KEYS.COMPLETED_DAYS, [])
  );

  const [dailyChecklists, setDailyChecklists] = useState<
    Record<number, string[]>
  >(() =>
    getItemFromStorage<Record<number, string[]>>(
      STORAGE_KEYS.DAILY_CHECKLISTS,
      {}
    )
  );

  const [waterGoal, setWaterGoal] = useState<number>(() =>
    getItemFromStorage<number>(STORAGE_KEYS.WATER_GOAL, 3.5)
  );

  const [userWeight, setUserWeight] = useState<number | null>(() =>
    getItemFromStorage<number | null>(STORAGE_KEYS.USER_WEIGHT, null)
  );

  const [completedChecklistsCount, setCompletedChecklistsCount] =
    useState<number>(() =>
      getItemFromStorage<number>(STORAGE_KEYS.CHECKLISTS_COUNT, 0)
    );

  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>(() =>
    getItemFromStorage<string[]>(STORAGE_KEYS.FAVORITES, [
      'bowl-quinoa-batata-doce',
    ])
  );

  // Sync state changes automatically to LocalStorage
  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.COMPLETED_DAYS, completedDays);
  }, [completedDays]);

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.DAILY_CHECKLISTS, dailyChecklists);
  }, [dailyChecklists]);

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.WATER_GOAL, waterGoal);
  }, [waterGoal]);

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.USER_WEIGHT, userWeight);
  }, [userWeight]);

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.CHECKLISTS_COUNT, completedChecklistsCount);
  }, [completedChecklistsCount]);

  useEffect(() => {
    setItemInStorage(STORAGE_KEYS.FAVORITES, favoriteRecipes);
  }, [favoriteRecipes]);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, selectedDay, selectedRecipeId]);

  const handleStartChallenge = () => {
    setSelectedDay(1);
    setCurrentScreen('dashboard');
  };

  const handleOpenDayPlan = (dayNum: number) => {
    setSelectedDay(dayNum);
    setCurrentScreen('day_plan');
  };

  const handleCompleteDay = (dayNum: number) => {
    if (!completedDays.includes(dayNum)) {
      setCompletedDays((prev) => [...prev, dayNum]);
    }

    if (dayNum === 14) {
      setCurrentScreen('congratulations');
    } else {
      const nextDay = Math.min(14, dayNum + 1);
      setSelectedDay(nextDay);
    }
  };

  // Agora registra de onde a receita foi aberta
  const handleOpenRecipe = (recipeId: string) => {
    setRecipeReturnScreen(currentScreen);
    setSelectedRecipeId(recipeId);
    setCurrentScreen('recipe_detail');
  };

  const handleToggleFavorite = (recipeId: string) => {
    setFavoriteRecipes((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleSaveChecklist = (
    checkedItems: string[],
    dayNum: number
  ) => {
    setDailyChecklists((prev) => {
      const updated = { ...prev, [dayNum]: checkedItems };
      setCompletedChecklistsCount(Object.keys(updated).length);
      return updated;
    });
  };

  const handleUpdateWaterGoal = (newGoal: number) => {
    setWaterGoal(newGoal);
  };

  const handleResetProgress = () => {
    setCompletedDays([]);
    setDailyChecklists({});
    setCompletedChecklistsCount(0);
    setSelectedDay(1);
    setCurrentScreen('dashboard');
  };

  const renderContent = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onStart={handleStartChallenge} />;

      case 'dashboard':
        return (
          <DashboardScreen
            currentDay={selectedDay}
            completedDaysCount={completedDays.length}
            onNavigate={setCurrentScreen}
            onOpenDayPlan={handleOpenDayPlan}
          />
        );

      case 'day_plan':
        return (
          <DayPlanScreen
            dayNumber={selectedDay}
            completedDays={completedDays}
            onCompleteDay={handleCompleteDay}
            onOpenRecipe={handleOpenRecipe}
            onChangeDay={setSelectedDay}
          />
        );

      case 'checklist':
        return (
          <ChecklistScreen
            currentDay={selectedDay}
            savedItems={dailyChecklists[selectedDay] || ['water', 'meals']}
            waterGoal={waterGoal}
            userWeight={userWeight}
            onSaveProgress={handleSaveChecklist}
            onUpdateWaterGoal={handleUpdateWaterGoal}
            onUpdateWeight={setUserWeight}
          />
        );

      case 'shopping_list':
        return <ShoppingListScreen />;

      case 'recipes':
        return (
          <RecipeListScreen
            onOpenRecipe={handleOpenRecipe}
            favoriteRecipes={favoriteRecipes}
            onToggleFavorite={handleToggleFavorite}
          />
        );

      case 'recipe_detail':
        return (
          <RecipeDetailScreen
            recipeId={selectedRecipeId}
            onBack={() => setCurrentScreen(recipeReturnScreen)}
            isFavorite={favoriteRecipes.includes(selectedRecipeId)}
            onToggleFavorite={handleToggleFavorite}
          />
        );

      case 'progress':
        return (
          <ProgressScreen
            completedDays={completedDays}
            currentDay={selectedDay}
            completedChecklistsCount={completedChecklistsCount}
            favoriteRecipesCount={favoriteRecipes.length}
            onOpenDayPlan={handleOpenDayPlan}
            onResetProgress={handleResetProgress}
          />
        );

      case 'library':
        return (
          <BibliotecaScreen
            onNavigate={setCurrentScreen}
            completedDays={completedDays}
            onOpenRecipe={handleOpenRecipe}
          />
        );

      case 'congratulations':
        return <CongratulationsScreen onNavigate={setCurrentScreen} />;

      default:
        return (
          <DashboardScreen
            currentDay={selectedDay}
            completedDaysCount={completedDays.length}
            onNavigate={setCurrentScreen}
            onOpenDayPlan={handleOpenDayPlan}
          />
        );
    }
  };

  const showStandardHeader =
    currentScreen !== 'onboarding' &&
    currentScreen !== 'congratulations' &&
    currentScreen !== 'recipe_detail';

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body">
      {showStandardHeader && (
        <Header
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          onBack={() => {
            if (
              currentScreen === 'day_plan' ||
              currentScreen === 'checklist' ||
              currentScreen === 'shopping_list'
            ) {
              setCurrentScreen('dashboard');
            } else {
              setCurrentScreen('dashboard');
            }
          }}
        />
      )}

      <main className="flex-grow">{renderContent()}</main>

      {currentScreen !== 'onboarding' &&
        currentScreen !== 'congratulations' && (
          <BottomNavBar
            currentScreen={currentScreen}
            onNavigate={setCurrentScreen}
          />
        )}
    </div>
  );
}