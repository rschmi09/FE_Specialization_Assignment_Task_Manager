// src/context/TaskContext.tsx


import { createContext } from "react";
import type { Task } from "../types/task";

// Define what the context will contain
export interface TaskContextType { 
  tasks: Task[]; 
  addTask: (task: Task) => void; 
  updateTask: (updatedTask: Task) => void; 
  deleteTask: (id: string) => void; }  

// Create Context
export const TaskContext = createContext<TaskContextType | undefined>(undefined);
