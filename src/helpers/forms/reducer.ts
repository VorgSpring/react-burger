import { FormActionTypes } from '../../services/actions/type';
import { InitialStates } from '../../constants/forms/states';
import { FormFieldTypes } from '../../constants/forms/types';
import { TFormErrors, TFormState, TFormValues } from '../../types/forms/state';
import { TFormAtionsCreator } from '../../types/forms/actions';
import { FormStoreNames } from '../../constants/forms/store';

const resetError = (errors: TFormErrors, field?: FormFieldTypes): TFormErrors => {
  if (!field || !errors[field]) {
    return errors;
  }

  if (errors[field]) {
    const newErrors = { ...errors };
    delete newErrors[field];
    return newErrors;
  }

  return errors;
};

const cleanUpValues = (values: TFormValues): TFormValues => (
  Object.keys(values)
    .reduce((acc, field) => {
      acc[field as FormFieldTypes] = '';
      return acc;
    }, {} as TFormValues)
);

export type TFormReducer = (state: TFormState, action: TFormAtionsCreator) => TFormState;
export const reducerCreator = (formType: keyof typeof FormStoreNames): TFormReducer => (
  (
    state = InitialStates[FormStoreNames[formType]],
    action,
  ) => {
    const field = action.payload?.field;
    const values = action.payload?.values;
    const value = action.payload?.value;
    const message = action.payload?.message;

    switch (action.type) {
      case `${formType}_${FormActionTypes.FORM_SET_VALUE}`:
        if (!field) {
          return state;
        }

        return {
          ...state,
          values: {
            ...state.values,
            [field]: value || '',
          },
          errors: resetError(state.errors, field),
        };

      case `${formType}_${FormActionTypes.FORM_SET_VALUES}`:
        if (!values) {
          return state;
        }

        return {
          ...state,
          values: {
            ...values,
          },
          errors: {},
        };

      case `${formType}_${FormActionTypes.FORM_SUBMIT_REQUEST}`:
        return {
          ...state,
          isRequest: true,
          errors: {},
        };

      case `${formType}_${FormActionTypes.FORM_SUBMIT_SUCCESS}`:
        return {
          ...state,
          values: cleanUpValues(state.values),
          isRequest: false,
          errors: {},
        };

      case `${formType}_${FormActionTypes.FORM_SET_ERROR}`:
        if (!field || !message) {
          return state;
        }

        return {
          ...state,
          isRequest: false,
          errors: {
            ...state.errors,
            [field]: message,
          },
        };

      default:
        return state;
    }
  }
);
