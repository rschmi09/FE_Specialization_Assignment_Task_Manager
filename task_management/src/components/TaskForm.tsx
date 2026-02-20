// src/components/TaskForm.tsx

import { useState } from "react";
import type { FormEvent } from "react";
import type { Task, TaskStatus } from "../types/task";


interface TaskFormProps {
    task?: Task; //optional for editing
    onSubmit: (task:Task) => void;
    onCancel?: () => void; //optional cancel button
}

const TaskForm = ({ task, onSubmit, onCancel }: TaskFormProps) => {

    const [title, setTitle] = useState<string>(task?.title || "");
    const [description, setDescription] = useState<string>(task?.description || "");
    const [status, setStatus] = useState<TaskStatus>(task?.status || "pending");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!title.trim() || !description.trim()) {
            setError('Title and description are required.')
            return;
        }

        const newTask: Task = {
            id: task?.id || crypto.randomUUID(),
            title,
            description,
            status,
            createdAt: task?.createdAt || new Date(),
        };

        onSubmit(newTask);

        // Reset only if adding new task
        if (!task) {
            setTitle("");
            setDescription("");
            setStatus("pending");
        }
        setError("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>{task ? "Edit Task" : "Create Task"}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
            <label>Title:</label>
            <br />
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
            <label>Description:</label>
            <br />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div>
            <label>Status:</label>
            <br />
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>

        <br />
        <button type="submit">{task ? "Save" : "Add Task"}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TaskForm;


