import { Router } from 'express';
import * as userController from '../controllers/user';

export const router: Router = Router({ mergeParams: true });

router.get('/user', userController.index); // User Index
router.get('/user/:id', userController.show); // User Show
router.post('/user', userController.create); // User Create
router.put('/user/:id', userController.update); // User Update
router.delete('/user/:id', userController.destroy); // User Delete