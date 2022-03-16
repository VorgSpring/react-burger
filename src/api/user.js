import { checkResponce } from '../helpers/api';
import { LOGOUT_API_URL, USER_API_URL } from '../constants/api';
import { getAccessToken, getRefreshToken } from '../helpers/tokens';

export const getUserApi = () => (
  fetch(USER_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getAccessToken(),
    },
  })
    .then(checkResponce)
);

export const logoutUserApi = () => (
  fetch(LOGOUT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: getRefreshToken(),
    }),
  })
    .then(checkResponce)
);
