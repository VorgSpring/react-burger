import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks/typedHooks';
import { OrdersTypes } from '../../constants/orders/types';
import { ordersAtionsCreator } from '../../helpers/orders/action';
import { getOrderHistorySelector } from '../../selectors/order';
import { WebSocketTypes } from '../../services/actions/type';
import LoadError from '../LoadError';
import { OrderHistorySkeleton } from './OrderHistorySkeleton';
import OrderOnFeed from '../OrderOnFeed';
import styles from './OrderHistory.module.css';
import { OrderHistoryEmpty } from './OrderHistoryEmpty';
import { getIngredients } from '../../services/operations/ingredients';
import { OrderHistoryDisconnect } from './OrderHistoryDisconnect';

type Props = {
  type: OrdersTypes
};

export const OrderHistory = ({ type }: Props) => {
  const dispatch = useDispatch();
  const {
    orders,
    isOpen,
    isUpdating,
    isClosed,
    isConnecting,
    error,
    isEmpty,
  } = useSelector(
    (store) => getOrderHistorySelector(store, type),
  );

  useEffect(() => {
    if (!isOpen) {
      dispatch(ordersAtionsCreator(type, WebSocketTypes.WS_CONNECTION_START));
    }

    return () => {
      if (isOpen) {
        dispatch(ordersAtionsCreator(type, WebSocketTypes.WS_CONNECTION_CLOSE));
      }
    };
  }, [dispatch, isOpen, type]);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getIngredients());
    }
  }, [dispatch, isEmpty]);

  if (error) {
    return <LoadError error={error} />;
  }

  if (orders === null || isConnecting || isUpdating) {
    return <OrderHistorySkeleton />;
  }

  if (isOpen && isClosed) {
    return <OrderHistoryDisconnect />;
  }

  if (orders.length === 0) {
    return <OrderHistoryEmpty />;
  }

  return (
    <div className={styles.root}>
      {orders.map((order) => (
        <OrderOnFeed
          key={order.id}
          order={order}
          type={type}
          withStatus={type === OrdersTypes.MY}
        />
      ))}
    </div>
  );
};
