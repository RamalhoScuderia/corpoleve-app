export type Screen = 
  | 'onboarding' 
  | 'dashboard' 
  | 'day_plan' 
  | 'checklist' 
  | 'shopping_list' 
  | 'recipes' 
  | 'recipe_detail' 
  | 'progress' 
  | 'library' 
  | 'congratulations';

export interface Meal {
  id: string;
  time: string;
  title: string;
  description: string;
  recipeId?: string;
  icon: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  quote: string;
  todayTalk: string;
  mission: string;
  whyItMatters: string;
  meals: Meal[];
  recipeHighlight?: {
    title: string;
    description: string;
    recipeId?: string;
  };
  practicalTip: string;
  curiosity: string;
  marketTip: string;
  checklistItems: string[];
  evolutionText?: string;
  congratulations: string;
  nextDayExpectation?: string;
  reflection: string;
}

export interface Recipe {
  id: string;
  title: string;
  summary: string;
  category: 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Snacks';
  prepTime: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  substitutions: string[];
  steps: { title: string; text: string }[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fats: string;
  };
  featured?: boolean;
}

export interface ShoppingCategory {
  id: string;
  name: string;
  icon: string;
  items: { id: string; text: string }[];
}

export interface DailyChecklistItem {
  id: string;
  label: string;
}
