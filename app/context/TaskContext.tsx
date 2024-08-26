// "use client"

// import React, {  createContext, useEffect, useState } from "react";
// import { createTaskRequest, deleteTaskRequest, getTaskRequest, updateTasksRequets } from "../api/tasks";
// import { CreateTask, Tasks, UpdateTasks } from "../interface";

// interface TasksContextValue{
//     tasks: Tasks[];
//     createTask: (task: CreateTask) => Promise<void>;
//     deleteTask: (id: string) => Promise<void>;
//     updateTasks: (id: string, task: UpdateTasks) => Promise<void>;
// }

// export const TaskContext = createContext<TasksContextValue>({
//     tasks: [],
//     createTask: async() => {},
//     deleteTask: async() => {},
//     updateTasks: async() => {}
// })

// interface Props{
//     children: React.ReactNode
// }

// export const TasksProvider: React.FC<Props> = ({children}) => {
//     const [tasks, setTasks] = useState<Tasks[]>([])

    
//   useEffect(()=>{
//     getTaskRequest()
//     .then((response) => response.json())
//     .then((data) => setTasks(data))
//   },[]);

//   const createTask = async (task: CreateTask)=>{
//     const res = await createTaskRequest(task)
//     const data = await res.json()
//     setTasks([...tasks, data]);
//   };

//   const deleteTask = async (id: string) => {
//     const rest = await deleteTaskRequest(id)
//     if(rest.status === 204) {
//       setTasks(tasks.filter((tasks) => tasks.id !== id))
//     }
//   }

//   const updateTasks = async(id: string, task:UpdateTasks)=> {
//    const res =  await updateTasksRequets(id, task)
//    const data = await res.json();

//    setTasks(
//      tasks.map(task => task.id === id ? {...task, ...data }: task)
//    );
//   };
    
//     return (
//         <TaskContext.Provider value={{
//             tasks,
//             createTask,
//             deleteTask,
//             updateTasks
//             }}>
//             {children}
//         </TaskContext.Provider>
//     )
// }