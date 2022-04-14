import { checkResponce } from '../helpers/api';
import { GET_INGREDIENT_API_URL } from '../constants/api';
import { TBackIngregient } from '../types/ingredient';

export const loadIngredients = () => (
  fetch(GET_INGREDIENT_API_URL)
    .then((responce) => {
      return checkResponce<{ data:  TBackIngregient[]}>(responce);
    })
);
