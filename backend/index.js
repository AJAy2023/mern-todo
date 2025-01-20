const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const { boolean } = require('zod');
const app  = express();
const port = 3000;
app.use( express.json());

app.post('/todo',  async function(req, res){
  const createpayload = req.body;
  const parsedpayload = createTodo.safeParse(createTodo);
  if(!parsedpayload.success)
  {
    res.status(411).json({
        msg : "you sent the wrong input "
    })
    return;
  }
  // put in mongodb 

await todo.create({
    title : createpayload.title,
    description  : createpayload.description,
    completed : false
})

})

app.get('/todos', async function(req , res){
    const todos = await todo.find({});
    res.json({

        todos
    })
})

app.put('/completed' , async function(req, res)
{
const  updatepayload = req.body;
const parsedpayload = updateTodo.safeParse(updatepayload);
if(!parsedpayload.success)
{
    res.status(411).json({
        msg : "you sent the wrong input "
    })
    return 
}
await todo.update({
    _id : req.body.id
},{
    completed : true
})
res.json({
    mag : "todo marked as completed "
})
})





app.get('/' , (req, res)=>{
    res.send("server is started...");
})
app.listen(port ,()=>{
    console.log("server is stared ..");
});

// write the express boilerplate code 
// with the express.json middleware
