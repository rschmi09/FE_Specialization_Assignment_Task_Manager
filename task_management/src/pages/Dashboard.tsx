// src/pages/Dashboard.tsx

import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import AuthButtons from "../components/AuthButtons";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Task Dashboard</h1>
      <Link to="/tasks/new">
        <button>Create New Task</button>
      </Link>
      <AuthButtons />
      <TaskList />
      
    </div>
  );
};

export default Dashboard;