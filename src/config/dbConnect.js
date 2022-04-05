import mongoose from "mongoose";

mongoose.connect("mongodb+srv://parizotto:1234@cluster0.62fi6.mongodb.net/clin-calendar");

let db = mongoose.connection;

export default db;