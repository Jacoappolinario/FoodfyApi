import { Router } from 'express';

import { chefsRoutes } from './chefs.routes';

const router = Router();

router.use('/chefs', chefsRoutes);

export { router };
