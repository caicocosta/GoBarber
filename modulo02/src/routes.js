/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';
import fileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store); 
routes.post('/sessions', SessionController.store); 

routes.use(authMiddleware);

routes.put('/user', UserController.update); 
routes.post('/files', upload.single('file'), fileController.store);

export default routes;