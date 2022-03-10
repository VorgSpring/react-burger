export const getExcludedFieldsForProfileForm = (userValues, formValues) => {
  if (userValues === null) {
    return [];
  }

  const {
    email: emailUser,
    name: nameUser,
  } = userValues;

  const {
    email: emailForm,
    name: nameForm,
    password: newPassword,
  } = formValues;

  const excludedFields = [];

  if (emailForm !== emailUser) {
    excludedFields.push(emailForm);
  }

  if (nameForm !== nameUser) {
    excludedFields.push(nameForm);
  }

  if (newPassword !== '') {
    excludedFields.push(newPassword);
  }

  return excludedFields;
};

export const isShowProfileButtons = (userValues, formValues) => {
  if (userValues === null) {
    return false;
  }

  const {
    email: emailUser,
    name: nameUser,
  } = userValues;

  const {
    email: emailForm,
    name: nameForm,
    password: newPassword,
  } = formValues;

  return (
    emailForm !== emailUser
    || nameForm !== nameUser
    || newPassword !== ''
  );
};
