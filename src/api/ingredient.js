import { checkResponce } from '../helpers/api';
import { GET_INGREDIENT_API_URL } from '../constants/api';

export const loadIngredients = () => (
  fetch(GET_INGREDIENT_API_URL)
    .then((responce) => responce.json())
    .then(checkResponce)
);
