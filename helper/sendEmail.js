const axios = require('axios').default;


function sendEmail(email) {
    axios({
            url: "https://fancytodo-d9e2.restdb.io/mail",
            method: "POST",
            headers: {
                "x-apikey": process.env.sendEmail
            },
            data: {
                to: email,
                subject: "Wellcome to Fancy Todo",
                html: `<p>thank you for joining us</P><br><img src="https://image.freepik.com/free-photo/hands-holding-word-welcome_53876-21131.jpg">`,
                company: "Fancy Todo Inc",
                sendername: "Fancy Todo Inc"
            }
        })
        .catch(err => {
            console.log(err);

        })
}

module.exports = sendEmail