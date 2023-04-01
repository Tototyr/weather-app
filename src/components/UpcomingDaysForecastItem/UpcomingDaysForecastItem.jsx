import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ weekday, temperature, icon }) => (
    <li
        className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-0`}
    >
        <img className="mb-1" width="30" alt="" src={icon} />
        <span className="mb-1">{weekday}</span>
        <span className="font-weight-bold">{temperature}</span>
    </li>
);

export default UpcomingDaysForecastItem;
