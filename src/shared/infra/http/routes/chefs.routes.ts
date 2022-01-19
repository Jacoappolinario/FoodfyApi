import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateChefController } from '@modules/chefs/useCases/createChef/CreateChefController';
import { DeleteChefController } from '@modules/chefs/useCases/deleteChef/DeleteChefController';
import { ListChefsController } from '@modules/chefs/useCases/listChefs/ListChefsController';
import { UpdateChefController } from '@modules/chefs/useCases/updateChef/UpdateChefController';
import { UpdateChefAvatarController } from '@modules/chefs/useCases/updateChefAvatar/UpdateChefAvatarController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const chefsRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createChefController = new CreateChefController();
const listChefsController = new ListChefsController();
const updateChefController = new UpdateChefController();
const deleteChefController = new DeleteChefController();
const updateChefAvatarController = new UpdateChefAvatarController();

chefsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createChefController.handle,
);

chefsRoutes.get('/', listChefsController.handle);

chefsRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateChefController.handle,
);

chefsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteChefController.handle,
);

chefsRoutes.patch(
  '/:id/avatar',
  uploadAvatar.single('avatar'),
  ensureAuthenticated,
  ensureAdmin,
  updateChefAvatarController.handle,
);

export { chefsRoutes };
