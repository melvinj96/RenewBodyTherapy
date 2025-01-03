require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Log environment variables (remove in production)
    console.log('Email User exists:', !!process.env.EMAIL_USER);
    console.log('Email Password exists:', !!process.env.EMAIL_APP_PASSWORD);

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