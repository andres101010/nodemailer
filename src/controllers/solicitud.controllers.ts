import { Request, Response } from "express"
import Solicitud from "../interface/solicitud";
import sendEmail from "../utils/mailer";

const recivedSolicitud = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const { nombre, correo, telefono, solicitud, comentario } = req.body as Solicitud;


        if (!nombre || !correo) {
            res.status(400).json({ message: "El Nombre o el Correo son necesarios!!!" });
            return;
        }


        const info = await sendEmail(req.body);


        res.status(200).json({ message: 'Solicitud Enviada con exito!!!' });
    } catch (error) {
        console.error("Error en recivedSolicitud:", error);
        res.status(500).json({ message: "Error al recibir la solicitud", error });
    }
};


export default recivedSolicitud