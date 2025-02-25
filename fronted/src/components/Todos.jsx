
/*
objeect destrucring
*/
export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                    </div>
                );
            })}
        </div>
    );
}


// this is above one is state managment in react