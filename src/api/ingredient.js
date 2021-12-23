import { GET_INGREDIENT_API_URL } from '../constants/api';

export const getIngredient = () => (
  fetch(GET_INGREDIENT_API_URL)
    .then((responce) => responce.json())
);
