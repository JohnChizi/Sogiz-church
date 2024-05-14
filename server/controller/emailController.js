const { text } = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config();

const transporter = nodemailer.createTransport({
    
    service: 'Gmail',
    host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_SENDER_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },

})


exports.sendEmail = (req, res) => {
    const {firstname, lastname, phoneNumber, email, message} = req.body
    // console.log(process.env.SMTP_SENDER_MAIL);

    // console.log(`My name is ${firstname} ${lastname}. These are my details: `)
    // console.log(`phone number: ${phoneNumber}, email: ${email}`)
    // console.log(`This is my message to you: ${message}`)

    const mailOptions = {
        // from: email, // not too relevant as SMTP_SENDER_MAIL is the default
        // // from: email,
        // from: `${firstname} ${lastname} <${process.env.SMTP_SENDER_MAIL}>`,
        from: `${firstname} ${lastname} <${email}>`,
        to: process.env.SMTP_RECEIVER_MAIL,
        subject: 'Feedback from SOGIZ Website',
        text: `
            First Name: ${firstname}\n
            Last Name: ${lastname}\n
            Number: ${phoneNumber}\n
            Email: ${email}\n
            Message: ${message}
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
        }
        else{
            res.status(200).send({
                successs: info.accepted,
                message: 'Email sent successfully',
                info: info.messageId
            })
            console.log('Email sent successfully');
        }
    })
}

function validatePhoneNumber(req, res, next) {
    const phoneNumber = req.body.phoneNumber; // Assuming the phone number is sent in the request body

    // Regular expression for a basic phone number format (e.g., +1234567890)
    const phoneRegex = /^\+\d{1,3}\d{6,14}$/;

    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
    }

    // If the phone number is valid, proceed to the next middleware
    next();
}

exports.validation = (req, res, next) => {
    const {email, phoneNumber, firstname, lastname, message} = req.body;
    
    
    const userDetails = {email, phoneNumber, firstname, lastname, message}
    const fields = [];
    for (const details in userDetails) {
        if(userDetails[details] === ""){
            fields.push(details)
        }
    }

    if(fields.length > 0) {
        return res.status(400).json({ 
            message: 'missing fields required',
            missingFields: fields
        });
    }

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for basic number validation (between 10-15 digits)
    const phoneRegex = /^\d{10,15}$/;
    // const phoneRegexWithPlus = /^\+\d{1,3}\d{6,14}$/;

    if ((!email || !emailRegex.test(email)) && (!phoneNumber || !phoneRegex.test(phoneNumber))) {
        return res.status(400).json({ emailError: 'Invalid email address', phoneNumberError: 'Invalid phone number format' });
      }

    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ emailError: 'Invalid email address' });
        // const message = "Invalid email address";
        // // let err = {message: "Invalid email address"}
        // const error = new CustomError(message, 400);
        // next(error);
    }
    
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ phoneNumberError: 'Invalid phone number format' });
    }

    
    
  
  

    // If the email, password and confirm password is valid, pass control to the next middleware or route handler
    next();
}