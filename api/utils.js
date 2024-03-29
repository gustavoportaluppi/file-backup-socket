const nodemailer = require('nodemailer');

async function sendEmail({ userId, to, html }) {
  if (!to || !html) {
    return Promise.resolve();
  }

  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to,
    subject: `Changes from ${userId}`,
    html,
  });

  console.log(` > Email with changes from ${userId} sent to ${to}`);

  return Promise.resolve();
}

sendEmail({}).catch(console.error);

exports.sendEmail = sendEmail;