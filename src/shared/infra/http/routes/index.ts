import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { chefsRoutes } from './chefs.routes';
import { recipesRoutes } from './recipes.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/chefs', chefsRoutes);
router.use('/recipes', recipesRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
