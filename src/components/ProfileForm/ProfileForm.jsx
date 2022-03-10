import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FormLayout from '../FormLayout';
import { ProfileFormSkeleton } from './ProfileFormSkeleton';
import LoadError from '../LoadError';
import EditableInput from '../ui/EditableInput';
import { profileFormSelector } from '../../selectors/forms';
import { formAtionsCreator } from '../../helpers/forms/actionCreator';
import { requestUser } from '../../services/operations/user';
import {
  NAME_FIELD_TYPE,
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
  FormTypes,
} from '../../constants/forms/types';
import { FORM_SET_VALUES } from '../../services/actions/type';
import styles from './ProfileForm.module.css';

export const ProfileForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const {
    user,
    isShowButtons,
    isRequestUser,
    errorUser,
  } = useSelector(profileFormSelector);

  useEffect(() => {
    if (!user) {
      dispatch(requestUser());
    }
  }, []);

  const handleCancel = () => {
    const initialFields = {
      ...user,
      [PASSWORD_FIELD_TYPE]: '',
    };

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FORM_SET_VALUES, initialFields),
    );
  };

  if (isRequestUser) {
    return (
      <ProfileFormSkeleton />
    );
  }

  if (errorUser) {
    return (
      <LoadError
        className={styles.root}
        title="Данные пользователя не&nbsp;загруженны"
        error={errorUser}
      />
    );
  }

  return (
    <FormLayout
      submitText="Сохранить"
      cancelText="Отмена"
      buttonsPosition="right"
      isRequest={isRequest}
      error={errors[REQUEST_FIELD_TYPE]}
      onSubmit={onSubmit}
      isShowButtons={isShowButtons}
      onCancel={handleCancel}
    >
      <div className="mb-6">
        <EditableInput
          type="text"
          name={NAME_FIELD_TYPE}
          placeholder="Имя"
          value={values[NAME_FIELD_TYPE]}
          errorText={errors[NAME_FIELD_TYPE]}
          error={!!errors[NAME_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <EditableInput
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
        <EditableInput
          type="password"
          name={PASSWORD_FIELD_TYPE}
          placeholder="Новый пароль"
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

ProfileForm.propTypes = {
  values: PropTypes.shape({
    [NAME_FIELD_TYPE]: PropTypes.string,
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    [NAME_FIELD_TYPE]: PropTypes.string,
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
    [REQUEST_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
