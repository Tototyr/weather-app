import axios from 'axios';
import { useState } from 'react';

import getCurrentDayForecast from '../../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../../helpers/getUpcomingDaysForecast';

export const useForecast = () => {
    const [isError, setError] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const api = {
        key: 'f681d9af2cd548d7ad7122957231803',
        url: 'http://api.weatherapi.com/v1',
    };

    const getWoeid = async (searchData) => {
        try {
            const { data } = await axios(
                `${api.url}/forecast.json?key=${api.key}&q=${searchData}&days=5&aqi=no&alerts=no&lang=ru`
            );
            return data;
        } catch (error) {
            setError('Такого города не существует');
            setLoading(false);
        }
    };

    const getForecastData = (data) => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);
        const upcomingDays = getUpcomingDaysForecast(data.forecast.forecastday);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

    const submitRequest = async (searchData) => {
        setLoading(true);
        setError(false);

        const data = await getWoeid(searchData);

        getForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;
