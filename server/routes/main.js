const sendEmail = require('../services/sendEmail')
const mainRouter = (appInstance) => {
    appInstance.post('/', (req, _res) => {
        const { transporter, mailOptions } = sendEmail(req.body);
        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.error(error);
            } else {
            }
        })
    })
}

module.exports = mainRouter;