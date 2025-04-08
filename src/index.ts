// import app from "./app";
import dotenv from "dotenv";
dotenv.config(); 
import express from 'express';
import crearSolicitud from "./routes/routes"
import cors from 'cors';

const app = express();

app.use(express.json());
// app.use(cors({
//     origin: '*', 
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type']
//   }));

app.use(cors({
  origin: ['http://localhost:5173', 'https://andres101010.github.io/portafolio-front/'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors()); // Habilita preflight para cualquier ruta


app.use(crearSolicitud)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Puerto corriendo en:", PORT);
});
  
  


