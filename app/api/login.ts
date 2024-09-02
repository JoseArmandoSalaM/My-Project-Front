import { cookies } from "next/headers";
import {CreateTask, Login, UpdateTasks} from "../interface";
const API = 'http://localhost:4000/api';



export const createUser = (credentials: {name: string, email: string, password: string}) => 
    fetch(`${API}/auth`,{
        method: 'POST',
        body: JSON.stringify(credentials),
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