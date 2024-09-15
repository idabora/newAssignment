const express = require('express');
const app = express();
const router = express.Router();
const { createTask, getAllTasks, updateStatus, deleteTask, updateTask, createcategory } = require('../controllers/taskController')

app.use(express.json())

router.post('/create', createTask);

router.get('/getAll', getAllTasks);

router.patch('/updateStatus/:id/:status', updateStatus);

router.put('/updateTask/:id', updateTask);

router.delete('/deleteTask/:id', deleteTask);

router.post('/category', createcategory);

module.exports = router;