import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skeleton.module.css';

export const Skeleton = ({ width, height }) => (
  <div
    className={styles.root}
    style={{ width, height }}
  />
);

Skeleton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
