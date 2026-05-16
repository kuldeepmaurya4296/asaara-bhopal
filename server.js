import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';
import submitReportHandler from './api/submit-report.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route — uses the same handler as Vercel serverless
app.post('/api/contact', (req, res) => contactHandler(req, res));
app.post('/api/submit-report', (req, res) => submitReportHandler(req, res));

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
