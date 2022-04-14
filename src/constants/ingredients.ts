import { TIngredientStructure } from '../types/ingredient';

export enum IngredientsTypes {
  INGREDIENT_BUN_TYPE = 'INGREDIENT_BUN_TYPE',
  INGREDIENT_MAIN_TYPE = 'INGREDIENT_MAIN_TYPE',
  INGREDIENT_SAUCE_TYPE = 'INGREDIENT_SAUCE_TYPE',
}

export enum IngredientsTypeNames {
  INGREDIENT_BUN_TYPE = 'bun',
  INGREDIENT_MAIN_TYPE = 'main',
  INGREDIENT_SAUCE_TYPE = 'sauce',
}

export enum IngredientsTypesData {
  INGREDIENT_BUN_TYPE = 'Булки',
  INGREDIENT_MAIN_TYPE = 'Основы',
  INGREDIENT_SAUCE_TYPE ='Соусы',
}

export const IngredientStructure: TIngredientStructure = {
  calories: 'Калории,ккал',
  proteins: 'Белки, г',
  fat: 'Жиры, г',
  carbohydrates: 'Углеводы, г',
};
