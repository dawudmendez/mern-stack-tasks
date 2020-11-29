//para trabajar con la base y con models, necesito instalar mongoose
//npm install mongoose
//para conectar a la BD
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//necesito exportar este archivo para que sea usado por mi servidor
module.exports = mongoose;