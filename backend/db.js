
const mongoose = require('mongoose');
const { boolean } = require('zod');
const url = "mongodb://127.0.0.1:27017/todo";

// Connect to MongoDB
mongoose.connect(url)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Define the schema for the todo collection
const todoschema = mongoose.Schema({
    title: String,
    description: String,  // Corrected field name
    completed: Boolean    // Corrected field name
});

// Create the model for the todo collection
const todo = mongoose.model('todo', todoschema);

// Export the todo model
module.exports = {
    todo
};






/*
schema look likes 
Todo {
 title : string ,
 description : string,
 completion  : boolen 
}
*/