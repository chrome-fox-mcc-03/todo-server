module.exports = function dated () {
    var today = new Date()
    var day = String(today.getDate())
    var mounth = String(today.getMonth())
    var year = String(today.getFullYear())
    const date = year + '-' + mounth + '-' + day
    console.log(date)
    return date
}