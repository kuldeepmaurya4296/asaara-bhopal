import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
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
    const { its, mohalla, department, remark } = req.body;

    if (!its || !mohalla || !department) {
      return res.status(400).json({ error: 'ITS, Mohalla, and Department are required.' });
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
      from: `"${its}" <${process.env.EMAIL_USER}>`,
      to: 'kuldeepmaurya4296@gmail.com',
      subject: `New Contact Request: ${department}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #0d4a3a, #1a6b52); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: #d4a843; margin: 0;">New Inquiry — Bhopal Ashara Relay Centre</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a; width: 150px;">ITS Number:</td><td style="padding: 10px 0;">${its}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a;">Mohalla Name:</td><td style="padding: 10px 0;">${mohalla}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0d4a3a;">Department:</td><td style="padding: 10px 0;">${department}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="font-weight: bold; color: #0d4a3a;">Remark:</p>
            <p style="line-height: 1.6; color: #333;">${remark ? remark.replace(/\n/g, '<br>') : 'N/A'}</p>
          </div>
          <p style="text-align: center; font-size: 11px; color: #999; margin-top: 16px;">Sent from Bhopal Ashara Relay Centre Contact Form</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    // Optional: Write to local JSON file for record-keeping
    try {
      // Use os.tmpdir() to work on both local Windows and Vercel serverless
      const os = await import('os');
      const filePath = path.join(os.tmpdir(), 'contacts.json');
      let contacts = [];
      try {
        const fileData = await fs.readFile(filePath, 'utf8');
        if (fileData) contacts = JSON.parse(fileData);
      } catch (err) {
        // File might not exist yet, that's fine
      }
      
      contacts.push({
        its,
        mohalla,
        department,
        remark,
        timestamp: new Date().toISOString()
      });
      
      await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
      console.log('Successfully saved to local JSON file');
    } catch (fsError) {
      console.error('Optional file save failed (normal on Vercel):', fsError);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
}
