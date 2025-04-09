import dotenv from 'dotenv';
import express, { Router } from 'express';
import cors from 'cors';

var __async$1 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
dotenv.config();
const getNodemailer = () => __async$1(void 0, null, function* () {
  const nodemailer = yield import('nodemailer');
  return nodemailer.default || nodemailer;
});
const sendEmail = (body) => __async$1(void 0, null, function* () {
  const nodemailer = yield getNodemailer();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  const mailOptions = {
    from: `"Formulario Web" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: body.solicitud,
    text: body.comentario,
    replyTo: body.correo
  };
  const info = yield transporter.sendMail(mailOptions);
  return info;
});

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const recivedSolicitud = (req, res) => __async(void 0, null, function* () {
  try {
    const { nombre, correo, telefono, solicitud, comentario } = req.body;
    if (!nombre || !correo) {
      res.status(400).json({ message: "El Nombre o el Correo son necesarios!!!" });
      return;
    }
    const info = yield sendEmail(req.body);
    res.status(200).json({ message: "Solicitud Enviada con exito!!!" });
  } catch (error) {
    console.error("Error en recivedSolicitud:", error);
    res.status(500).json({ message: "Error al recibir la solicitud", error });
  }
});

const router = Router();
router.post("/contacto/crear-solicitud", recivedSolicitud);

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://andres101010.github.io/portafolio-front/"],
  methods: ["GET", "POST", "OPTIONS"]
}));
app.use(router);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Puerto corriendo en:", PORT);
});
