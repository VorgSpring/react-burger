export const checkResponce = async (responce) => {
  const { success, message, ...data } = await responce.json();

  if (!success || !responce.ok) {
    throw new Error(message);
  }

  return data;
};
