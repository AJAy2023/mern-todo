const express = require('express');
const app  = express();
const port = 3000;
app.use( express.json());

app.post('/todo', function(req, res){

})

app.get('/todos',function(req , res){

})

app.put('/completed' , function(req, res)
{

})





app.get('/' , (req, res)=>{
    res.send("server is started...");
})
app.listen(port ,()=>{
    console.log("server is stared ..");
});

// write the express boilerplate code 
// with the express.json middleware
