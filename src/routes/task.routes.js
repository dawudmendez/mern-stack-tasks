//acá se definiran los CRUD para las tasks
const express = require('express');
const router = express.Router();

//traigo el modelo de la base de datos
const Task = require('../models/task');

//creo una ruta para get de / que devuelva API Works in JSON
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/', async (req, res) => {
    //la prop llamada body viene por el middleware de json
    const {title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Tarea guardada'});
});

router.put('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea actualizada'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'});
})

//con esto yo puedo despues hacer un require afuera de este archivo (en index.js)
module.exports = router;