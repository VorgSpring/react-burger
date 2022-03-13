import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import PasswordInput from '../ui/PasswordInput';
import { formAtionsCreator } from '../../helpers/forms/actionCreator';
import { getLastUserEmail } from '../../helpers/email';
import {
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
  FormTypes,
} from '../../constants/forms/types';
import { FORM_SET_VALUE } from '../../services/actions/type';

export const LoginForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const lastUserEmail = getLastUserEmail();

    if (lastUserEmail) {
      dispatch(
        formAtionsCreator(FormTypes.LOGIN, FORM_SET_VALUE, {
          field: EMAIL_FIELD_TYPE,
          value: lastUserEmail,
        }),
      );
    }
  }, []);

  return (
    <FormLayout
      submitText="Войти"
      isRequest={isRequest}
      error={errors[REQUEST_FIELD_TYPE]}
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={EMAIL_FIELD_TYPE}
          placeholder="E-mail"
          value={values[EMAIL_FIELD_TYPE]}
          errorText={errors[EMAIL_FIELD_TYPE]}
          error={!!errors[EMAIL_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <PasswordInput
          name={PASSWORD_FIELD_TYPE}
          placeholder="Пароль"
          value={values[PASSWORD_FIELD_TYPE]}
          disabled={isRequest}
          errorText={errors[PASSWORD_FIELD_TYPE]}
          error={!!errors[PASSWORD_FIELD_TYPE]}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};

LoginForm.propTypes = {
  values: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
    [REQUEST_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
