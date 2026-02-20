// src/components/TaskItem.tsx

import { useState } from 'react';
import type { Task } from '../types/task';
import { useTasks } from '../context/useContext';
import TaskForm from './TaskForm';
import { Link } from "react-router-dom";

interface TaskItemProps {
    task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
    const { deleteTask, updateTask } = useTasks();
    const [ isEditing, setIsEditing ] = useState(false);

    if (isEditing) {
        return (
            <TaskForm
                task={task}
                onSubmit={(updatedTask) => {
                    updateTask(updatedTask);
                    setIsEditing(false);
                }}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h3>
        <Link to={'tasks/${task.id}'}>{task.title}</Link>
      </h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;



