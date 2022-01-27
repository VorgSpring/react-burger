import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { createOrder } from '../../services/operations/order';
import { getSum } from '../../helpers/burger';
import styles from './BurgerConstructorOrder.module.css';

export const BurgerConstructorOrder = () => {
  const dispatch = useDispatch();

  const {
    isDisabledButton,
    orderSum,
    orderCreating,
  } = useSelector((store) => ({
    isDisabledButton:
      store.order.isCreating || !store.burger.bun || !store.burger.ingredients,
    orderSum: getSum(store.burger, store.ingredients.items),
    orderCreating: store.order.isCreating,
  }));

  const handleCreateOrder = () => {
    if (orderCreating) {
      return;
    }

    dispatch(createOrder());
  };

  return (
    <div className={`${styles.root} pr-4`}>
      <div className={`${styles.price} mr-10`}>
        <span className="text text_type_digits-medium mr-2">
          {orderSum}
        </span>

        <span className={styles.icon}>
          <CurrencyIcon type="primary" />
        </span>
      </div>

      <Button onClick={handleCreateOrder} disabled={isDisabledButton}>
        {orderCreating ? 'Подождите...' : 'Оформить заказ'}
      </Button>
    </div>
  );
};
