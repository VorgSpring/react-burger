import { checkResponce } from '../helpers/api';
import { getIngredientIdsInBurger } from '../helpers/burger';
import { getAccessToken } from '../helpers/tokens';
import { ORDER_API_URL } from '../constants/api';
import { TBurger } from '../types/burger';
import { TOrderResponce, TOrdersResponce } from '../types/order';
import { getOrderApiUrl } from '../helpers/orders/util';

export const createOrderApi = (burger: TBurger) => {
  const ingredientIds = getIngredientIdsInBurger(burger);

  return fetch(ORDER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getAccessToken(),
    },
    body: ingredientIds,
  })
    .then((responce) => checkResponce<TOrderResponce>(responce));
};

export const getOrderApi = (number: string) => (
  fetch(getOrderApiUrl(number), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((responce) => checkResponce<TOrdersResponce>(responce))
);
