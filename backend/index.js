const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to create a new todo
app.post('/todo', async function (req, res) {
    try {
        const createpayload = req.body;
        const parsedpayload = createTodo.safeParse(createpayload);

        if (!parsedpayload.success) {
            return res.status(400).json({
                msg: "You sent the wrong input",
                errors: parsedpayload.error.errors
            });
        }

        // Insert data into MongoDB
        await todo.create({
            title: createpayload.title,
            description: createpayload.description,
            completed: false
        });

        res.status(201).json({ msg: "Todo created successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
});

// Route to fetch all todos
app.get('/todos', async function (req, res) {
    try {
        const todos = await todo.find({});
        res.status(200).json({ todos });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching todos", error: error.message });
    }
});

// Route to mark a todo as completed
app.put('/completed', async function (req, res) {
    try {
        const updatepayload = req.body;
        const parsedpayload = updateTodo.safeParse(updatepayload);

        if (!parsedpayload.success) {
            return res.status(400).json({
                msg: "You sent the wrong input",
                errors: parsedpayload.error.errors
            });
        }

        const updatedTodo = await todo.findByIdAndUpdate(
            req.body.id,
            { completed: true },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({ msg: "Todo marked as completed", updatedTodo });
    } catch (error) {
        res.status(500).json({ msg: "Error updating todo", error: error.message });
    }
});

// Basic health check route
app.get('/', (req, res) => {
    res.send("Server is started...");
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
