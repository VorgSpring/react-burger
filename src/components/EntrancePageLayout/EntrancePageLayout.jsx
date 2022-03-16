import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { EntrancePageLink } from './EntrancePageLink';
import styles from './EntrancePageLayout.module.css';

export const EntrancePageLayout = ({ title, links, children }) => (
  <>
    <h1 className={cn(styles.title, 'text text_type_main-medium mb-6')}>
      {title}
    </h1>

    <div className={styles.form}>
      {children}
    </div>

    <div className={cn(styles.links, 'mt-20')}>
      {links.map(({ description, route, text }) => (
        <EntrancePageLink
          key={route}
          description={description}
          route={route}
          text={text}
        />
      ))}
    </div>
  </>
);

EntrancePageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape(
      EntrancePageLink.propTypes,
    ).isRequired,
  ).isRequired,
  children: PropTypes.node.isRequired,
};
