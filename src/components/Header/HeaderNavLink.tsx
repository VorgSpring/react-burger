import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { TNavigation } from '../../types/page';
import styles from './Header.module.css';

type Props = TNavigation;

export const HeaderNavLink = ({ title, path, Icon }: Props) => (
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
            {Icon && <Icon type={isActive ? 'primary' : 'secondary'} />}
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
