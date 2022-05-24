import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks/typedHooks';
import FormLayout from '../FormLayout';
import { ProfileFormSkeleton } from './ProfileFormSkeleton';
import LoadError from '../LoadError';
import EditableInput from '../ui/EditableInput';
import { profileFormSelector } from '../../selectors/forms';
import { formAtionsCreator } from '../../helpers/forms/action';
import { getUserRequest } from '../../services/operations/user';
import {
  FormFieldTypes,
  FormTypes,
} from '../../constants/forms/types';
import { FormActionTypes } from '../../services/actions/type';
import { TFormProps } from '../../types/forms/props';
import { TFormAtionsPayloads } from '../../types/forms/actions';
import styles from './ProfileForm.module.css';

export const ProfileForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}: TFormProps) => {
  const dispatch = useDispatch();
  const {
    user,
    isShowButtons,
    isRequestUser,
    errorUser,
    excludedFields,
  } = useSelector(profileFormSelector);

  useEffect(() => {
    if (!user) {
      dispatch(getUserRequest());
    }
  }, [dispatch, user]);

  const handleCancel = () => {
    const initialFields = {
      ...user,
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
    } as TFormAtionsPayloads;

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_VALUES, initialFields),
    );
  };

  const handleSubmit = () => {
    onSubmit({ excludedFields });
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
      error={errors[FormFieldTypes.REQUEST_FIELD_TYPE]}
      className="mt-20"
      onSubmit={handleSubmit}
      isShowButtons={isShowButtons}
      onCancel={handleCancel}
    >
      <div className="mb-6">
        <EditableInput
          type="text"
          name={FormFieldTypes.NAME_FIELD_TYPE}
          placeholder="Имя"
          value={values[FormFieldTypes.NAME_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.NAME_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.NAME_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <EditableInput
          type="text"
          name={FormFieldTypes.EMAIL_FIELD_TYPE}
          placeholder="E-mail"
          value={values[FormFieldTypes.EMAIL_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <EditableInput
          type="password"
          name={FormFieldTypes.PASSWORD_FIELD_TYPE}
          placeholder="Новый пароль"
          value={values[FormFieldTypes.PASSWORD_FIELD_TYPE] || ''}
          disabled={isRequest}
          errorText={errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};
