    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
exports.handler = function (context, event, callback) {
    const { to, subject, body } = event;
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(context.SENDGRID_EMAIL);
    const msg = {
        to: to, // Change to your recipient
        from: context.SENDGRID_EMAIL, // Change to your verified sender
        subject: subject,
        text: body
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent');
        return callback(null, {Status: "success"});
    })
    .catch((error) => {
        console.error(error)
        return callback(null, {Error: error});
    })
};