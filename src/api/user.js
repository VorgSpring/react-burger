import { checkResponce } from '../helpers/api';
import { USER_API_URL } from '../constants/api';

export const getUserApi = () => (
  fetch(USER_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.accessToken,
    },
  })
    .then((responce) => responce.json())
    .then(checkResponce)
);
