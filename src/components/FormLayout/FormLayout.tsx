import React from 'react';
import cn from 'classnames';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './FormLayout.module.css';

type Props = {
  submitText: string;
  cancelText?: string;
  error?: string;
  buttonsPosition?: 'left' | 'center' | 'right';
  isRequest: boolean;
  isShowButtons?: boolean;
  onSubmit: (callback: () => void) => void;
  onCancel?: () => void;
  children: React.ReactNode;
};

export const FormLayout = ({
  submitText,
  cancelText,
  error,
  buttonsPosition = 'center',
  isRequest,
  isShowButtons = true,
  onSubmit,
  onCancel,
  children,
}: Props) => {
  /**
   * Обработчик необходим, т.к. в библеотеке компонентов
   * нет возможности передать нативный тип кнопки,
   * из-за чего клик по любой кнопке приводит к отправке формы
   */
  const handleSubmit = (e: React.SyntheticEvent<Element, Event>) => e.preventDefault();

  return (
    <form
      className={cn(styles.root, {
        [styles.load]: isRequest,
      })}
      onSubmit={handleSubmit}
    >

      {children}

      {isShowButtons && (
        <div className={cn(styles.buttons, styles[`buttons_${buttonsPosition}`])}>
          {cancelText && onCancel && (
            <Button
              type="secondary"
              size="medium"
              // @ts-ignore: Ошибка библиотеки
              disabled={isRequest}
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          )}

          <Button
            type="primary"
            size="medium"
            // @ts-ignore: Ошибка библиотеки
            disabled={isRequest}
            // @ts-ignore: Ошибка библиотеки
            onClick={onSubmit}
          >
            {submitText}
          </Button>
        </div>
      )}

      {error && (
        <p className={cn(styles.error, 'text text_type_main-default mt-10')}>
          {error}
        </p>
      )}
    </form>
  );
};
