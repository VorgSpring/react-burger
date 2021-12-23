import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorOrderDetails.module.css';

export const ErrorOrderDetails = ({ error }) => (
  <section className={`${styles.root} pt-30 pb-30`}>
    <p className="text text_type_main-medium mb-15">
      Приносим свои извенения
    </p>

    <p className="text text_type_main-default mb-2">
      Попробуте создать заказ познее
    </p>

    <p className="text text_type_main-default text_color_inactive">
      {error}
    </p>
  </section>
);

ErrorOrderDetails.propTypes = {
  error: PropTypes.string.isRequired,
};
