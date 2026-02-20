// src/pages/EditTask.tsx

import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/useContext";
import TaskForm from "../components/TaskForm";
import type { Task } from "../types/task";

const EditTask = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  const handleSubmit = (updatedTask: Task) => {
    updateTask(updatedTask);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <TaskForm task={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTask;