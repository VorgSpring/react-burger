export const checkResponce = ({ success, message, ...data }) => {
  if (!success) {
    throw new Error(message);
  }

  return data;
};
