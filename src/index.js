//aqui vamos a inicializar el servidor
const express = require('express');
const app = express();
const morgan = require('morgan');
//este módulo no necesita ser instalado
//nos permite unir directorios con la sintáxis correcta para cada sistema operativo:
const path = require('path');

//acá le digo que, del archivo database, solo quiero importar mongoose
const { mongoose } = require('./database');

//settings
//sete una configuración llamada port, y le digo que use el configurado por el SO
//sino hay ninguno definido, que use 3000
app.set('port', process.env.PORT || 3000);

//Middlewares
//npm install morgan: permite registrar o ver por consola las peticiones que están llegando
//desde el navegador
//ejecuto la función morgan antes que llegue a las rutas, le paso el parámetro dev
//esto formatea el texto:
app.use(morgan('dev'));
//este middleware comprueba si los datos que llegan son json:
app.use(express.json());

//Routes
//digo que cada vez que entren en /api/tasks, devuelva lo que està en task.routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static files
//esto me registra el folder public como contenido estático
//al encontrar un index.html, me lo muestra
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
//uso la variable de configuración 'port'
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});