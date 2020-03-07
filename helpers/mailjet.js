const emailSender = (payload) => {
  const mailjet = require ('node-mailjet')
  .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
  const request = mailjet;
  return request
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": process.env.SENDER,
            "Name": "Admin"
          },
          "To": [
            {
              "Email": payload.reciever,
              "Name": `${payload.reciever.split('@')[0]}`
            }
          ],
          "Subject": "Greetings from FancyTodo",
          "TextPart": "My first Mailjet email",
          "HTMLPart": `<h3>Dear ${payload.reciever.split('@')[0]}, you just added "${payload.task}" to your todo list`,
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
}
module.exports = emailSender;
