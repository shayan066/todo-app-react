import styles from "./TodoItems.module.css";
import Todoitem from "./Todoitem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};

export default TodoItems;
