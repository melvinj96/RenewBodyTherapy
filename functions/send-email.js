require('dotenv').config();
const nodemailer = require('nodemailer');

const validateRequest = (data) => {
  const { name, email, phone, service, date, notes, 'bot-field': botField } = data;

  // Check for honeypot
  if (botField) return false;

  // Validate required fields
  if (!name || !email || !phone || !service || !date || !notes) return false;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  return true;
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {

    const data = JSON.parse(event.body);
    if (!validateRequest(data)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid form submission' })
      };
    }

    const { name, email, phone, service, date, notes } = JSON.parse(event.body);

    // Create transporter with debug logging
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      },
      debug: true, // Enable debug logging
      logger: true // Enable logger
    });

    // Verify transporter
    await transporter.verify();
    console.log('Transporter verified successfully');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      bcc: process.env.BCC_EMAIL,
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Detailed error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send email',
        error: error.message,
        stack: error.stack
      })
    };
  }
};