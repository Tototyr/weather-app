import { DateTime } from 'luxon';
var dt = DateTime.now();

const getCurrentDayForecast = (data) => ({
    weekday: dt.setLocale('ru').toFormat('cccc'),
    date: dt.setLocale('ru').toFormat('dd MMMM'),
    location: data.location.name,
    temperature: Math.round(data.current.temp_c),
    weatherIcon: data.current.condition.icon,
    weatherDescription: data.current.condition.text,
    cloud: data.current.cloud,
});

export default getCurrentDayForecast;
