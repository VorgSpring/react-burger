import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

export const ModalOverlay = ({ onClick }) => (
  <div className={styles.root} onClick={onClick} />
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
