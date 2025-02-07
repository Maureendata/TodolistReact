import Tododisplay from "./Tododisplay";
import styles from "./TodoList.module.css";
export default function TodoList({todos,setTodos}){
   return( <div className={styles.todolist}> {todos.map((item) => (
    <Tododisplay item={item} key={item} todos={todos} setTodos={setTodos} />
  ))}</div>);
}