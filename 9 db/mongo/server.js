// npm init -y
// npm install express mysql body-parser cors
// npm install mongodb mongoose
// CREATE DATABASE todo_db;

// USE todo_db;

// CREATE TABLE tasks (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     task VARCHAR(255) NOT NULL,
//     status TINYINT(1) DEFAULT 0
// );

// ALTER TABLE tasks 
// ADD description VARCHAR(255) NOT NULL,
// ADD quantity INT NOT NULL;


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
const mongoURI = '';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Task Schema
const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { task, description, quantity } = req.body;
    const newTask = new Task({ task, description, quantity });
    await newTask.save();
    res.json({ status: 'Task added' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT (update) a task to mark it as complete
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndUpdate(taskId, { status: true });
    res.json({ status: 'Task updated' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.json({ status: 'Task deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
