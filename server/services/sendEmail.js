const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join('/', path.dirname(__dirname), '../', '/.env') });


const sendEmailService = (data
) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    console.log(data);
    const mailOptions = {
        from: data['fromEmail'],
        to: process.env.EMAIL,
        subject: data['name'],
        text: data['text'],
    }

    return { transporter, mailOptions };
}

module.exports = sendEmailService;