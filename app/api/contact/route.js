import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const data = formSchema.parse(body);

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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
