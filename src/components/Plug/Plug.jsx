import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Plug.module.css';

export const Plug = ({ title, className }) => (
  <section className={cn(className, styles.root)}>
    <h2 className="text text_type_main-large mb-15">{title}</h2>

    <p className="text text_type_main-default pr-20 pl-20">
      Мы работаем над этим
    </p>
  </section>
);

Plug.defaultProps = {
  className: null,
  title: 'Функциональность дорабатывается',
};

Plug.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
