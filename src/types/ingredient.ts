import { ConstructorElementTypes } from '../constants/constructor';

export type TIngredientStructure = {
  calories: string;
  proteins: string;
  fat: string;
  carbohydrates: string;
};

export type TIngregient = {
  id: string;
  type: string;
  constructorType: ConstructorElementTypes;
  image: string;
  imageLarge: string;
  name: string;
  price: number;

  structure: TIngredientStructure,
};

export type TBackIngregient = {
  _id: string;
  type: string;
  image: string;
  // eslint-disable-next-line camelcase
  image_large: string;
  name: string;
  price: number;
  calories: string;
  proteins: string;
  fat: string;
  carbohydrates: string;
};

export type TIngregientResponce = {
  data: TBackIngregient[];
};
