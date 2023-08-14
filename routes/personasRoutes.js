import express from 'express';
import personasController from '../app/Controllers/personasController.js';
const router = express.Router();

router.get('/personas', personasController.getAllPersonas);
router.get('/personas/:id', personasController.getPersonaById);
router.post('/personas', personasController.createPersona);
router.put('/personas/:id', personasController.updatePersona);
router.delete('/personas/:id', personasController.deletePersona);

export default router;
