import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './FormLayout.module.css';

export const FormLayout = ({
  submitText,
  error,
  isRequest,
  onSubmit,
  children,
}) => (
  <form
    className={`${styles.root} ${isRequest ? styles.load : ''}`}
    onSubmit={onSubmit}
  >

    {children}

    {submitText && submitText.length && (
      <Button
        type="primary"
        size="medium"
        disabled={isRequest}
      >
        {submitText}
      </Button>
    )}

    {error && (
      <p className={`${styles.error} text text_type_main-default mt-10`}>
        {error}
      </p>
    )}
  </form>
);

FormLayout.defaultProps = {
  submitText: null,
  error: null,
};

FormLayout.propTypes = {
  submitText: PropTypes.string,
  error: PropTypes.string,
  isRequest: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
