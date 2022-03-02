import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { BunEmpty } from './BunEmpty';
import { getBunSelector } from '../../../../selectors/burger';
import {
  ConstructorBunTypes,
  ConstructorBunAdditionalStyle,
  ConstructorBunAdditionalText,
} from '../../../../constants/constructor';
import styles from './Bun.module.css';

export const Bun = ({ type }) => {
  const bun = useSelector(getBunSelector);

  if (!bun) {
    return (
      <BunEmpty type={type} />
    );
  }

  const { name, price, image } = bun;

  return (
    <div className={`${styles.root} ${ConstructorBunAdditionalStyle[type]} pr-4`}>
      <ConstructorElement
        type={type}
        isLocked
        text={`${name} ${ConstructorBunAdditionalText[type]}`}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};

Bun.propTypes = {
  type: PropTypes.oneOf(
    Object.values(ConstructorBunTypes),
  ).isRequired,
};
