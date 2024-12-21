import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import TaskManagementApp from "./components/TaskManagementApp";

function App() {
  return (
    <Provider store={store}>
      <TaskManagementApp />
    </Provider>
  );
}

export default App;
