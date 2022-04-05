import eventos from '../models/Eventos.js';

class EventoController {

    static listarEventos = (req, res) => {
        eventos.find((err, eventos) => {
            res.status(200).json(eventos);
        })
    }

    static cadastrarEvento = (req, res) => {
        let evento = new eventos(req.body);
        evento.save((err) => {
            if(!err){
                res.status(201).send(evento.toJSON())
            } else {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar evento.`})
            }
        })
    }

    static atualizarEvento = (req, res) => {
        let id = req.params.id;
        eventos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Evento atualizado com sucesso!' });
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static excluirEvento = (req, res) => {
        const id = req.params.id;
        eventos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Evento deletado com sucesso!' })
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default EventoController;