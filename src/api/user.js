import { checkResponce } from '../helpers/api';
import { USER_API_URL } from '../constants/api';
import { getAccessToken } from '../helpers/tokens';

export const getUserApi = () => (
  fetch(USER_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getAccessToken(),
    },
  })
    .then((responce) => responce.json())
    .then(checkResponce)
);
