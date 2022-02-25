import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsTypes } from '../../../../constants/ingredients';
import styles from './Tabs.module.css';

export const Tabs = ({ currentTab, onChoiceTab }) => (
  <div className={cn(styles.root, 'mb-10')}>
    {Object.keys(IngredientsTypes).map((type) => (
      <Tab
        key={`${type}tab`}
        value={type}
        active={currentTab === type}
        onClick={onChoiceTab}
      >
        {IngredientsTypes[type]}
      </Tab>
    ))}
  </div>
);

Tabs.propTypes = {
  currentTab: PropTypes.oneOf(
    Object.keys(IngredientsTypes),
  ).isRequired,
  onChoiceTab: PropTypes.func.isRequired,
};
