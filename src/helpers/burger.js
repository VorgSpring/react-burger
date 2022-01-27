import { getIngredientById } from './ingredients';

export const getSum = (burger, ingredients) => {
  let ingredientsPrice = 0;
  let bunPrice = 0;

  if (burger.ingredients) {
    ingredientsPrice = burger.ingredients
      .map((ingredientId) => getIngredientById(ingredients, ingredientId).price)
      .reduce((acc, price) => acc + price, 0);
  }

  if (burger.bun) {
    bunPrice = getIngredientById(ingredients, burger.bun).price * 2;
  }

  return ingredientsPrice + bunPrice;
};
