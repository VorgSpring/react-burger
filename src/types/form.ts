import { FormFieldTypes } from '../constants/forms/types';

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

export type TFormProps = TFormState & {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (callback: () => void) => void;
};

export type TInputProps = {
  name: string;
  value: string;
  placeholder: string;
  error: boolean;
  errorText?: string;
  type?: 'text' | 'email' | 'password';
  size?: 'small' | 'default';
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
