import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Skeleton.module.css';

export const Skeleton = ({ className, width, height }) => (
  <div
    className={cn(className, styles.root)}
    style={{ width, height }}
  />
);

Skeleton.defaultProps = {
  className: null,
  width: 'auto',
  height: 'auto',
};

Skeleton.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
