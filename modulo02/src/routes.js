/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';
import fileController from './app/controllers/FileController';
import userController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store); 
routes.post('/sessions', SessionController.store); 

routes.use(authMiddleware);

routes.put('/user', UserController.update); 

routes.get('/providers', userController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), fileController.store);

export default routes;