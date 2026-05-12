import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Explicitly check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing Environment Variables', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS
      });
      return res.status(500).json({ 
        success: false, 
        error: `Server Config Error: EMAIL_USER=${!!process.env.EMAIL_USER}, EMAIL_PASS=${!!process.env.EMAIL_PASS}. Please add these in the Vercel Dashboard and REDEPLOY.` 
      });
    }

    // Create transporter for each request (serverless = stateless)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request: ${subject || 'Bhopal Ashara Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #0d4a3a, #1a6b52); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: #d4a843; margin: 0;">New Inquiry — Bhopal Ashara Relay Centre</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a; width: 100px;">Name:</td><td style="padding: 10px 0;">${name}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a;">Email:</td><td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a;">Subject:</td><td style="padding: 10px 0;">${subject || 'N/A'}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="font-weight: bold; color: #0d4a3a;">Message:</p>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="text-align: center; font-size: 11px; color: #999; margin-top: 16px;">Sent from Bhopal Ashara Relay Centre Contact Form</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
}
