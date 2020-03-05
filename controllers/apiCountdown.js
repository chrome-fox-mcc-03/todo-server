const axios = require('axios')
const countdownmail = axios.create({
    baseURL: "https://countdownmail.com/api",
    headers: {
        key: "MjQwMDE6MzY2NWYxZTRiNWYxYTZk"
    }
})

class Countdownmail {
    static getCountdown(req, res, next) {
        axios({
            method: 'post',
            url: 'https://countdownmail.com/api/create',
            data: {  
                skin_id: 1,
                name: "Countdown Todo",
                time_end: req.body.time_end,
                time_zone: "Asia\/Jakarta",
                font_family: "monospace",
                color_primary: "FF3A43",
                color_text: "FFFFFF",
                color_bg: "FFFFFF"
            }
        })
        .then(response => {
            res.status(200).json({ data: response.data });
          })
        .catch(err => {
            next(err);
        });

      
    }

}

module.exports = Countdownmail