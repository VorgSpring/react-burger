export const checkResponce = async <T>(responce: Response): Promise<T> => {
  const re = await responce.json();
  const { success, message, ...data } = re;

  if (!success || !responce.ok) {
    throw new Error(message);
  }

  return data;
};
