// src/pages/TaskDetail.tsx

import { useParams, Link } from "react-router-dom";
import { useTasks } from "../context/useContext";

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>

      <Link to={`/tasks/${task.id}/edit`}>
        <button>Edit</button>
      </Link>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default TaskDetails;