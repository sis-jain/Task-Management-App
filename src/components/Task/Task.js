import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Task.module.css";
import { DELETE_TASK, EDIT_TASK } from "../../utils/userSlice";

export default function Task({ taskData }) {
  const { task, id, isCompleted } = taskData;
  const [showEditInput, setShowEditInput] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    if (formData.input) {
      dispatch(EDIT_TASK({ id, task: formData.input }));
      setShowEditInput(false);
    } else {
      alert("Input field cannot be empty!");
    }
  };

  return (
    <li className={styles.task}>
      {showEditInput ? (
        <form id="edit-task-form" onSubmit={handleFormSubmit}>
          <input
            defaultValue={task}
            id="edit-task-input"
            type="text"
            name="input"
          />
          <div>
            <button type="submit" className={styles.saveButton}>Save</button>
            <button
              type="button"
              onClick={() => setShowEditInput(false)}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.tasksList}>
          <div className={`${isCompleted ? styles.completedTask: ''} ${styles.taskName}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="isTaskCompleted"
              onChange={(e) =>
                dispatch(EDIT_TASK({ id, isCompleted: e.target.checked }))
              }
              checked={isCompleted}
            />
            {task}
          </div>
          <div className={styles.buttons}>
            <button onClick={() => !isCompleted && setShowEditInput(true)}
              className={`icon ${isCompleted ? "disabled-icon" : undefined}`} title="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <path d="M3 17.25V21h3.75l12-12-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-3.53 3.53 3.75 3.75 3.53-3.53z" />
              </svg>
            </button>
            <button className="icon"
              onClick={() => dispatch(DELETE_TASK(id))} title="Delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm4-6h2v4H10zm4-4h2v8h-2zM18 5V3H6v2H4v2h16V5h-2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
