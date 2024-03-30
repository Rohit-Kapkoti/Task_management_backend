# Task Management App - Backend

This is the backend of a task management application built using Node.js and Express.js. It provides RESTful APIs for managing tasks, including creating, reading, updating, and deleting tasks.

## Features

- **Create Task**: POST request to create a new task.
- **Read Task**: GET request to fetch all tasks or a specific task by ID.
- **Update Task**: PUT request to update an existing task.
- **Delete Task**: DELETE request to delete a task by ID.
- **Database Integration**: Uses MongoDB database with Mongoose for storing task data.
- **CORS Support**: Cross-Origin Resource Sharing (CORS) is enabled to allow requests from frontend applications.
- **Environment Variables**: Uses dotenv for managing environment variables like database connection URL.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Rohit-Kapkoti/Task_management_backend.git

   ```

2. **Run these commands**
   npm install
   npm run start

3. **Confurigation**
   MONGODB_URI=<mongodb-connection-url> add your local mongoURL in the .env file in root directory

**For deployed server**
https://task-management-lxmz.onrender.com
