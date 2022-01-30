import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorBunTypes } from '../../../../constants/constructor';
import styles from './Bun.module.css';

export const BunEmpty = ({ type }) => (
  <p className={`${styles.empty} ${styles[`empty_${type}`]} text text_type_main-default text_color_inactive`}>
    Добавте булку
  </p>
);

BunEmpty.propTypes = {
  type: PropTypes.oneOf(
    Object.values(ConstructorBunTypes),
  ).isRequired,
};
