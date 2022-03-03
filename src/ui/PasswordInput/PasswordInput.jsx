import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const PasswordInput = ({
  name,
  value,
  placeholder,
  error,
  errorText,
  size,
  onChange,
}) => {
  const [isVisible, setVisible] = useState(false);
  const inputRef = useRef(null);

  const type = isVisible ? 'text' : 'password';
  const icon = isVisible ? 'HideIcon' : 'ShowIcon';

  const handleIconClick = () => {
    setVisible(!isVisible);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      icon={icon}
      value={value}
      name={name}
      error={error}
      ref={inputRef}
      onIconClick={handleIconClick}
      onBlur={handleBlur}
      errorText={errorText}
      size={size}
    />
  );
};

PasswordInput.defaultProps = {
  size: 'default',
  error: false,
  errorText: '',
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
