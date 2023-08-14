import express from 'express';
import trabajosController from '../app/Controllers/trabajosController.js';
const router = express.Router();

router.get('/trabajos', trabajosController.getAllTrabajos);
router.post('/trabajos', trabajosController.createTrabajo);

export default router;
