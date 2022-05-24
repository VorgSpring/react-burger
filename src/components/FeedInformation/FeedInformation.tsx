import React, { useEffect } from 'react';
import { OrdersTypes } from '../../constants/orders/types';
import { ordersAtionsCreator } from '../../helpers/orders/action';
import { useDispatch, useSelector } from '../../hooks/typedHooks';
import { getOrdersStoreSelector } from '../../selectors/order';
import { WebSocketTypes } from '../../services/actions/type';
import Feeds from './components/Feeds';
import styles from './FeedInformation.module.css';
import { FeedInformationSkeleton } from './FeedInformationSkeleton';

export const FeedInformation = () => {
  const dispatch = useDispatch();
  const {
    total,
    totalToday,
    isOpen,
    isUpdating,
    isClosed,
    isConnecting,
    error,
  } = useSelector(
    (store) => getOrdersStoreSelector(store, OrdersTypes.ALL),
  );

  useEffect(() => {
    if (!isOpen) {
      dispatch(ordersAtionsCreator(OrdersTypes.ALL, WebSocketTypes.WS_CONNECTION_START));
    }

    return () => {
      if (isOpen) {
        dispatch(ordersAtionsCreator(OrdersTypes.ALL, WebSocketTypes.WS_CONNECTION_CLOSE));
      }
    };
  }, [dispatch, isOpen]);

  if (error || (isOpen && isClosed)) {
    return null;
  }

  if (totalToday === null || total === null || isConnecting || isUpdating) {
    return <FeedInformationSkeleton />;
  }

  return (
    <div className={styles.root}>
      <Feeds className="mb-15" />

      <p className="text text_type_main-medium">
        Выполнено за все время:
      </p>

      <p className="text text_type_digits-large mb-15">
        {total}
      </p>

      <p className="text text_type_main-medium">
        Выполнено за сегодня:
      </p>

      <p className="text text_type_digits-large">
        {totalToday}
      </p>
    </div>
  );
};
