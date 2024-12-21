import { useSelector } from "react-redux";
import styles from "./TaskManagementApp.module.css";
import LoginForm from "./Login/LoginForm";
import AddTask from "./Task/AddTask";

export default function TaskManagementApp() {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <div className={styles.taskManagement}>
      <h1>Task Management App</h1>
      <div className={styles.authApp}>
        {isAuthenticated ? <AddTask /> : <LoginForm />}
      </div>
    </div>
  );
}
