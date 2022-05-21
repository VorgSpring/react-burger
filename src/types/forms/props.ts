import { FormFieldTypes } from '../../constants/forms/types';
import { TFormState } from './state';

export type TFormProps = TFormState & {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (options?: {
    callback?: () => void,
    excludedFields?: FormFieldTypes[]
  }) => void;
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
