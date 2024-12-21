import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { allTasks: [] },
  reducers: {
    CREATE_USER: (state, action) => {
      Object.assign(state, {
        ...action.payload,
        isAuthenticated: true,
      });
    },
    EXISTING_USER: (state) => {
      Object.assign(state, { allTasks: state.allTasks, isAuthenticated: true });
    },
    CREATE_TASK: (state, action) => {
      state.allTasks.push(action.payload);
    },
    DELETE_TASK: (state, action) => {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    EDIT_TASK: (state, action) => {
      const index = state.allTasks.findIndex(
        (value) => value.id === action.payload.id
      );
      Object.assign(state.allTasks[index], action.payload);
    },
    REMOVE_USER: (state) => {
      Object.assign(state, { allTasks: state.allTasks, isAuthenticated: false });
    },
  },
});

export default userSlice.reducer;
export const { CREATE_TASK, EXISTING_USER, DELETE_TASK, EDIT_TASK, CREATE_USER, REMOVE_USER } =
  userSlice.actions;
