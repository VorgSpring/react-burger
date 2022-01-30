import { getConstructorElementType } from './constructor';

export const getIngredientById = (ingredients, ingredientId) => {
  if (!ingredientId) {
    return null;
  }

  return ingredients.find(({ id }) => id === ingredientId);
};

export const getPreparedIngredients = (ingredients) => (
  ingredients.map((
    {
      _id,
      type,
      count,
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
    count,
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
