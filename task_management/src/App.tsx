// src/App.tsx

import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <Routes>
      
      {/* Public route */}
      <Route path='/login' element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='home' element={<Home />} />

      { /* Protected routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } 
      />

      <Route path="/tasks/new" element={
        <ProtectedRoute>
          <CreateTask />
        </ProtectedRoute>
        } 
      />
      <Route path="/tasks/:id" element={
        <ProtectedRoute>
          <TaskDetails />
        </ProtectedRoute>
        } 
      />
      <Route path="/tasks/:id/edit" element={
        <ProtectedRoute>
          <EditTask />
        </ProtectedRoute>
        } 
      />

    </Routes>
  );
}

export default App;
