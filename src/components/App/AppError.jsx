import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';

export const AppError = ({ error }) => (
  <main className={styles.root}>
    <h1 className="text text_type_main-large mt-10 mb-5">
      {error}
    </h1>
  </main>
);

AppError.propTypes = {
  error: PropTypes.string.isRequired,
};
