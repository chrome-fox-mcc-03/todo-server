module.exports = {
    checkDate: (date) => {
        if(date > new Date()) {
            return true
        } else {
            return false 
        }
    //    console.log(String(date))
    // console.log('masuk helper checkdate')
    }
}