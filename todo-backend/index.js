// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let todos = []; // In-memory store

app.use(cors());
app.use(express.json());

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.status(200).json({ message: 'Deleted' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
