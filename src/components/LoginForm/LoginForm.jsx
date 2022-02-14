import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import { formAtionsCreator } from '../../services/actions/formActionCreator';
import { FORM_SET_VALUE, FORM_SET_ERROR } from '../../services/actions/type';
import { requestLogin } from '../../services/operations/login';
import { LoginFieldNames, FormFieldErrors, FormTypes } from '../../constants/forms';
import { FormFieldsValidator } from '../../helpers/forms';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    emailValue,
    passwordValue,
    isRequest,
    emailError,
    passwordError,
    requestError,
  } = useSelector(({ forms }) => ({
    emailValue: forms.login.values[LoginFieldNames.EMAIL],
    passwordValue: forms.login.values[LoginFieldNames.PASSWORD],
    isRequest: forms.login.isRequest,
    emailError: forms.login.errors[LoginFieldNames.EMAIL],
    passwordError: forms.login.errors[LoginFieldNames.PASSWORD],
    requestError: forms.login.errors[LoginFieldNames.REQUEST],
  }));

  const validateForm = () => {
    let isValid = true;

    const isEmailValid = FormFieldsValidator[LoginFieldNames.EMAIL](emailValue);
    const isPasswordValid = FormFieldsValidator[LoginFieldNames.PASSWORD](passwordValue);

    if (!isEmailValid) {
      dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SET_ERROR, {
        field: LoginFieldNames.EMAIL,
        message: FormFieldErrors[LoginFieldNames.EMAIL],
      }));

      isValid = false;
    }

    if (!isPasswordValid) {
      dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SET_ERROR, {
        field: LoginFieldNames.PASSWORD,
        message: FormFieldErrors[LoginFieldNames.PASSWORD],
      }));

      isValid = false;
    }

    return isValid;
  };

  const changeHandler = ({ target }) => {
    dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SET_VALUE, {
      field: target.name,
      value: target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();
    if (isFormValid) {
      dispatch(requestLogin());
    }
  };

  return (
    <FormLayout
      submitText="Войти"
      isRequest={isRequest}
      error={requestError}
      onSubmit={submitHandler}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={LoginFieldNames.EMAIL}
          placeholder="E-mail"
          value={emailValue}
          errorText={emailError}
          error={!!emailError}
          disabled={isRequest}
          onChange={changeHandler}
        />
      </div>

      <div className="mb-6">
        <PasswordInput
          name={LoginFieldNames.PASSWORD}
          value={passwordValue}
          disabled={isRequest}
          errorText={passwordError}
          error={!!passwordError}
          onChange={changeHandler}
        />
      </div>
    </FormLayout>
  );
};
