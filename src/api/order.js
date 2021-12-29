import { getIngredientIds } from '../helpers/api';
import { CREATE_ORDER_API_URL } from '../constants/api';

export const createOrder = (burger) => {
  const ingredientIds = getIngredientIds(burger);

  return fetch(CREATE_ORDER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: ingredientIds,
  }).then((responce) => responce.json());
};
