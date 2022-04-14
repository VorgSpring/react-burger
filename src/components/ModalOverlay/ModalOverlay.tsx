import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

type Props = {
  onClick: () => void;
};

export const ModalOverlay = ({ onClick }: Props) => (
  <div className={styles.root} onClick={onClick} />
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
