import { getConstructorElementType } from './constructor';
import { ConstructorElementTypes } from '../constants/constructor';
import { RoutePaths } from '../constants/routes';
import { TBurger } from '../types/burger';
import { TBackIngregient, TIngregient } from '../types/ingredient';
import { IngredientsTypeNames } from '../constants/ingredients';

type TGetIngredientPath = (id: string) => string;
export const getIngredientPath: TGetIngredientPath = (id) => `${RoutePaths.INGREDIENTS}/${id}`;

type TGetIngredientById = (
  ingredients: TIngregient[] | null, ingredientId: string | null,
) => TIngregient | null;
export const getIngredientById: TGetIngredientById = (ingredients, ingredientId) => {
  if (!ingredientId || !ingredients) {
    return null;
  }

  const ingredient = ingredients.find(({ id }) => id === ingredientId);

  return ingredient || null;
};

type TGetCountIngredientInBurger = (
  burger: TBurger, ingredient: TIngregient | null,
) => number | null;
export const getCountIngredientInBurger: TGetCountIngredientInBurger = (burger, ingredient) => {
  if (ingredient === null) {
    return null;
  }

  const { bun, ingredients } = burger;
  const { type, id: ingredientId } = ingredient;

  if (type === ConstructorElementTypes.BUN) {
    return bun === ingredientId ? 1 : 0;
  }

  return ingredients.filter(({ id }) => id === ingredientId).length;
};

type TGetPreparedIngredients = (ingredients: TBackIngregient[]) => TIngregient[];
export const getPreparedIngredients: TGetPreparedIngredients = (ingredients) => (
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

type TgetIngredientPriceByIds =
  (ids: string[] | null, ingregients: TIngregient[] | null) => number | null;
export const getIngredientPriceByIds: TgetIngredientPriceByIds = (ids, ingregients) => {
  if (ingregients === null || ids === null) {
    return null;
  }

  const ingregientsMap = ingregients.reduce((acc, ingregient) => {
    const { id, price, type } = ingregient;
    acc[id] = type === IngredientsTypeNames.INGREDIENT_BUN_TYPE ? price * 2 : price;
    return acc;
  }, {} as { [K in string]: number });

  return ids.reduce((totalPrice, id) => {
    const price = ingregientsMap[id];

    if (price) {
      return totalPrice + price;
    }

    return totalPrice;
  }, 0);
};
