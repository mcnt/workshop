// src/routes/ataRoutes.ts

import express from 'express';
import { adicionarColaboradorAta, removerColaboradorAta, criarAta } from '../controllers/ataController';

const router = express.Router();

router.put('/atas/:ataId/colaboradores/:colaboradorId', adicionarColaboradorAta);
router.delete('/atas/:ataId/colaboradores/:colaboradorId', removerColaboradorAta);
router.post('/atas', criarAta);

export default router;
