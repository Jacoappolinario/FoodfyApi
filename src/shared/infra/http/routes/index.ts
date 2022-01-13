import { Router } from 'express';

import { chefsRoutes } from './chefs.routes';
import { recipesRoutes } from './recipes.routes';

const router = Router();

router.use('/chefs', chefsRoutes);
router.use('/recipes', recipesRoutes);

export { router };
