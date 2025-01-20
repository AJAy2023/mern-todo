
const mongoose = require('mongoose');
const { boolean } = require('zod');
const url ="  mongodb://127.0.0.1:27017/todo";
mongoose.connect(url);
const todoschema = mongoose.Schema({
    title : String,
    Description : String,
    comleted   :Boolean,

})

const todo = mongoose.model('todo', todoschema);
module.exports = {
    todo
}










/*
schema look likes 
Todo {
 title : string ,
 description : string,
 completion  : boolen 
}
*/