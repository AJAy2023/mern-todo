import { useState } from "react";

export function CreateTodo(props){
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
    return <div>
      <input id="title" style={{
        padding:10,
        margin:10
      }} type="text" placeholder="title" /> <br />
      <input style={{
        padding:10,
        margin:10
      }} type="text" placeholder="description" onChange={function(e)
        {
          const value  = e.target.value
          setDescription(e.target.value);
        }
      } /> <br />
      <button
      style={{
        padding:10,
        margin:10
      }} onClick={()=>{
        // if you have use the fetch then u have to make the json.stringify 
        fetch("http://localhost:3000/todos",{
          method: "POST",
          body : JSON.stringify({
            title : title,
            description : description
          }),
          headers :{
            "content-type":"application/json"
          }
        }).then(async function(res)
        {
          const json  = await res.json();
          setTodos(json.todos);
          alert("Todo added");
        })
      }}>add a todo </button>
        </div>
}