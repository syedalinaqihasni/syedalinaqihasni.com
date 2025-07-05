import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import * as z from 'zod';

// Validation schema
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

// Gmail OAuth2 Setup
const OAuth2 = google.auth.OAuth2;

export async function POST(request) {
  try {
    const body = await request.json();
    const data = formSchema.parse(body);

    // Setup OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID || '972423782282-ttpjr5cogtfh7ln60mhtjgo05t5cl5me.apps.googleusercontent.com',
      process.env.GOOGLE_CLIENT_SECRET || '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',
      'https://developers.google.com/oauthplayground' // redirect URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN || '1//047KpioMvWZomCgYIARAAGAQSNwF-L9IrA2lw4E2FlDkAAHymeja1GER9kvlFKJNEl8zP1JPNBMKHxNduHSLuMcpk8GkaFKxjXz0',
    });

    let accessTokenResponse = await oauth2Client.getAccessToken();
    let accessToken = typeof accessTokenResponse === 'string'
      ? accessTokenResponse
      : accessTokenResponse?.token || accessTokenResponse?.access_token;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER || 'engr.syedalinaqihasni@gmail.com',
        accessToken: accessToken || 'ya29.a0AS3H6Nw8JvRh74wWiRDyQ-OR7Onp37gwzDI78Zx7jfKR1WjGRRWr87jYywf-A-0HkaYW0hV8FVJ0ZcGU2VidibzJQYFSkRVqn8THl-zYsUK74ja-RP5OBpa7MJJCjGbXrbFe0r6f7c8JoD3cOP_XsDzVNkrSzHzPmbcXcTVoaCgYKAT0SARYSFQHGX2MiXr2fB8I8Rb_aECb7-rht3Q0175',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '1//047KpioMvWZomCgYIARAAGAQSNwF-L9IrA2lw4E2FlDkAAHymeja1GER9kvlFKJNEl8zP1JPNBMKHxNduHSLuMcpk8GkaFKxjXz0',
        accessToken: token || 'ya29.a0AS3H6Nw8JvRh74wWiRDyQ-OR7Onp37gwzDI78Zx7jfKR1WjGRRWr87jYywf-A-0HkaYW0hV8FVJ0ZcGU2VidibzJQYFSkRVqn8THl-zYsUK74ja-RP5OBpa7MJJCjGbXrbFe0r6f7c8JoD3cOP_XsDzVNkrSzHzPmbcXcTVoaCgYKAT0SARYSFQHGX2MiXr2fB8I8Rb_aECb7-rht3Q0175',
      },
    });

    // ======================
    // 📥 Send to Admin Email
    // ======================
    await transporter.sendMail({
      from: `"${data.name}" <engr.syedalinaqihasni@gamil.com>`,
      to: process.env.EMAIL_USER || 'engr.syedalinaqihasni@gmail.com',
      subject: `New Contact Form: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; background: #ffffff; color: #333; max-width:600px; margin:auto; border:1px solid #eee;">
          <img src="${process.env.BRAND_LOGO_URL || 'https://via.placeholder.com/150'}" alt="Logo" style="max-width: 120px; margin-bottom: 20px;" />
          <h2>📩 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 10px 15px; border-radius: 5px; border: 1px solid #ddd; white-space: pre-line;">
            ${data.message}
          </div>
          <hr style="margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">Sent from ${process.env.SITE_NAME || 'your website'} contact form</p>
        </div>
      `,
    });

    // ===========================
    // 🤖 Auto-reply to User Email
    // ===========================
    await transporter.sendMail({
      from: `"${process.env.SITE_NAME || 'Syed Ali Naqi Hasni'}" <${process.env.EMAIL_USER || "engr.syedalinaqihasni@gamil.com"}>`,
      to: data.email,
      subject: `Thanks for contacting ${process.env.SITE_NAME || 'me'}!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f6f6f6; border-radius: 8px; max-width: 600px; margin: auto;">
          <img src="${process.env.BRAND_LOGO_URL || 'https://via.placeholder.com/150'}" alt="Logo" style="max-width: 120px; margin-bottom: 20px;" />
          <h2 style="color: #333;">Hi ${data.name},</h2>
          <p style="color: #555;">Thanks for reaching out! I’ve received your message and will get back to you shortly.</p>
          <p style="color: #555;"><strong>Your message:</strong></p>
          <div style="background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee; white-space: pre-line;">
            ${data.message}
          </div>
          <p style="margin-top: 30px; color: #888; font-size: 12px;">This is an automated confirmation from ${process.env.SITE_NAME || 'my personal website'}.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
