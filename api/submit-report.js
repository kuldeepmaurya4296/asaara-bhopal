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
    const reportData = req.body;

    if (!reportData || !reportData.cityName) {
      return res.status(400).json({ error: 'City Name is required.' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing Environment Variables', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS
      });
      return res.status(500).json({ 
        success: false, 
        error: `Server Config Error. Missing SMTP credentials.` 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const jsonString = JSON.stringify(reportData, null, 2);
    const fileName = `${reportData.cityName.toLowerCase().replace(/\s+/g, '_')}_report.json`;

    const mailOptions = {
      from: `"Asaara Bhopal System" <${process.env.EMAIL_USER}>`,
      to: 'kuldeepmaurya4296@gmail.com',
      subject: `New City Report Data: ${reportData.cityName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #0d4a3a, #1a6b52); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: #d4a843; margin: 0;">New City Report Submitted</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333;">A new city report for <strong>${reportData.cityName}</strong> has been submitted.</p>
            <p style="color: #666;">The attached JSON file contains the fully structured data formatted identically to your <code>reportsData.js</code> objects.</p>
            
            <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin:0; font-weight:bold; color: #0d4a3a;">Instructions:</p>
              <ol style="margin-bottom:0; padding-left:20px; color:#444;">
                <li>Download the attached <code>${fileName}</code></li>
                <li>Open it and copy the JSON object</li>
                <li>Paste it directly into the <code>reportsData</code> array in <code>src/data/reportsData.js</code></li>
              </ol>
            </div>
          </div>
          <p style="text-align: center; font-size: 11px; color: #999; margin-top: 16px;">System Generated Notification</p>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          content: jsonString,
          contentType: 'application/json'
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Report Data Email sent:', info.messageId);

    return res.status(200).json({ success: true, message: 'Report data emailed successfully!' });
  } catch (error) {
    console.error('Error sending report email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send report. Please try again.' });
  }
}
