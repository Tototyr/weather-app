import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, temperature, weatherIcon, weatherDescription, date, location }) => (
    <div className="d-flex position-relative p-2">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div
            className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}
        >
            <div>
                <h2 className="font-weight-bold mb-1">{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img
                        width="15"
                        height="20"
                        src={locationIcon}
                        className="location-icon"
                        alt="location pin icon"
                    />
                    <span className="fs-5 m-1">{location}</span>
                </p>
            </div>
            <div>
                <img width="75" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

export default CurrentDay;
