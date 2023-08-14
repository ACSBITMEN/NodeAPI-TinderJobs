import express from 'express';
import pagosController from '../app/Controllers/pagosController'; // Asegúrate de agregar la extensión .js
const router = express.Router();

// Ruta para obtener todos los pagos
router.get('/pagos', pagosController.getAllPagos);

// Ruta para obtener un pago por ID
router.get('/pagos/:id', pagosController.getPagoById);

// Ruta para crear un nuevo pago
router.post('/pagos', pagosController.createPago);

// Ruta para actualizar un pago
router.put('/pagos/:id', pagosController.updatePago);

// Ruta para eliminar un pago
router.delete('/pagos/:id', pagosController.deletePago);

export default router;
