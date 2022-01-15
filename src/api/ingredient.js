import { GET_INGREDIENT_API_URL } from '../constants/api';

export const loadIngredients = () => (
  fetch(GET_INGREDIENT_API_URL)
    .then((responce) => responce.json())
    .then(({ success, data }) => {
      if (!success) {
        throw new Error('Что-то пошло не так!');
      }

      return data;
    })
);
