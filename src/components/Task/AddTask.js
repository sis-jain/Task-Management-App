import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import styles from "./Task.module.css";
import { CREATE_TASK } from "../../utils/userSlice";
import { generateId } from "../../utils/helperFunctions";
import { REMOVE_USER } from "../../utils/userSlice";

export default function AddTask() {
  const dispatch = useDispatch();
  const { allTasks, username } = useSelector((store) => store.user);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    if (formData.addTaskInput) {
      dispatch(
        CREATE_TASK({
          task: formData.addTaskInput,
          id: generateId(),
          isCompleted: false,
        })
      );
      e.target.reset();
    } else {
      setIsInputEmpty(true);
      setTimeout(() => setIsInputEmpty(false), 2000);
    }
  };

  const handleLogOut = () => {
    dispatch(REMOVE_USER());
  };

  return (
    <main>
      <div className={styles.loginHeader}>
      <h2>Hi {username.toUpperCase()},</h2>
      <button onClick={handleLogOut} className={styles.logoutButton}>Logout</button>
      </div>
      
      <form id="input-section" onSubmit={handleAddTask}>
        <input
          id="addTaskInput"
          type="text"
          name="addTaskInput"
          placeholder="Enter your task here"
        />
        <button type="submit" className={styles.addButton}>Add</button>
      </form>
      {isInputEmpty && <span id="add-task-error">Please enter a task!</span>}

      <ul>
        {allTasks.map((task) => (
          <Task key={task.id} taskData={task} />
        ))}
      </ul>
    </main>
  );
}
