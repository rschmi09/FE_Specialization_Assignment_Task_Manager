// src/context/TaskReducer.tsx

import type { Task, TaskAction } from "../types/task";


export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    case "DELETE":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};