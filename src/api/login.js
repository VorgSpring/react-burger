import { checkResponce } from '../helpers/api';
import { LOGIN_API_URL } from '../constants/api';

export const requestLoginApi = ({ email, password }) => (
  fetch(LOGIN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((responce) => responce.json())
    .then(checkResponce)
);
