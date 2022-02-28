import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import {
  PASSWORD_FIELD_TYPE,
  CODE_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
} from '../../constants/forms/types';

export const ResetPasswordForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => (
  <FormLayout
    submitText="Сохранить"
    isRequest={isRequest}
    error={errors[REQUEST_FIELD_TYPE]}
    onSubmit={onSubmit}
  >
    <div className="mb-6">
      <PasswordInput
        name={PASSWORD_FIELD_TYPE}
        value={values[PASSWORD_FIELD_TYPE]}
        disabled={isRequest}
        errorText={errors[PASSWORD_FIELD_TYPE]}
        error={!!errors[PASSWORD_FIELD_TYPE]}
        onChange={onChange}
      />
    </div>

    <div className="mb-6">
      <Input
        type="text"
        name={CODE_FIELD_TYPE}
        placeholder="Введите код из письма"
        value={values[CODE_FIELD_TYPE]}
        errorText={errors[CODE_FIELD_TYPE]}
        error={!!errors[CODE_FIELD_TYPE]}
        disabled={isRequest}
        onChange={onChange}
      />
    </div>
  </FormLayout>
);

ResetPasswordForm.propTypes = {
  values: PropTypes.shape({
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
    [CODE_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
    [CODE_FIELD_TYPE]: PropTypes.string,
    [REQUEST_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
