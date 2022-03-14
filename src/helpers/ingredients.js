import { getConstructorElementType } from './constructor';
import { ConstructorElementTypes } from '../constants/constructor';
import { RoutePaths } from '../constants/routes';

export const getIngredientPath = (id) => `${RoutePaths.INGREDIENTS}/${id}`;

export const getIngredientById = (ingredients, ingredientId) => {
  if (!ingredientId || !ingredients) {
    return null;
  }

  return ingredients.find(({ id }) => id === ingredientId);
};

export const getCountIngredientInBurger = (burger, ingredient) => {
  const { bun, ingredients } = burger;
  const { type, id: ingredientId } = ingredient;

  if (type === ConstructorElementTypes.BUN) {
    return bun === ingredientId ? 1 : 0;
  }

  return ingredients.filter(({ id }) => id === ingredientId).length;
};

export const getPreparedIngredients = (ingredients) => (
  ingredients.map((
    {
      _id,
      type,
      image,
      // eslint-disable-next-line camelcase
      image_large,
      name,
      price,
      calories,
      proteins,
      fat,
      carbohydrates,
    },
  ) => ({
    id: _id,
    type,
    constructorType: getConstructorElementType(type),
    image,
    imageLarge: image_large,
    name,
    price,
    structure: {
      calories,
      proteins,
      fat,
      carbohydrates,
    },
  }))
);
