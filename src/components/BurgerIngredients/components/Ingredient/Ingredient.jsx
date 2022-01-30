import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { setCurrentIngredient } from '../../../../services/actions/currentIngredient';
import { ConstructorElementTypes } from '../../../../constants/constructor';
import styles from './Ingredient.module.css';

export const Ingredient = ({ item }) => {
  const {
    id,
    constructorType,
    image,
    name,
    price,
    count,
  } = item;

  const dispatch = useDispatch();

  const [{ isDrag }, dragRef, preview] = useDrag({
    type: 'ingregient',
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
      className={`${styles.root} ${isDrag ? styles.drag : ''} mt-6 pb-4`}
      onClick={handleClick}
    >
      {count && (
        <Counter count={1} size="default" />
      )}

      <img
        ref={preview}
        className={`${styles.image} mb-2`}
        src={image}
        alt={name}
      />

      <div className={`${styles.price} mb-1`}>
        <span className="text text_type_digits-default mr-1">
          {price}
        </span>

        <CurrencyIcon type="primary" />
      </div>

      <h4 className={`${styles.name} text text_type_main-default pr-2 pl-2`}>
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
    count: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
