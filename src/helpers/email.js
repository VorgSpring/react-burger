export const setLastUserEmail = (email) => {
  localStorage.setItem('lastUserEmail', email);
};

export const getLastUserEmail = () => localStorage.getItem('lastUserEmail');
