const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/task_management")
    .then(() => console.log("DBconnection is succesful"))
    .catch((err) => {
        console.log(err);
    });


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', tasksRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
