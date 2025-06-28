// routes/taskroutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// ➕ Create Task
router.post('/', async (req, res) => {
  const { title, description, status, createdBy } = req.body;
  if (!title || !createdBy) {
    return res.status(400).json({ error: 'Title and createdBy are required' });
  }

  try {
    const task = new Task({ title, description, status, createdBy });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// 📄 Get Tasks (by user)
router.get('/', async (req, res) => {
  const { user } = req.query;
  if (!user) return res.status(400).json({ error: 'User email is required' });

  try {
    const tasks = await Task.find({ createdBy: user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// 🗑️ Delete Task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// ✅ Update Status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

module.exports = router;
