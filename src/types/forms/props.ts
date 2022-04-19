import { TFormState } from './state';

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
