import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Optional size limit for the request body
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Make sure the body is parsed properly before accessing it
  const { email, subject, message } = req.body;

  // If any required field is missing, return an error
  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use your email address
      pass: process.env.EMAIL_PASS, // Use your email app password
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL_USER, // Your email to receive messages
    subject: subject,
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
