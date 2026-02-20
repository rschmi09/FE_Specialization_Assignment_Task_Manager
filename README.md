README.md

-------------------------------------
Project Overview
-------------------------------------
Task Management App with TypeScript

Goal: 
Develop a robust management tool using Typescript and React.
Enhance understanding of TypeScript fundamenals while being 
introuced to the practical application of TypeScript in building 
real-world web applications.


-------------------------------------
Project Installation
-------------------------------------
Creation: vite@latest

Installs:
- axios
- react-router-dom
- @auth0/auth0-react


-------------------------------------
Project Architecture
-------------------------------------

src
|
|_ components
|   |_AuthButtons.tsx
|   |_ProtectedRoute.tsx
|   |_TaskForm.tsx
|   |_TaskItem.tsx
|   |_TaskList.tsx
|
|
|_ context
|   |_TaskContext.tsx
|   |_TaskProvider.tsx
|   |_TaskReducer.tsx
|   |_useContext.tsx
|   |_useTaskContext.tsx
|   |_useTasks.tsx
|
|
|_ pages
|   |_CreateTask.tsx
|   |_Dashboard.tsx
|   |_EditTask.tsx
|   |_Home.tsx
|   |_Login.tsx
|   |_Register.tsx
|   |_TaskDetails.tsx
|
|
|_ types
|   |_auth.ts
|   |_task.ts
|
|
|_App.txs


-------------------------------------
Project Features
-------------------------------------

- Task Dashboard
    - View all tasks
    - Create, Edit, Delete tasks
- Authentification and Authorization
    - login and registration via Auth0  ***did not sign up for Auth0. login will not work***
    - Protected Routes for authenticated users only
- Typescript Integration
     - Fully typed 'Task' interface and discriminated unions for actions
     - Typed Context API and custom hooks
- State Management
      - Global task state managed via 'useReducer' and 'ContextAPI'
- Responsive UI
      - Simple and clean dashboard layout  


-------------------------------------
Project Useage 
-------------------------------------

- user will 'login' or 'register' to authenticate
- will have access to the 'home' / 'dashboard' to see all tasks
- Create, Edit, Delete Tasks
- View and edit details for a Task
- 
