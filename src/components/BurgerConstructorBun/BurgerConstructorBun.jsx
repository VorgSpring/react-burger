import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorBunEmpty } from './BurgerConstructorBunEmpty';
import { getIngredientById } from '../../helpers/ingredients';
import {
  ConstructorBunTypes,
  ConstructorBunAdditionalStyle,
  ConstructorBunAdditionalText,
} from '../../constants/constructor';
import styles from './BurgerConstructorBun.module.css';

export const BurgerConstructorBun = ({ type }) => {
  const bun = useSelector((store) => (
    getIngredientById(store.ingredients.items, store.burger.bun)
  ));

  if (!bun) {
    return (
      <BurgerConstructorBunEmpty type={type} />
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

BurgerConstructorBun.propTypes = {
  type: PropTypes.oneOf(
    Object.values(ConstructorBunTypes),
  ).isRequired,
};
