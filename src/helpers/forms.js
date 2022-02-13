export const resetError = (field, errors) => {
  if (errors[field]) {
    const { ...newErrors } = errors;
    newErrors.delete(field);
    return newErrors;
  }

  return errors;
};
