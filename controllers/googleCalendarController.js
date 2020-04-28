const axios = require('axios')

const formatDate = require('../helpers/formatDate')

class GoogleCalenderController {
//   static addEvent (req, res, next) {
//     let payload = {
//       start_date : formatDate(new Date()),
//       end_date : formatDate(new Date(req.body.due_date)),
//       title : req.body.title,
//       description : req.body.description
//     }
//     axios({
//       method: 'POST',
//       url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDER_ID}/events`,
//       params: {
//         key: process.env.KEY_GOOGLE_CALENDER,
//       },
//       headers: {
//         "Accept": 'application/json',
//         "Content-Type" : 'application/json',
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
//       },
//       data: {
//         "end": {
//           "date": payload.end_date
//         },
//         "start": {
//             "date": payload.start_date
//         },
//         "description": payload.description,
//         "summary": payload.title,
//         "colorId": 10
//         }
//     })
//       .then(response => {
//         res.status(201).json(response.data)
//       })
//       .catch(next)
//   }
}

module.exports = GoogleCalenderController