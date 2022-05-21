import React from 'react';
import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import { ProfileNavigationData } from '../../constants/page';
import { RoutePaths } from '../../constants/routes';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => (
  <section className={cn(styles.root, 'pb-10 pt-10')}>
    <nav className={`${styles.tabs} mr-15 mt-20`}>
      {ProfileNavigationData.map(({ path, title }) => (
        <NavLink
          key={path}
          to={path}
          end={path !== RoutePaths.ORDERS}
          className={({ isActive }) => cn(styles.link, 'text text_type_main-medium pb-4 pt-4', {
            text_color_primary: isActive,
            [styles.link_inactive]: !isActive,
            text_color_inactive: !isActive,
          })}
        >
          {title}
        </NavLink>
      ))}

      <p className={cn(styles.description, 'text text_color_inactive text_type_main-default mt-20')}>
        В этом разделе вы можете изменить&nbsp;свои персональные данные
      </p>
    </nav>

    <Outlet />
  </section>
);
