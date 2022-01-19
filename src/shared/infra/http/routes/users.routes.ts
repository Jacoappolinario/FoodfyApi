import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUsersController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createUserController.handle,
);
usersRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle,
);

usersRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateUserController.handle,
);
usersRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle,
);

export { usersRoutes };
