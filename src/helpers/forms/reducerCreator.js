import {
  FORM_SET_VALUE,
  FORM_SET_VALUES,
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SET_ERROR,
} from '../../services/actions/type';
import { InitialStates } from '../../constants/forms/states';

const resetError = (field, errors) => {
  if (errors[field]) {
    const newErrors = { ...errors };
    delete newErrors[field];
    return newErrors;
  }

  return errors;
};

const cleanUpValues = (values) => (
  Object.keys(values)
    .reduce((acc, field) => {
      acc[field] = '';
      return acc;
    }, {})
);

export const reducerCreator = (formType) => (
  (state = InitialStates[formType], action) => {
    switch (action.type) {
      case `${formType}_${FORM_SET_VALUE}`:
        return {
          ...state,
          values: {
            ...state.values,
            [action.payload.field]: action.payload.value,
          },
          errors: resetError(action.payload.field, state.errors),
        };

      case `${formType}_${FORM_SET_VALUES}`:
        return {
          ...state,
          values: {
            ...action.payload,
          },
          errors: {},
        };

      case `${formType}_${FORM_SUBMIT_REQUEST}`:
        return {
          ...state,
          isRequest: true,
          errors: {},
        };

      case `${formType}_${FORM_SUBMIT_SUCCESS}`:
        return {
          ...state,
          values: cleanUpValues(state.values),
          isRequest: false,
          errors: {},
        };

      case `${formType}_${FORM_SET_ERROR}`:
        return {
          ...state,
          isRequest: false,
          errors: {
            ...state.errors,
            [action.payload.field]: action.payload.message,
          },
        };

      default:
        return state;
    }
  }
);
