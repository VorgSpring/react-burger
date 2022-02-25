import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formAtionsCreator } from '../helpers/forms/actionCreator';
import { FormFieldsValidator } from '../helpers/forms/validator';
import { FORM_SET_VALUE, FORM_SET_ERROR } from '../services/actions/type';
import { FormFieldErrors } from '../constants/errors';
import { FormStoreNames } from '../constants/forms/store';

export const withForm = (Component, formType, formOperation) => () => {
  const dispatch = useDispatch();

  const storeName = FormStoreNames[formType];
  const {
    values,
    errors,
    isRequest,
  } = useSelector(({ forms }) => ({
    values: forms[storeName].values,
    errors: forms[storeName].errors,
    isRequest: forms[storeName].isRequest,
  }));

  const validateForm = () => {
    let isValid = true;

    Object.keys(values).forEach((field) => {
      if (!FormFieldsValidator[field](values[field])) {
        dispatch(formAtionsCreator(formType, FORM_SET_ERROR, {
          field,
          message: FormFieldErrors[field],
        }));

        isValid = false;
      }
    });

    return isValid;
  };

  const changeHandler = ({ target }) => {
    dispatch(formAtionsCreator(formType, FORM_SET_VALUE, {
      field: target.name,
      value: target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();
    if (isFormValid) {
      dispatch(formOperation());
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
