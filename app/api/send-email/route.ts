
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Nastavení SMTP transportéru s Mailgun
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: process.env.MAILGUN_USER, // Přihlašovací údaje z .env
      pass: process.env.MAILGUN_PASS,
    },
  });

  // Nastavení emailu
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Tvůj email pro přijetí zprávy
    subject: `Nová zpráva od ${name}`,
    text: `
      Jméno: ${name}
      Email: ${email}
      Telefon: ${phone}
      Zpráva: ${message}
    `,
  };

  try {
    // Odeslání emailu
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email odeslán.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Nepodařilo se odeslat email.' }, { status: 500 });
  }
}
