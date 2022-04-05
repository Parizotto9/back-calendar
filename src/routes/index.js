import express from 'express';
import eventos from './eventosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: 'Rota funcionando normalmente'})
    })

    app.use(
        express.json(),
        eventos
    )
}

export default routes;