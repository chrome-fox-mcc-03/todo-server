const axios = require('axios');
const nagerApi = axios.create({
    baseURL: 'https://date.nager.at/'
})

function getHoliday() {
    return nagerApi.get("/api/v2/NextPublicHolidays/ID")
}

function holidayBetween(arrHoliday, due_date, today = new Date()) {
    let result;
    if (typeof due_date === 'string') {
        due_date = new Date(due_date);
    }
    result = arrHoliday.filter(item => {
        let holiDate = new Date(item.date)
        return (holiDate > today && holiDate < due_date);
    })
    result = result.map(item => {
        return {
            date: item.date,
            holiday: item.localName
        }
    })
    return result
}

module.exports = {
    getHoliday,
    holidayBetween
}