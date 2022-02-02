import { ConstructorElementTypes } from '../constants/constructor';

export const getConstructorElementType = (type) => (
  type === ConstructorElementTypes.BUN
    ? ConstructorElementTypes.BUN
    : ConstructorElementTypes.INGEDIENTS
);
