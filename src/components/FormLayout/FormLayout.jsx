import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './FormLayout.module.css';

export const FormLayout = ({
  submitText,
  onChange,
  onSubmit,
  children,
}) => (
  <form
    className={styles.root}
    onChange={onChange}
    onSubmit={onSubmit}
  >

    {children}

    {submitText && (
      <Button type="primary" size="medium">
        {submitText}
      </Button>
    )}
  </form>
);

FormLayout.defaultProps = {
  submitText: null,
};

FormLayout.propTypes = {
  submitText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
