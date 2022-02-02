import React from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorBunAdditionalStyle,
  ConstructorBunTypes,
} from '../../../../constants/constructor';
import styles from './Bun.module.css';

export const BunEmpty = ({ type }) => (
  <p className={
    `${styles.empty} ${styles[`empty_${type}`]}
    ${ConstructorBunAdditionalStyle[type]}
    text text_type_main-default text_color_inactive ml-8`
    }
  >
    Добавте булку
  </p>
);

BunEmpty.propTypes = {
  type: PropTypes.oneOf(
    Object.values(ConstructorBunTypes),
  ).isRequired,
};
