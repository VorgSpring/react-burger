export const checkResponce = async <T>(responce: Response): Promise<T> => {
  const { success, message, ...data } = await responce.json();

  if (!success || !responce.ok) {
    throw new Error(message);
  }

  return data;
};
