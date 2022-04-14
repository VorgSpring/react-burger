import { getConstructorElementType } from './constructor';
import { ConstructorElementTypes } from '../constants/constructor';
import { RoutePaths } from '../constants/routes';
import { TBurger } from '../types/burger';
import { TBackIngregient, TIngregient } from '../types/ingredient';

type TGetIngredientPath = (id: string) => string;
export const getIngredientPath: TGetIngredientPath = (id) => `${RoutePaths.INGREDIENTS}/${id}`;

type TGetIngredientById = (ingredients: TIngregient[] | null, ingredientId: string | null) => TIngregient | null;
export const getIngredientById: TGetIngredientById = (ingredients, ingredientId) => {
  if (!ingredientId || !ingredients) {
    return null;
  }

  const ingredient = ingredients.find(({ id }) => id === ingredientId);

  return ingredient || null;
};

type TGetCountIngredientInBurger = (burger: TBurger, ingredient: TIngregient | null) => number | null;
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
