import { checkResponce } from '../helpers/api';
import { getIngredientIdsInBurger } from '../helpers/burger';
import { getAccessToken } from '../helpers/tokens';
import { CREATE_ORDER_API_URL } from '../constants/api';
import { TBurger } from '../types/burger';
import { TOrderResponce } from '../types/order';

export const createOrderApi = (burger: TBurger) => {
  const ingredientIds = getIngredientIdsInBurger(burger);

  return fetch(CREATE_ORDER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getAccessToken(),
    },
    body: ingredientIds,
  })
    .then((responce) => checkResponce<TOrderResponce>(responce));
};
