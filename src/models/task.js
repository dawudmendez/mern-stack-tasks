const mongoose = require('mongoose');

//traigo sólo Schema de mongoose
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true}
});

//Acá mapeo el objeto de la base con el model a usar
module.exports = mongoose.model('Task', TaskSchema);