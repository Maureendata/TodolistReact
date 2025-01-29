import Tododisplay from "./Tododisplay";
import { useState } from "react";

export default function Todo() {
  // initializing todo
  const [todo, setTodo] = useState("");
  //initializing todo task
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    //allow for clear screen after inserting values
    setTodo("");
  }
  return (
    <div>
      {/* prevent refreshing */}
      <form onSubmit={handleSubmit}>
        {/* ensuring todo has a task */}
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {todos}
      {todos.map((item) => (
        <Tododisplay key={item} item={item} />
      ))}
    </div>
  );
}
