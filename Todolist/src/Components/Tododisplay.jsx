import styles from "./Tododisplay.module.css";
export default function Tododisplay({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    // console.log("The item that has been clicked is", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    // console.log(todos);
  }
  const completeDecor = item.done ? styles.completed : "";
  return (
    <div className={styles.display}>
      <div className={styles["display-item"]}>
        <h3>
          <span
            className={completeDecor}
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </span>

          <span>
            <button onClick={() => handleDelete(item)} className={styles.btn}>
              X
            </button>
          </span>
        </h3>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
