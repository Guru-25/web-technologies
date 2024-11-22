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
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Use your MySQL username
    password: 'guru2004', // Use your MySQL password (leave blank if none)
    database: 'todo_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// GET all tasks
app.get('/api/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});


// POST a new task
app.post('/api/tasks', (req, res) => {
    const { task, description, quantity } = req.body;
    const query = 'INSERT INTO tasks (task, description, quantity) VALUES (?, ?, ?)';
    db.query(query, [task, description, quantity], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ status: 'Task added' });
        }
    });
});

// PUT (update) a task to mark it as complete
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const query = 'UPDATE tasks SET status = 1 WHERE id = ?';
    db.query(query, [taskId], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ status: 'Task updated' });
        }
    });
});

// DELETE a task
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [taskId], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ status: 'Task deleted' });
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
