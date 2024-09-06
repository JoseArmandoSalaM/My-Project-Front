import {CreateTask, UpdateTasks} from "../interface";
const API = 'http://localhost:4000/api';



export const createTaskRequest = (task:CreateTask) => 
    fetch(`${API}/tasks`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });


export const getTaskRequest = (token: string) => fetch(`${API}/tasks`)

export const deleteTaskRequest = (id: string) => fetch(`${API}/tasks/${id}`,{
    method: "DELETE",
});

export const updateTasksRequets = (id: string, task: UpdateTasks) => fetch(`${API}/tasks/${id}`,{
    method: "PATCH",
    body: JSON.stringify(task),
    headers: {
        'Content-Type': 'application/json'
    },
});
