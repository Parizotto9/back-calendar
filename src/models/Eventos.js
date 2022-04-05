import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
    {
        id: {type: String},
        pacient: {type: String, required: true},
        date: {type: Date, required: true, unique: true},
        observation: {type: String},
        color: {type: String}
    }
)
const eventos = mongoose.model('eventos', eventoSchema);

export default eventos;