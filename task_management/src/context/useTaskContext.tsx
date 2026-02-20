// src/context/TaskContext.tsx

import { useState } from "react";
import type { ReactNode } from 'react';
import type { Task } from '../types/task';
import { TaskContext } from './TaskProvider';

// Create Provider component
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [ tasks, setTasks ] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks((prev) => [ ...prev, task ]);
    };

    const updateTask = (updatedTask: Task) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );

};


