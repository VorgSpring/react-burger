import React from 'react';
import styles from './ModalOverlay.module.css';

type Props = {
  onClick: () => void;
};

export const ModalOverlay = ({ onClick }: Props) => (
  <div className={styles.root} onClick={onClick} />
);
