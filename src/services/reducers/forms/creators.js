import {
  FORM_SET_VALUE,
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SET_ERROR,
} from '../../actions/type';
import { resetError, clearValues } from '../../../helpers/forms';

export const reducerCreator = (initialState, formType) => (
  (state = initialState, action) => {
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

      case `${formType}_${FORM_SUBMIT_REQUEST}`:
        return {
          ...state,
          isRequest: true,
          errors: {},
        };

      case `${formType}_${FORM_SUBMIT_SUCCESS}`:
        return {
          ...state,
          values: clearValues(state.values),
          isRequest: false,
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

export const stateCreator = (values) => ({
  values,
  isRequest: false,
  errors: {},
});
