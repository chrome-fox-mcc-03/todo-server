const nodemailer = require('nodemailer');


const sendEmail = (receiver, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: receiver,
        subject: 'Fancy Todos',
        text: `you've created new todo (${message})`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return null;
        } else {
            console.log('Email sent: ' + info.response);
            console.log("Success! Email sent to " + receiver); 
            return "Success! Email sent to " + receiver;
        }
    });
}

module.exports = sendEmail;
