# Task Management App

## Deployment

- You can see the deployed version here:  
  [Task Management App](https://sis-jain.github.io/Task-Management-App)  
  (Test out task management features, including creating, editing, and deleting tasks!)

## How to Run

1. **Install Dependencies**  
   Run `npm i` to install all necessary packages.

2. **Start the Development Server**  
   Run `npm run dev` to start the development server.

3. **Access the App**  
   Open the URL provided in your CLI in your browser to view the app.

## Structure

| Folder     | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| src        | Core directory of the project, most application code is here  |
| components | Reusable components for UI                                    |
| utils      | Redux store and slice definitions                             |

## Technologies Used

- **React**: For building the user interface.
- **react-redux**: For integrating Redux with React.
- **@reduxjs/toolkit**: Simplifies the Redux setup and state management.

## How to Use the Application

1. **Create a User**  
   Enter a username and password (password length should be greater than 5 characters). This will create your user.

2. **Login and Redirect**  
   After logging in, you'll be redirected to the main page where you can manage your tasks.

3. **Add a Task**  
   Enter a task name in the `search bar` and click the `Add` button. Your new task will appear in the task list.

4. **Edit a Task**  
   To edit a task, click on the `edit icon` next to the task. Update the task content and save your changes.

5. **Mark Task as Completed**  
   Check the checkbox beside the task to mark it as completed.

6. **Delete a Task**  
   Click the `delete icon` to remove a task from the list.

7. **Data Persistence**  
   All tasks and user information are stored in the browser's `localStorage` to persist data across sessions.

8. **Logout**  
   Click `Log Out` to clear the user data stored in `localStorage`.
