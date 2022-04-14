import React from 'react';
import cn from 'classnames';
import { EntrancePageLink } from './EntrancePageLink';
import { TPage } from '../../types/page';
import styles from './EntrancePageLayout.module.css';

type Props = TPage & {
  children: React.ReactNode;
}

export const EntrancePageLayout = ({ title, links, children }: Props) => (
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
