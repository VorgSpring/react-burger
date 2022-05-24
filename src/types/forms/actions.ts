import { FormFieldTypes } from '../../constants/forms/types';
import { TFormValues } from './state';

export type TFormAtionsPayloads = {
  field?: FormFieldTypes;
  value?: string;
  message?: string;
  values?: TFormValues;
};

export type TFormAtionsCreator = {
  type: string;
  payload?: TFormAtionsPayloads;
};
