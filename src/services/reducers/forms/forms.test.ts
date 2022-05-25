import { FormStoreNames } from '../../../constants/forms/store';
import { TFormAtionsCreator } from '../../../types/forms/actions';
import { reducer } from './forms';
import { InitialStates } from '../../../constants/forms/states';
import { formAtionsCreator } from '../../../helpers/forms/action';
import { FormFieldTypes, FormTypes } from '../../../constants/forms/types';
import { FormActionTypes } from '../../actions/type';

describe('reducer forms', () => {
  const formNames = Object.keys(FormTypes);

  it('should return the initial state', () => {
    const states = reducer(undefined, {} as TFormAtionsCreator);

    Object.keys(states).forEach((stateName) => {
      const state = states[stateName as keyof typeof states];

      expect(state).toEqual(InitialStates[stateName as FormStoreNames]);
    });
  });

  it.each(formNames)('should %s handle FORM_SET_VALUE', (name) => {
    const action = formAtionsCreator(
      FormTypes[name as keyof typeof FormTypes],
      FormActionTypes.FORM_SET_VALUE,
      {
        field: FormFieldTypes.NAME_FIELD_TYPE,
        value: 'value',
      },
    );

    const stateName = FormStoreNames[name as keyof typeof FormTypes];

    const states = reducer(undefined, action);
    const state = states[stateName];

    expect(state).toEqual({
      values: {
        ...InitialStates[stateName as FormStoreNames].values,
        [FormFieldTypes.NAME_FIELD_TYPE]: 'value',
      },
      isRequest: false,
      errors: {},
    });
  });

  it.each(formNames)('should %s handle FORM_SET_VALUES', (name) => {
    const action = formAtionsCreator(
      FormTypes[name as keyof typeof FormTypes],
      FormActionTypes.FORM_SET_VALUES,
      {
        values: {
          [FormFieldTypes.NAME_FIELD_TYPE]: 'value',
        },
      },
    );

    const stateName = FormStoreNames[name as keyof typeof FormTypes];

    const states = reducer(undefined, action);
    const state = states[stateName];

    expect(state).toEqual({
      values: {
        [FormFieldTypes.NAME_FIELD_TYPE]: 'value',
      },
      isRequest: false,
      errors: {},
    });
  });

  it.each(formNames)('should %s handle FORM_SUBMIT_REQUEST', (name) => {
    const action = formAtionsCreator(
      FormTypes[name as keyof typeof FormTypes],
      FormActionTypes.FORM_SUBMIT_REQUEST,
    );

    const stateName = FormStoreNames[name as keyof typeof FormTypes];

    const states = reducer(undefined, action);
    const state = states[stateName];

    expect(state).toEqual({
      values: {
        ...InitialStates[stateName as FormStoreNames].values,
      },
      isRequest: true,
      errors: {},
    });
  });

  it.each(formNames)('should %s handle FORM_SUBMIT_SUCCESS', (name) => {
    const action = formAtionsCreator(
      FormTypes[name as keyof typeof FormTypes],
      FormActionTypes.FORM_SUBMIT_SUCCESS,
    );

    const stateName = FormStoreNames[name as keyof typeof FormTypes];

    const oldState = {
      ...InitialStates,
      [stateName as FormStoreNames]: {
        values: {
          [FormFieldTypes.NAME_FIELD_TYPE]: 'value',
        },
        isRequest: true,
        errors: {},
      },
    };

    const states = reducer(oldState, action);
    const state = states[stateName];

    expect(state).toEqual({
      values: {
        [FormFieldTypes.NAME_FIELD_TYPE]: '',
      },
      isRequest: false,
      errors: {},
    });
  });

  it.each(formNames)('should %s handle FORM_SET_ERROR', (name) => {
    const action = formAtionsCreator(
      FormTypes[name as keyof typeof FormTypes],
      FormActionTypes.FORM_SET_ERROR,
      {
        field: FormFieldTypes.NAME_FIELD_TYPE,
        message: 'error',
      },
    );

    const stateName = FormStoreNames[name as keyof typeof FormTypes];

    const states = reducer(undefined, action);
    const state = states[stateName];

    expect(state).toEqual({
      values: {
        ...InitialStates[stateName as FormStoreNames].values,
      },
      isRequest: false,
      errors: {
        [FormFieldTypes.NAME_FIELD_TYPE]: 'error',
      },
    });
  });
});
