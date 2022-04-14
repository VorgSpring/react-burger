import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import {TLink} from '../../types/page';
import styles from './EntrancePageLayout.module.css';

export const EntrancePageLink = ({ description, route, text }: TLink) => (
  <p key={route} className="text text_type_main-default text_color_inactive mb-4">
    {description}
    <Link
      to={route}
      className={cn(styles.link, 'text_color_accent ml-2')}
    >
      {text}
    </Link>
  </p>
);
