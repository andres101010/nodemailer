
const nodemailer = require('nodemailer')
import dotenv from 'dotenv';

dotenv.config();


const sendEmail = async (body: any) => {
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Formulario Web" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: body.solicitud,
    text: body.comentario,
    replyTo: body.correo,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

export default sendEmail;
