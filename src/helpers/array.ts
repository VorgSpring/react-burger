export const arrayMove = <T>(array: Array<T>, fromIndex: number, toIndex: number): Array<T> => {
  const arrayCopy = [...array];

  const [item] = arrayCopy.splice(fromIndex, 1);
  arrayCopy.splice(toIndex, 0, item);

  return arrayCopy;
};

export const getEmptyArray = (count: number) => Array.from(Array(count));
