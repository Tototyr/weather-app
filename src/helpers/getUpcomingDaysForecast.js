import moment from 'moment';
import 'moment/dist/locale/ru';
moment.locale('ru');

const getUpcomingDaysForecast = (data) => {
    return data.slice(1).map((day) => ({
        icon: day.day.condition.icon,
        temperature: Math.round(day.day.avgtemp_c),
        weekday: moment(day.date).locale('ru').format('dd'),
    }));
};

export default getUpcomingDaysForecast;
