    const zod  =  require("zod");
    
    const createTodo = Zod.object({
        title:Zod.string(),
        description : zod.string()
    })
    
    const updateTodo = Zod.object({
        id : Zod.string(),
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