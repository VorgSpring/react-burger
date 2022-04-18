import React from 'react';
import {
  ConstructorBunAdditionalStyle,
  ConstructorBunTypes,
} from '../../../../constants/constructor';
import styles from './Bun.module.css';

type Props = {
  type: ConstructorBunTypes
};

export const BunEmpty = ({ type }: Props) => (
  <p className={
    `${styles.empty} ${styles[`empty_${type}`]}
    ${ConstructorBunAdditionalStyle[type]}
    text text_type_main-default text_color_inactive ml-8`
  }
  >
    Добавте булку
  </p>
);
