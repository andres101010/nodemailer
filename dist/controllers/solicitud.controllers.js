"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = __importDefault(require("../utils/mailer"));
const recivedSolicitud = async (req, res) => {
    try {
        const { nombre, correo, telefono, solicitud, comentario } = req.body;
        if (!nombre || !correo) {
            res.status(400).json({ message: "El Nombre o el Correo son necesarios!!!" });
            return;
        }
        const info = await (0, mailer_1.default)(req.body);
        res.status(200).json({ message: 'Solicitud Enviada con exito!!!' });
    }
    catch (error) {
        console.error("Error en recivedSolicitud:", error);
        res.status(500).json({ message: "Error al recibir la solicitud", error });
    }
};
exports.default = recivedSolicitud;
