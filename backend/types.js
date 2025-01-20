    const zod  =  require("zod");
    
    const createTodo = zod.object({
        title:zod.string(),
        description : zod.string()
    })
    
    const updateTodo = zod.object({
        id : zod.string(),
    })

    // below code is tell the how to expost the files 
    module.exports = {
        createTodo: createTodo,
        updateTodo: updateTodo
    }
    
    // zod schema 
    /*
    {
    title : string,
    description : string
    }
    {
    id : string 
    }
    */