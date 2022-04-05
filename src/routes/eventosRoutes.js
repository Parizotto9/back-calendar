import express from 'express';
import EventoController from '../controllers/eventosController.js';

const router = express.Router();

router
    .get("/eventos", EventoController.listarEventos)
    .post("/eventos", EventoController.cadastrarEvento)
    .put("/eventos/:id", EventoController.atualizarEvento)
    .delete("/eventos/:id", EventoController.excluirEvento)

export default router;