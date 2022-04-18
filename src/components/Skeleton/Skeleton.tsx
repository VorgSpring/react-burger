import React from 'react';
import cn from 'classnames';
import styles from './Skeleton.module.css';

type Props = {
  className?: string | null;
  width?: string;
  height?: string;
};

export const Skeleton = ({ className = null, width = 'auto', height = 'auto' }: Props) => (
  <div
    className={cn(className, styles.root)}
    style={{ width, height }}
  />
);
