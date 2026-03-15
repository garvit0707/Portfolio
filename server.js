import express from 'express';
import cors from 'cors';
import emailjs from '@emailjs/nodejs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const result = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      {
        name,
        email,
        subject,
        message
      },
      {
        publicKey: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY
      }
    );

    console.log("Email sent:", result.status);

    res.json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {
    console.error("EmailJS Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

console.log("actively port defined is here",PORT)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});