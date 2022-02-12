import React from 'react';
import PropTypes from 'prop-types';
import { EntrancePageLink } from './EntrancePageLink';
import styles from './EntrancePageLayout.module.css';

export const EntrancePageLayout = ({ title, links, children }) => (
  <>
    <h1 className={`${styles.title} text text_type_main-medium mb-6`}>
      {title}
    </h1>

    {children}

    <div className={`${styles.links} mt-20`}>
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
    EntrancePageLink.propTypes,
  ).isRequired,
  children: PropTypes.node.isRequired,
};
