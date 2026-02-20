// src/context/TaskContext.tsx

import { useReducer } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/task";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";

const initialState: Task[] = [];

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  
  // Use useReducer for state management
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Wrap dispatch actions in functions 
  const addTask = (task: Task) => {
    dispatch({ type: "ADD", payload: task });
  };

  const updateTask = (updatedTask: Task) => {
    dispatch({ type: "UPDATE", payload: updatedTask });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };


  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );

};