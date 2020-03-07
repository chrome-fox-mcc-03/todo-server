const axios = require('axios')

class GoogleCalenderController {
  static addEvent (req, res, next) {
    let payload = {
      start_date : new Date(),
      end_date : req.body.due_date,
      title : req.body.title,
      description : req.body.description
    }
    axios({
      method: 'POST',
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDER_ID}/events`,
      params: {
        key: process.env.KEY_GOOGLE_CALENDER,
      },
      headers: {
        "Content-Type" : 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      },
      data: {
        "end": {
          "date": "2020-03-10"
        },
        "start": {
            "date": "2020-03-08"
        },
        "description": "HARI SABTU",
        "summary": "TESTING",
        "colorId": 10
        }
    })
      .then(response => {
        res.status(201).json(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = GoogleCalenderController