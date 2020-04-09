const nodemailer = require('nodemailer');
const mailConfig = require('../configs/mail');

exports.sendMail = (req, res) => {
    
    let transporter = nodemailer.createTransport({
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure === 'True',
        auth: {
            user: mailConfig.username,
            pass: mailConfig.password
        }
    });
    /*
    let transporter = nodeMailer.createTransport({
        host: 'debugmail.io',
        port: 25,
        secure: false,
        auth: {
            user: 'alejandrofloresm@tec.mx',
            pass: '82c35960-7616-11ea-a293-7bfd9a045abd'
        }
    });
    */
    transporter.sendMail({
        from: `${mailConfig.from.name} <${mailConfig.from.email}>`,
        to: 'bill@microsoft.com',
        subject: 'Hola mundo',
        text: 'Mi nombre es Alex',
        html: '<p>Mi nombre es Alex</p>'
    }).then((data) => {
        res.json({message: 'Mensaje enviado'})
    }).catch(error => {
        res.json({ message: 'Mensaje no enviado', error: error})
    })

}