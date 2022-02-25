import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { setCurrentIngredient } from '../../../../services/actions/currentIngredient';
import { getCountIngredientinBurger } from '../../../../helpers/ingredients';
import { ConstructorElementTypes } from '../../../../constants/constructor';
import { DndTypes } from '../../../../constants/dndTypes';
import styles from './Ingredient.module.css';

export const Ingredient = ({ item }) => {
  const {
    id,
    constructorType,
    image,
    name,
    price,
  } = item;

  const dispatch = useDispatch();

  const count = useSelector(
    (store) => getCountIngredientinBurger(constructorType, id, store.burger),
  );

  const [{ isDrag }, dragRef, preview] = useDrag({
    type: DndTypes.INGREDIENT,
    item: {
      id,
      type: constructorType,
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleClick = () => {
    dispatch(setCurrentIngredient(id));
  };

  return (
    <li
      ref={dragRef}
      className={cn(styles.root, 'mt-2 pb-4 pt-9', {
        [styles.drag]: isDrag,
      })}
      onClick={handleClick}
    >
      {!!count && (
        <Counter count={count} size="default" />
      )}

      <img
        ref={preview}
        className={cn(styles.image, 'mb-2')}
        src={image}
        alt={name}
      />

      <div className={cn(styles.price, 'mb-1')}>
        <span className="text text_type_digits-default mr-1">
          {price}
        </span>

        <CurrencyIcon type="primary" />
      </div>

      <h4 className={cn(styles.name, 'text text_type_main-default pr-2 pl-2')}>
        {name}
      </h4>
    </li>
  );
};

Ingredient.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    constructorType: PropTypes.oneOf(
      Object.values(ConstructorElementTypes),
    ).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
