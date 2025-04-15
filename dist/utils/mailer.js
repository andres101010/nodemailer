"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendEmail = async (body) => {
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
exports.default = sendEmail;
