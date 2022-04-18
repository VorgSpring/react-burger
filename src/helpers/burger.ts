import { TBurger } from '../types/burger';
import { TIngregient } from '../types/ingredient';
import { getIngredientById } from './ingredients';

export const getIngredientIdsInBurger = (burger: TBurger): string => JSON.stringify({
  ingredients: [
    ...burger.ingredients.map(({ id }) => id),
    burger.bun,
  ],
});

export const getSummaryCost = (burger: TBurger, ingredients: TIngregient[] | null) => {
  const ingredientsPrice = burger.ingredients
    .map(({ id }) => {
      const ingredient = getIngredientById(ingredients, id);
      return ingredient?.price ?? 0;
    })
    .reduce((acc, price) => acc + price, 0);

  const bunIngredient = getIngredientById(ingredients, burger.bun);
  const bunPrice = bunIngredient?.price ?? 0 * 2;

  return ingredientsPrice + bunPrice;
};

export const setBurgerStorage = (burger: TBurger) => {
  localStorage.setItem(
    'burger',
    JSON.stringify(burger),
  );
};

export const removeBurgerStorage = () => {
  localStorage.removeItem('burger');
};

export const getBurgerStorage = () => {
  const burger = localStorage.getItem('burger');

  if (burger) {
    return JSON.parse(burger);
  }

  return null;
};
