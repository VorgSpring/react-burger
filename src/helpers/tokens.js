export const setTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const getTokens = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');

  return { accessToken, refreshToken };
};

export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const getAccessToken = () => localStorage.getItem('accessToken');

export const removeTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
