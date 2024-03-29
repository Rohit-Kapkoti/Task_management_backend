const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.post('/', async (req, res) => {
    try {
        let priorityValue;
        switch (req.body.priority) {
            case 'Low':
                priorityValue = 1;
                break;
            case 'Medium':
                priorityValue = 2;
                break;
            case 'High':
                priorityValue = 3;
                break;
            default:
                priorityValue = 2;
        }
        const task = await Task.create({ ...req.body, priorityValue });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read one task
router.get('/:taskId', async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Update a task
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(404).json({ message: 'Task not found' });
    }
});

module.exports = router;
