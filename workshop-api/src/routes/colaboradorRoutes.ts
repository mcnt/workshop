// src/routes/colaboradorRoutes.ts

import express from 'express';
import { cadastrarColaborador, listarColaboradores } from '../controllers/colaboradorController';

const router = express.Router();

router.post('/colaboradores', cadastrarColaborador);
router.get('/colaboradores', listarColaboradores);


export default router;
