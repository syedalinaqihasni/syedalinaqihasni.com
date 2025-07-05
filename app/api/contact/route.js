import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export default async function handler(
  req,
  res
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = formSchema.parse(req.body);

    // Configure the transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'engr.syedalinaqihasni@gmail.com', // Your Gmail address
        pass: process.env.EMAIL_PASS || "lljn kmpg zywu dvha", // App password from Google (not your Gmail password)
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
You have a new contact form submission:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
