export const arrayMove = (array, fromIndex, toIndex) => {
  const arrayCopy = [...array];

  const [item] = arrayCopy.splice(fromIndex, 1);
  arrayCopy.splice(toIndex, 0, item);

  return arrayCopy;
};
