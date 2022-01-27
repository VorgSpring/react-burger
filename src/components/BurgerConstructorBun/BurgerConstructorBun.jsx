import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorBunEmpty } from './BurgerConstructorBunEmpty';
import { getIngredientById } from '../../helpers/ingredients';
import { ConstructorBunTypes } from '../../constants/constructor';
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

  const additionalText = type === ConstructorBunTypes.TOP
    ? '(верх)' : '(низ)';
  const additionalStyle = type === ConstructorBunTypes.TOP
    ? 'mb-4' : 'mt-4';

  return (
    <div className={`${styles.root} ${additionalStyle} pr-4`}>
      <ConstructorElement
        type={type}
        isLocked
        text={`${name} ${additionalText}`}
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
