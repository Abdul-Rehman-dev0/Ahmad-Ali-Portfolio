const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    
   
    to: 'ahmadalisanty@gmail.com', 
    
    replyTo: email,
    subject: `Portfolio Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; color: #1e293b;">
        <h2 style="color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p style="margin-top: 20px;"><strong>Message:</strong></p>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6;">
          ${message}
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent to receiving address: ' + info.response);
      res.status(200).send('Success');
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));