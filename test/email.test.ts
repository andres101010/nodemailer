
// test/solicitudController.test.ts
import recivedSolicitud from '../src/controllers/solicitud.controllers';
import { Request, Response } from 'express';

jest.mock('../src/utils/mailer', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({ messageId: 'mocked-id' }),
}));

describe('Controlador recivedSolicitud', () => {
  const mockReq = (body: any): Request => ({ body } as Request);

  const mockRes = () => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  test('debería responder 200 si todo está correcto', async () => {
    const req = mockReq({
      nombre: 'Juan',
      correo: 'juan@email.com',
      telefono: '123456',
      solicitud: 'Ayuda',
      comentario: 'Soporte urgente',
    });

    const res = mockRes();

    await recivedSolicitud(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Solicitud Enviada con exito!!!' });
  });

  test('debería responder 400 si falta el nombre', async () => {
    const req = mockReq({
      correo: 'juan@email.com',
      telefono: '123456',
      solicitud: 'Ayuda',
      comentario: 'Soporte urgente',
    });

    const res = mockRes();

    await recivedSolicitud(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'El Nombre o el Correo son necesarios!!!' });
  });
});
