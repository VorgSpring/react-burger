import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './FormLayout.module.css';

export const FormLayout = ({
  submitText,
  cancelText,
  error,
  buttonPosition,
  isRequest,
  isShowButtons,
  onSubmit,
  onCancel,
  children,
}) => {
  /**
   * Обработчик необходим, т.к. в библеотеке компонентов
   * нет возможности передать нативный тип кнопки,
   * из-за чего клик по любой кнопке приводит к отправке формы
   */
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      className={cn(styles.root, {
        [styles.load]: isRequest,
      })}
      onSubmit={handleSubmit}
    >

      {children}

      {isShowButtons && (
        <div className={cn(styles.buttons, styles[`buttons_${buttonPosition}`])}>
          {cancelText && onCancel && (
            <Button
              type="secondary"
              size="medium"
              disabled={isRequest}
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          )}

          <Button
            type="primary"
            size="medium"
            disabled={isRequest}
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

FormLayout.defaultProps = {
  cancelText: null,
  error: null,
  buttonPosition: 'center',
  isShowButtons: true,
  onCancel: null,
};

FormLayout.propTypes = {
  submitText: PropTypes.string.isRequired,
  cancelText: PropTypes.string,
  error: PropTypes.string,
  buttonPosition: PropTypes.oneOf(['left', 'center', 'right']),
  isRequest: PropTypes.bool.isRequired,
  isShowButtons: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  children: PropTypes.node.isRequired,
};
