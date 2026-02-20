// src/pages/CreateTask/tsx

import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/useContext";
import TaskForm from "../components/TaskForm";
import type { Task } from "../types/task";

const CreateTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (task: Task) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTask;