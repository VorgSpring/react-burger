import { ConstructorElementTypes } from '../constants/constructor';

export const getConstructorElementType = (type: string) => (
  type === ConstructorElementTypes.BUN
    ? ConstructorElementTypes.BUN
    : ConstructorElementTypes.INGEDIENTS
);
