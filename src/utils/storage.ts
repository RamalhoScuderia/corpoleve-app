export const STORAGE_KEYS = {
  COMPLETED_DAYS: 'corpo_leve_completed_days',
  DAILY_CHECKLISTS: 'corpo_leve_daily_checklists',
  DAY_ACHIEVEMENTS: 'corpo_leve_day_achievements',
  WATER_GOAL: 'corpo_leve_water_goal',
  USER_WEIGHT: 'corpo_leve_user_weight',
  CHECKLISTS_COUNT: 'corpo_leve_checklists_count',
  FAVORITES: 'corpo_leve_favorites',
  SHOPPING_LIST: 'corpo_leve_shopping_list',
  DAY7_CELEBRATION_SEEN: 'corpo_leve_day7_celebration_seen',
} as const;

export function getItemFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null || saved === undefined) return defaultValue;
    return JSON.parse(saved) as T;
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
    return defaultValue;
  }
}

export function setItemInStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing key "${key}" to localStorage:`, error);
  }
}
