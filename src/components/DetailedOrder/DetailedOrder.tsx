import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from '../../hooks/typedHooks';
import Status from '../OrderStatus';
import Price from '../Price';
import { getOrderSelector } from '../../selectors/order';
import { OrdersTypes } from '../../constants/orders/types';
import styles from './DetailedOrder.module.css';
import { getOrderApi } from '../../api/order';
import { getPreparedOrderData } from '../../helpers/orders/util';
import { getIngredientPriceByIdsSelector } from '../../selectors/ingredients';
import LoadError from '../LoadError';
import Ingredients from './components/Ingredients';
import { DetailedOrderSkeleton } from './DetailedOrderSkeleton';
import { DetailedOrderNotFound } from './DetailedOrderNotFound';
import { TOrders } from '../../types/order';

type LocationState = {
  state: {
    wsType?: OrdersTypes;
  }
};

export const DetailedOrder = () => {
  const location = useLocation();
  const { number } = useParams();

  const { state: locationState } = location as LocationState;
  const wsType = locationState?.wsType;

  const orderByStore = useSelector((store) => (
    getOrderSelector(store, wsType, number)
  ));

  const isNotFound = (orderByStore === null && wsType) || !number;

  const initialState: {
    order: TOrders | null | undefined,
    isLoading: boolean,
    error: null,
  } = {
    order: orderByStore,
    isLoading: false,
    error: null,
  };

  const [state, setState] = useState(initialState);
  const { order, isLoading, error } = state;

  const { price } = useSelector(
    (store) => getIngredientPriceByIdsSelector(store, order?.ingredients),
  );

  useEffect(() => {
    if (!isNotFound && orderByStore === null) {
      setState((oldState) => ({
        ...oldState,
        isLoading: true,
      }));

      getOrderApi(number)
        .then(({ orders }) => {
          const loadedOrder = orders.length !== 0 ? getPreparedOrderData(orders[0]) : undefined;

          setState((oldState) => ({
            ...oldState,
            isLoading: false,
            order: loadedOrder,
          }));
        })
        .catch(({ message }) => {
          setState((oldState) => ({
            ...oldState,
            isLoading: false,
            error: message,
          }));
        });
    }
  }, [isNotFound, number, orderByStore]);

  useEffect(() => {
    setState((oldState) => ({
      ...oldState,
      order: orderByStore,
    }));
  }, [orderByStore]);

  if (isLoading || order === null) {
    return (
      <DetailedOrderSkeleton />
    );
  }

  if (error) {
    return (
      <LoadError error={error} />
    );
  }

  if (isNotFound || order === undefined) {
    return (
      <DetailedOrderNotFound />
    );
  }

  const {
    name,
    status,
    ingredients,
    updatedAt,
  } = order;

  return (
    <div className={cn(styles.root, 'p-10')}>
      <h3 className={cn(styles.number, 'text text_type_digits-default mb-10', { [styles.align_left]: wsType })}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        #{number}
      </h3>

      <h2 className={cn(styles.title, 'text text_type_main-medium mb-3')}>
        {name}
      </h2>

      <Status status={status} className="mb-15" />

      <Ingredients ids={ingredients} />

      <div className={styles.information}>
        <p className={cn(styles.date, 'text text_type_main-default text_color_inactive')}>
          {updatedAt}
        </p>

        {price && <Price value={price} className={styles.price} />}
      </div>
    </div>
  );
};
