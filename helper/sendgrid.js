const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendGrid(userEmail) {
    const msg = {
      to: userEmail,
      from: 'andreasnw93@gmail.com',
      subject: 'Welcome to Fancy Todo',
      text: `Congratulation, you've been registered to fancy to-do`,
      html: `<strong>Congratulation, you've been registered to fancy to-do</strong>`,
    };
    
    sgMail.send(msg);
}

module.exports = sendGrid;