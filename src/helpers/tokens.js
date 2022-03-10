export const setTokens = ({ accessToken, refreshToken }) => {
  localStorage.accessToken = accessToken;
  localStorage.refreshToken = refreshToken;
};

export const getTokens = () => {
  const { accessToken, refreshToken } = localStorage;

  return { accessToken, refreshToken };
};
