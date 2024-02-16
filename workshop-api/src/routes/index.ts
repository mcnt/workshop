// src/routes/index.ts

import express from 'express';
import colaboradorRouter from './colaboradorRoutes';
import ataRouter from './ataRoutes';

const router = express.Router();

router.use(colaboradorRouter);
router.use(ataRouter);

export default router;
