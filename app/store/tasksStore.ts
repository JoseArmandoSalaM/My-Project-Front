import { useState } from "react";
import { create } from "zustand";
import { createTaskRequest, deleteTaskRequest, getTaskRequest, updateTasksRequets } from "../api/tasks";

const API = 'http://localhost:4000/api';

interface Tasks{
    id: string;
    title: string;
    description: string;
    done?: boolean;
    createAt?: Date;
    updateAt?: Date;
} 

type createtask = Omit<Tasks,'id' | 'createAt' | 'updateAt'>
type UpdateTasks = Partial<createtask>


interface Post {
    tasks: Tasks[],
    getPosts: () => Promise<void>
    createTask: (task: createtask) => Promise<void>
    deleteTask: (id: string) => Promise<void>
    updateTask: (id: string,task:UpdateTasks) => Promise<void>
}

export const tasksStore = create<Post>((set) => ({
    tasks:[],
    getPosts: async () => {
        try {
            const res = await getTaskRequest();
            const data = await res.json();
            set((state) => ({ tasks: data }));
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
    },

    createTask: async (task: createtask) => {
        const res = await createTaskRequest(task)
        if(res.status === 201){
            const data = await res.json()
            set((state) => ({ tasks: [...state.tasks, data] }));
            return;
         }
        console.log('Already exits task that this title');

    },

    deleteTask: async(id: string) => {
    const rest = await deleteTaskRequest(id)
    if(rest.status === 204) {
        set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    }
    },
    
    updateTask: async(id: string,task:UpdateTasks) => {
    const res = await updateTasksRequets(id, task);
    const data = await res.json();
    set((state) => ({
      tasks: state.tasks.map(task => task.id === id ? { ...task, ...data } : task),
    }));
    }

}))