import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructorBun.module.css';

export const BurgerConstructorBunEmpty = ({ type }) => (
  <p className={`${styles.empty} ${styles[`empty_${type}`]} text text_type_main-default text_color_inactive`}>
    Добавте булку
  </p>
);

BurgerConstructorBunEmpty.propTypes = {
  type: PropTypes.string.isRequired,
};
