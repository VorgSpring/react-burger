import React from 'react';
import { useDispatch, useSelector } from '../hooks/typedHooks';
import { formAtionsCreator } from '../helpers/forms/action';
import { FormFieldsValidator } from '../helpers/forms/validator';
import { FormActionTypes } from '../services/actions/type';
import { formSelector } from '../selectors/forms';
import { FormFieldErrors } from '../constants/forms/errors';
import { FormFieldTypes, FormTypes } from '../constants/forms/types';
import { TFormProps } from '../types/forms/props';

export const withForm = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.FC<TFormProps>, formType: FormTypes, formOperation: any,
) => () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    isRequest,
  } = useSelector((store) => formSelector(store, formType));

  const validateForm = (excludedFields?: FormFieldTypes[]) => {
    let isValid = true;

    Object.keys(values).forEach((field) => {
      const formField = field as FormFieldTypes;
      const validatorField = field as keyof typeof FormFieldsValidator;

      const value = values[formField] || '';

      if (excludedFields && excludedFields.find((excludedField) => excludedField === formField)) {
        return;
      }

      if (FormFieldsValidator[validatorField] && !FormFieldsValidator[validatorField](value)) {
        dispatch(formAtionsCreator(formType, FormActionTypes.FORM_SET_ERROR, {
          field: formField,
          message: FormFieldErrors[formField],
        }));

        isValid = false;
      }
    });

    return isValid;
  };

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formAtionsCreator(formType, FormActionTypes.FORM_SET_VALUE, {
      field: target.name as FormFieldTypes,
      value: target.value,
    }));
  };

  const submitHandler = (
    options?: {
      callback?: () => void,
      excludedFields?: FormFieldTypes[],
    },
  ): void => {
    const { callback, excludedFields } = options || {};
    const isFormValid = validateForm(excludedFields);

    if (isFormValid) {
      dispatch(formOperation(callback));
    }
  };

  return (
    <Component
      values={values}
      errors={errors}
      isRequest={isRequest}
      onChange={changeHandler}
      onSubmit={submitHandler}
    />
  );
};
