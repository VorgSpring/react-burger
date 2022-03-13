import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { createOrder } from '../../../../services/operations/order';
import { orderCreatorSelector } from '../../../../selectors/order';
import { getRefreshToken } from '../../../../helpers/tokens';
import { RoutePaths } from '../../../../constants/routes';
import styles from './OrderCreator.module.css';

export const OrderCreator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isEmpty,
    summaryCost,
    isCreating,
  } = useSelector(orderCreatorSelector);
  const refreshToken = getRefreshToken();

  const handleCreateOrder = () => {
    if (isCreating) {
      return;
    }

    if (!refreshToken) {
      navigate(RoutePaths.LOGIN);
    }

    dispatch(createOrder());
  };

  return (
    <div className={cn(styles.root, 'pr-4', { [styles.creating]: isCreating })}>
      {isEmpty && (
        <p className={cn(styles.empty_oreder, 'text text_type_main-small text_color_inactive pr-4')}>
          Добавте булку и ингредиенты, чтобы совершить заказ
        </p>
      )}

      <div className={cn(styles.price, 'mr-10')}>
        <span className="text text_type_digits-medium mr-2">
          {summaryCost}
        </span>

        <span className={styles.icon}>
          <CurrencyIcon type="primary" />
        </span>
      </div>

      <Button onClick={handleCreateOrder} disabled={isEmpty}>
        Оформить заказ
      </Button>
    </div>
  );
};
