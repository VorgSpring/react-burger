import React, { useState, useRef } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { TInputProps } from '../../../types/forms/props';

export const EditableInput = ({
  name,
  type,
  value,
  placeholder,
  error = false,
  errorText = '',
  size = 'default',
  disabled,
  onChange,
}: TInputProps) => {
  const [isEditable, setEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  let typeInput = type;

  if (type === 'password') {
    typeInput = isEditable ? 'text' : 'password';
  }

  const handleIconClick = () => {
    setEditable(!isEditable);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
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
      disabled={disabled || !isEditable}
      onIconClick={handleIconClick}
      onBlur={handleBlur}
      errorText={errorText}
      size={size}
    />
  );
};
