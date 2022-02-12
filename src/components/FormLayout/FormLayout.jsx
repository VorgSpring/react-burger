import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './FormLayout.module.css';

export const FormLayout = ({ submitText, onChange, children }) => (
  <form className={styles.root} onChange={onChange}>

    {children}

    <Button type="primary" size="medium">
      {submitText}
    </Button>
  </form>
);

FormLayout.propTypes = {
  submitText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
