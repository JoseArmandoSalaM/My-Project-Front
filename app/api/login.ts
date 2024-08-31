import { cookies } from "next/headers";
import {CreateTask, Login, UpdateTasks} from "../interface";
const API = 'http://localhost:4000/api';



export const createTaskRequest = (task:CreateTask) => 
    fetch(`${API}/auth`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });

export async function login(credentials: { email: string; password: string }) {
        return await fetch(`${API}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

      }

export async function profile(token: string) {
  return await fetch(`${API}/auth/profile`,{
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${token}`,
    },
  });
}