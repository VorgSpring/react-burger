import { Tokens } from '../constants/tokens';
import { TTokens } from '../types/tokens';

export const setTokens = ({ accessToken, refreshToken }: TTokens) => {
  localStorage.setItem(Tokens.ACCESS, accessToken);
  localStorage.setItem(Tokens.REFRESH, refreshToken);
};

export const getRefreshToken = () => localStorage.getItem(Tokens.REFRESH) ?? '';
export const getAccessToken = () => localStorage.getItem(Tokens.ACCESS) ?? '';

export const getTokens = (): TTokens => {
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  return { accessToken, refreshToken };
};

export const removeTokens = () => {
  localStorage.removeItem(Tokens.ACCESS);
  localStorage.removeItem(Tokens.REFRESH);
};

export const getPreparedAccessToken = () => {
  const token = getAccessToken();

  return token.split('Bearer ')[1];
};
