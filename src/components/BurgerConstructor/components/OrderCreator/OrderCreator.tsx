import React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../../../hooks/typedHooks';
import { createOrder } from '../../../../services/operations/order';
import { orderCreatorSelector } from '../../../../selectors/order';
import { getRefreshToken } from '../../../../helpers/tokens';
import { RouteNames, RoutePaths } from '../../../../constants/routes';
import styles from './OrderCreator.module.css';
import Price from '../../../Price';

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
      navigate(RoutePaths[RouteNames.LOGIN]);
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

      <Price value={summaryCost} size="medium" className="mr-10" />

      {/* @ts-ignore: Ошибка библиотеки */}
      <Button onClick={handleCreateOrder} disabled={isEmpty}>
        Оформить заказ
      </Button>
    </div>
  );
};
