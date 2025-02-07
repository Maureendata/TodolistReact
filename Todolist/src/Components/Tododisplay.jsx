import styles from "./Tododisplay.module.css";
export default function Tododisplay({ item,todos,setTodos }) {
  function handleDelete(item) {
    console.log("Delete item",item);
  setTodos(todos.filter((todo)=>todo!==item));
  }
  return (
    <div className={styles.display}>
      <div className={styles.display - item}>
        <h3>
          {item.name}
          <span>
            <button onClick={()=>handleDelete(item)} className={styles.btn}>
              X
            </button>
          </span>
        </h3>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
