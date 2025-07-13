import nodemailer from 'nodemailer';

export async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password',
    },
  });

  await transporter.sendMail({
    from: '"Playwright Report" <your-email@gmail.com>',
    to: 'recipient@example.com',
    subject: 'Playwright Test Report',
    html: '<p>Tests finished. <a href="cid:report">View Report</a></p>',
    attachments: [{
      filename: 'report.html',
      path: './playwright-report/index.html',
      cid: 'report',
    }],
  });
}
