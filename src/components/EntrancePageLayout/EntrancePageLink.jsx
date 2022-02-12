import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../constants/routes';
import styles from './EntrancePageLayout.module.css';

export const EntrancePageLink = ({ description, route, text }) => (
  <p key={route} className="text text_type_main-default text_color_inactive mb-4">
    {description}
    <Link to={route} className={`${styles.link} text_color_accent ml-2`}>
      {text}
    </Link>
  </p>
);

EntrancePageLink.propTypes = {
  description: PropTypes.string.isRequired,
  route: PropTypes.oneOf(
    Object.values(RoutePaths),
  ).isRequired,
  text: PropTypes.string.isRequired,
};
