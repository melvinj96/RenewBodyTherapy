require('dotenv').config();
const nodemailer = require('nodemailer');

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',  // Always allow localhost during development
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const validateRequest = (data) => {
  const { firstName, lastName, email, phone, service, date, notes, sex, dob, handedness, 'bot-field': botField } = data;

  // Check for honeypot
  if (botField) return false;

  // Validate required fields (notes is optional)
  if (!firstName || !lastName || !email || !phone || !service || !date || !sex || !dob || !handedness) return false;

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
    console.log('Received form data:', JSON.stringify(data, null, 2));
    
    if (!validateRequest(data)) {
      console.log('Validation failed for data:', JSON.stringify(data, null, 2));
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

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 20px;">
          <h2 style="background: #11111F; color: #E67E22; padding: 10px; border-radius: 8px 8px 0 0; text-align: center;">New Appointment Request - ${firstName} ${lastName}</h2>
          <div style="padding: 20px; color: #333;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Sex:</strong> ${sex}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Contraindications:</strong> ${(contraindications || []).join(', ')}</p>
            <p><strong>Additional Contraindications:</strong> ${(contraindications2 || []).join(', ')}</p>
            <p><strong>Personal Problems:</strong> ${(personalProblems || []).join(', ')}</p>
            <p><strong>Current Medications:</strong> ${currentMedications}</p>
            <p><strong>Allergies:</strong> ${allergies}</p>
            <p><strong>Exercise Information:</strong> ${exerciseInformation}</p>
            <p><strong>Handedness:</strong> ${handedness}</p>
            <p><strong>Notes:</strong> ${notes || 'No additional notes provided'}</p>
            <p><strong>Consent to photo/video content for promotional purposes:</strong> ${disclaimer && disclaimer.consentToMedia ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    `;

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