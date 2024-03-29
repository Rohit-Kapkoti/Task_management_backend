const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URL

console.log(mongoUri)

// Connect to MongoDB
mongoose
    .connect(mongoUri)
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
