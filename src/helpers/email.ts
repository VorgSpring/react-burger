export const setLastUserEmail = (email: string) => {
  localStorage.setItem('lastUserEmail', email);
};

export const getLastUserEmail = () => localStorage.getItem('lastUserEmail');
