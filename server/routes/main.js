const sendEmail = require('../services/sendEmail')
const mainRouter = (appInstance) => {
    appInstance.post('/', (req, _res) => {
        console.log('dadadadada', req.body);
        const { transporter, mailOptions } = sendEmail(req.body);
        transporter.sendMail(mailOptions, (error, info) => {
            console.log(mailOptions);
            if(error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    })
}

module.exports = mainRouter;