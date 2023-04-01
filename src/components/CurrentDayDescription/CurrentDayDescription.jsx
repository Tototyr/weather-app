import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem/CurrentDayDescriptionItem';

const CurrentDayDescription = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map((items) => (
                <CurrentDayDescriptionItem {...items} key={items.name} />
            ))}
        </div>
    </div>
);

export default CurrentDayDescription;
