import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const EditableInput = ({
  name,
  type,
  value,
  placeholder,
  error,
  errorText,
  size,
  onChange,
}) => {
  const [isEditable, setEditable] = useState(false);
  const inputRef = useRef(null);

  let typeInput = type;

  if (type === 'password') {
    typeInput = isEditable ? 'text' : 'password';
  }

  const handleIconClick = () => {
    setEditable(!isEditable);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  return (
    <Input
      type={typeInput}
      placeholder={placeholder}
      onChange={onChange}
      icon="EditIcon"
      value={value}
      name={name}
      error={error}
      ref={inputRef}
      disabled={!isEditable}
      onIconClick={handleIconClick}
      onBlur={handleBlur}
      errorText={errorText}
      size={size}
    />
  );
};

EditableInput.defaultProps = {
  size: 'default',
  error: false,
  errorText: '',
};

EditableInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
