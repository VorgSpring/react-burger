import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { getCountIngredientInBurgerSelector } from '../../../../selectors/burger';
import { DndTypes } from '../../../../constants/dndTypes';
import { getIngredientPath } from '../../../../helpers/ingredients';
import { TIngregient } from '../../../../types/ingredient';
import { TStore } from '../../../../types/store';
import styles from './Ingredient.module.css';

type Props = {
  item: TIngregient
};

export const Ingredient = ({ item }: Props) => {
  const location = useLocation();

  const {
    id,
    constructorType,
    image,
    name,
    price,
  } = item;

  const count = useSelector<TStore, number | null>(
    (store) => getCountIngredientInBurgerSelector(store, id),
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

  return (
    <li
      ref={dragRef}
      className={cn(styles.root, 'mt-2 pb-4 pt-9', {
        [styles.drag]: isDrag,
      })}
    >
      <Link
        to={getIngredientPath(id)}
        state={{ backgroundLocation: location }}
        className={styles.link}
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
          <span className="text text_type_digits-default text_color_primary mr-1">
            {price}
          </span>

          <CurrencyIcon type="primary" />
        </div>

        <h4 className={cn(styles.name, 'text text_type_main-default text_color_primary pr-2 pl-2')}>
          {name}
        </h4>
      </Link>
    </li>
  );
};
