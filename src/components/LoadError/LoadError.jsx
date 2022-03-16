import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './LoadError.module.css';

export const LoadError = ({ className, error, title }) => (
  <section className={cn(className, styles.root)}>
    <h2 className="text text_type_main-large mb-15">{title}</h2>

    <p className="text text_type_main-default pr-20 pl-20">
      Попробуте перезагрузить страницу или&nbsp;вернуться к нам познее
    </p>

    {error && (
      <p className="text text_type_main-default text_color_inactive mt-15">
        {error}
      </p>
    )}
  </section>
);

LoadError.defaultProps = {
  className: null,
  title: 'Приносим свои извенения',
};

LoadError.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string.isRequired,
};
