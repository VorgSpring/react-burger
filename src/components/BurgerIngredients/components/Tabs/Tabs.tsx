import React from 'react';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsTypesData, IngredientsTypes } from '../../../../constants/ingredients';
import styles from './Tabs.module.css';

type Props = {
  currentTab: IngredientsTypes;
  onChoiceTab: (value: string) => void
}

export const Tabs = ({ currentTab, onChoiceTab }: Props) => (
  <div className={cn(styles.root, 'mb-10')}>
    {Object.keys(IngredientsTypes).map((type) => (
      <Tab
        key={`${type}tab`}
        value={type}
        active={currentTab === type}
        onClick={onChoiceTab}
      >
        {IngredientsTypesData[type as IngredientsTypes]}
      </Tab>
    ))}
  </div>
);
