import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { createOrder } from '../../../../services/operations/order';
import { getSum } from '../../../../helpers/burger';
import styles from './OrderCreator.module.css';

export const OrderCreator = () => {
  const dispatch = useDispatch();

  const {
    isCreatingOrder,
    isEmptyOrder,
    orderSum,
    orderCreating,
  } = useSelector((store) => ({
    isCreatingOrder: store.order.isCreating,
    isEmptyOrder: !store.burger.bun || !store.burger.ingredients.length,
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
      {isEmptyOrder && (
        <p className={`${styles.empty_oreder} text text_type_main-small text_color_inactive pr-4`}>
          Добавте булку и ингредиенты, чтобы совершить заказ
        </p>
      )}

      <div className={`${styles.price} mr-10`}>
        <span className="text text_type_digits-medium mr-2">
          {orderSum}
        </span>

        <span className={styles.icon}>
          <CurrencyIcon type="primary" />
        </span>
      </div>

      <Button onClick={handleCreateOrder} disabled={isCreatingOrder || isEmptyOrder}>
        <span className={styles.button_content}>
          {orderCreating ? 'Подождите...' : 'Оформить заказ'}
        </span>
      </Button>
    </div>
  );
};
