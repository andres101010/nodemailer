import { Router } from 'express';
import recivedSolicitud from '../controllers/solicitud.controllers';

const router = Router();

router.post('/contacto/crear-solicitud', recivedSolicitud);

export default router;
