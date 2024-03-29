const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    category: { type: String, default: 'General' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
