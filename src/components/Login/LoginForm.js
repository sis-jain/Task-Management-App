import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { CREATE_USER } from "../../utils/userSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const authenticateUser = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    const { username, password } = formData;
    let valid = true;
    if (username === "" || username.length < 4) {
      setIsUsernameError(true);
      valid = false;
      setTimeout(() => setIsUsernameError(false), 2000);
    }
    if (password === "" || password.length < 5) {
      setIsPasswordError(true);
      valid = false;
      setTimeout(() => setIsPasswordError(false), 2000);
    }
    if (valid) {
      dispatch(CREATE_USER({ ...formData, allTasks: [] }));
    }
  };

  return (
    <form id="login-form" onSubmit={authenticateUser}>
      <div className={styles.formField}>
        <label htmlFor="username">Username</label>
          <input
            id="username"
            className={styles.loginInput}
            name="username"
            type="text"
          />
          {isUsernameError && <div className={styles.errorText}>Enter Valid Username</div>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="password">Password</label>
          <input
            className={styles.loginInput}
            name="password"
            type="password"
            id="password"
          />
          {isPasswordError && <div className={styles.errorText}>{`Enter Length > 5`}</div>}
      </div>

      <button className={styles.submitButton}>Submit</button>
    </form>
  );
}
