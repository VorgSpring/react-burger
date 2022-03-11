import { checkResponce } from '../helpers/api';
import { setTokens } from '../helpers/tokens';
import { TOKEN_API_URL } from '../constants/api';

export const getTokenApi = (callback) => (
  fetch(TOKEN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  })
    .then((responce) => responce.json())
    .then(checkResponce)
    .then(({ accessToken, refreshToken }) => {
      setTokens({ accessToken, refreshToken });
    })
    .then(callback)
);
