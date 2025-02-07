import { useState } from "react";
import TodoList from "./TodoList";
import Form  from "./Form";
export default function Todo() {
  // initializing todos
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      {/* Add Todos and Todolist.Ensure Todos is using prop */}
      <Form todos={todos} setTodos={setTodos}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
