import { Router } from 'express';
import * as groupController from '../controllers/group';

export const router: Router = Router({ mergeParams: true });

router.use(groupController.authorization);
router.get('/', groupController.index);
router.get('/:id', groupController.show);
router.post('/', groupController.create);
router.put('/:id', groupController.update);
router.delete('/:id', groupController.destroy);