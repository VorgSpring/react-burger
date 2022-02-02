import { getConstructorElementType } from './constructor';
import { ConstructorElementTypes } from '../constants/constructor';

export const getIngredientById = (ingredients, ingredientId) => {
  if (!ingredientId) {
    return null;
  }

  return ingredients.find(({ id }) => id === ingredientId);
};

export const getCountIngredientinBurger = (type, ingredientId, burger) => {
  switch (type) {
    case ConstructorElementTypes.BUN:
      return burger.bun === ingredientId ? 1 : 0;

    case ConstructorElementTypes.INGEDIENTS:
      return burger.ingredients.filter(({ id }) => id === ingredientId).length;

    default:
      return null;
  }
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
