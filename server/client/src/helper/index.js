import moment from 'moment-jalaali'

export function jalaliDateToTimestamp(jalaliDate) {
    //{day: 1, month: 5, year: 1398}
    console.log(jalaliDate);
    if (jalaliDate) {
        const {year, month, day} = jalaliDate;
        if (day && month && year) {
            let timestamp = new Date(moment(`${year}/${month}/${day}`, 'jYYYY/jM/jD').format('YYYY-M-D')).getTime();
            return timestamp;
        }
    }
    return null;
}

export function timestampDateTojalali(timestamp) {
    if (timestamp) {

        let date = new Date(timestamp);
        return {day: parseInt(moment(date).format('jD')), month: parseInt(moment(date).format('jM')), year: parseInt(moment(date).format('jYYYY'))};

    }
    return null;
}
