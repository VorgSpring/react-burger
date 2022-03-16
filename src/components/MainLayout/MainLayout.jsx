import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => (
  <>
    <Header />

    <main className={styles.root}>
      {children}
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
