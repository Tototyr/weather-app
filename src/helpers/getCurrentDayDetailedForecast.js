const currentDayForecast = (data) => [
    {
        name: 'давление',
        value: data.current.pressure_mb,
        unit: 'мм',
    },
    {
        name: 'влажность',
        value: data.current.humidity,
        unit: '%',
    },
    {
        name: 'скорость ветра',
        value: Math.round(data.current.wind_kph),
        unit: 'км/ч',
    },
    {
        name: 'облачность',
        value: data.current.cloud,
        unit: '%',
    },
    {
        name: 'видимость',
        value: data.current.vis_km,
        unit: 'км',
    },
    {
        name: 'порывы ветра',
        value: data.current.gust_kph,
        unit: 'м/c',
    },
    {
        name: 'макс.температура',
        value: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
        unit: '°C',
    },
    {
        name: 'мин.температура',
        value: Math.round(data.forecast.forecastday[0].day.mintemp_c),
        unit: '°C',
    },
];

export default currentDayForecast;
