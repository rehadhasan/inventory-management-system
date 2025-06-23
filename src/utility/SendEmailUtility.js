const nodemailer = require('nodemailer');

const SendEmailHelper = async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'mail.rehadhasan.com',
        port: 465,
        secure: true,
        auth: {
            user: "noreplay@rehadhasan.com",
            pass: 'kl-IB5kTnH)w'
        },
    });


    let mailOptions = {
        from: 'Inventory Email Verification <noreplay@rehadhasan.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };


    return  await transporter.sendMail(mailOptions)

}
module.exports = SendEmailHelper;