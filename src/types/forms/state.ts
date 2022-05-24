import { FormFieldTypes } from '../../constants/forms/types';

export type TFormValues = {
  [K in FormFieldTypes]?: string;
};

export type TFormErrors = {
  [K in FormFieldTypes]?: string;
};

export type TFormState = {
  values: TFormValues;
  isRequest: boolean;
  errors: TFormErrors;
};
