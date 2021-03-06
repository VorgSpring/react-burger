import { checkResponce } from '../helpers/api';
import { getRefreshToken, setTokens } from '../helpers/tokens';
import { TOKEN_API_URL } from '../constants/api';
import { TTokens } from '../types/tokens';

export const getTokenApi = (callback: () => void) => (
  fetch(TOKEN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: getRefreshToken(),
    }),
  })
    .then((responce) => checkResponce<TTokens>(responce))
    .then(({ accessToken, refreshToken }) => {
      setTokens({ accessToken, refreshToken });
    })
    .then(callback)
);
