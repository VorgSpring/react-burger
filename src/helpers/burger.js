import { INGREDIENT_BUN_TYPE } from '../constants/ingredients';
import { BurgerIngredients } from '../constants/burger';

/**
 * Временная функция создания бургера
 * чтобы было чего вернуть в BurgerConstructor
 * @param {Object} items
 * @returns {Object}
 */
export const getMainBurger = (items) => {
  const bun = items.filter((item) => item.type === INGREDIENT_BUN_TYPE)[0];
  const ingredients = items.filter((item) => (
    item.type !== INGREDIENT_BUN_TYPE && BurgerIngredients.includes(item.name)
  ));

  return { bun, ingredients };
};

export const getSum = (burger) => (
  burger.ingredients.reduce(
    (acc, item) => acc + item.price, 0,
  ) + ((burger.bun ? burger.bun.price : 0) * 2)
);
