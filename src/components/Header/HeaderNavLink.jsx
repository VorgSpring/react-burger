import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { RoutePaths } from '../../constants/routes';
import styles from './Header.module.css';

export const HeaderNavLink = ({ title, path, Icon }) => (
  <li key={path} className="mr-2">
    <NavLink
      to={path}
      className={({ isActive }) => cn(styles.navigation_link, 'pl-4 pr-5 pt-4 pb-5', {
        [styles.navigation_link_inactive]: !isActive,
      })}
    >
      {({ isActive }) => (
        <>
          <span className="mr-2">
            <Icon type={isActive ? 'primary' : 'secondary'} />
          </span>

          <span
            className={cn(
              'text text_type_main-default',
              isActive ? 'text_color_primary' : 'text_color_inactive',
            )}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  </li>
);

HeaderNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.oneOf(
    Object.values(RoutePaths),
  ).isRequired,
  Icon: PropTypes.func.isRequired,
};
