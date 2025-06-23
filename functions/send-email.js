require('dotenv').config();
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',  // Always allow localhost during development
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const validateRequest = (data) => {
  const { firstName, lastName, email, phone, service, date, notes, 'bot-field': botField } = data;

  // Check for honeypot
  if (botField) return false;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !service || !date || !notes) return false;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  return true;
};

exports.handler = async (event) => {
  // Handle OPTIONS request (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: 'Method Not Allowed' 
    };
  }

  try {
    const data = JSON.parse(event.body);
    if (!validateRequest(data)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid form submission' })
      };
    }

    const { 
      firstName, lastName, email, phone, service, date, notes, 
      sex, dob, contraindications, contraindications2, 
      personalProblems, currentMedications, allergies, 
      exerciseInformation, handedness, disclaimer 
    } = JSON.parse(event.body);

    const templatePath = path.join(__dirname, 'emailTemplate.html');
    console.log('Template path:', templatePath);
    const template = fs.readFileSync(templatePath, 'utf-8');
    const htmlContent = ejs.render(template, {
      firstName, lastName, email, phone, service, date, notes,
      sex, dob, contraindications, contraindications2,
      personalProblems, currentMedications, allergies,
      exerciseInformation, handedness, disclaimer
    });

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
      subject: 'New Appointment Request - ' + firstName + ' ' + lastName,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Detailed error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Failed to send email',
        error: error.message,
        stack: error.stack
      })
    };
  }
};