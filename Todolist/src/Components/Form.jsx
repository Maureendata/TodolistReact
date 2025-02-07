import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  //declaring element as object to declare it as not completed
const[todo,setTodo]=useState({name:"",done:false})
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <div className={styles.container}>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          className={styles.inputform}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          type="text"
          value={todo.name}
          placeholder="Enter Todo item"
        />
        <button className={styles.add}type="submit">Add</button>
      </form>
    </div>
  );
}
