const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const {EMAIL , PASSWORD} =  require('../env.js')

const signup = (req, res) => {
  res.status(201).json('Signup Successfully...!');
};

const getbill = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // user: '', // your Gmail account
            user: EMAIL,
            // pass: ''     // your Gmail App Password
            pass: PASSWORD
        }
    });
    
    // Setup email data
    let mailOptions = {
        from: '"Prafull Kamal" <kamalprafull9@gmail.com>', // sender address
        to: 'pkamal2002@gmail.com',          // list of receivers
        subject: 'Hello ✔',                        // Subject line
        text: 'Hello world?',                      // plain text body
        html: '<b>Hello world?</b>'                // html body
    };
    
    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
};

module.exports = {
  signup,
  getbill
};
