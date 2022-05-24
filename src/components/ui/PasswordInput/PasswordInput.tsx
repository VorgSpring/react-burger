import React, { useState, useRef } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { TInputProps } from '../../../types/forms/props';

export const PasswordInput = ({
  name,
  value,
  placeholder,
  error = false,
  errorText = '',
  size = 'default',
  disabled,
  onChange,
}: TInputProps) => {
  const [isVisible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const type = isVisible ? 'text' : 'password';
  const icon = isVisible ? 'HideIcon' : 'ShowIcon';

  const handleIconClick = () => {
    setVisible(!isVisible);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
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
      disabled={disabled}
      ref={inputRef}
      onIconClick={handleIconClick}
      onBlur={handleBlur}
      errorText={errorText}
      size={size}
    />
  );
};
