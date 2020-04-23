import { Router } from 'express';
import * as groupController from '../controllers/group';

export const router: Router = Router ({ mergeParams: true });

router.get('/groups', groupController.index); // Group Index
router.get('/groups/:id', groupController.show); // Group Show
router.post('/groups', groupController.create); // Group Create
router.put('/groups/:id', groupController.update); // Group Update
router.delete('/groups/:id', groupController.destroy); // Group Delete