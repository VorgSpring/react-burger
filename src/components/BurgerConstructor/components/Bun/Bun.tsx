import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../../../hooks/typedHooks';
import { BunEmpty } from './BunEmpty';
import { getBunSelector } from '../../../../selectors/burger';
import {
  ConstructorBunTypes,
  ConstructorBunAdditionalStyle,
  ConstructorBunAdditionalText,
} from '../../../../constants/constructor';
import styles from './Bun.module.css';

type Props = {
  type: ConstructorBunTypes
};

export const Bun = ({ type }: Props) => {
  const bun = useSelector(getBunSelector);

  if (!bun) {
    return (
      <BunEmpty type={type} />
    );
  }

  const { name, price, image } = bun;

  return (
    <div className={`${styles.root} ${ConstructorBunAdditionalStyle[type]} pr-4`}>
      <ConstructorElement
        type={type}
        isLocked
        text={`${name} ${ConstructorBunAdditionalText[type]}`}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};
