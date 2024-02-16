import express from 'express';
import { cadastrarWorkshop, filtrarWorkshops } from '../controllers/workshopController'

const router = express.Router();

router.post('/workshops', cadastrarWorkshop);
router.get('/atas', filtrarWorkshops);

export default router;