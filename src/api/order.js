import { getBodyForCreateOrders } from '../helpers/api';
import { CREATE_ORDER_API_URL } from '../constants/api';

export const createOrder = (burger) => {
  const body = getBodyForCreateOrders(burger);

  return fetch(CREATE_ORDER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body,
  }).then((responce) => responce.json());
};
