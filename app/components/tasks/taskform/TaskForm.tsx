"use client";
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {createTaskRequest} from '@/app/api/tasks'

import { tasksStore } from '@/app/store/tasksStore';

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });  

  const {createTask} = tasksStore()

  // const {createTask} = useTasks()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  )=> setTask({...task, [e.target.name]: e.target.value})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     await createTask(task)
  
    // const res = await createTaskRequest(task)
    // const data = await res.json()
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title the task</label>
        <input type="text" name='title'
        className='border-2 border-gray-700 p-2 block w-full my-2'
        placeholder='Write a title'
        onChange={handleChange}
        />

      <label htmlFor="">Description the task</label>
        <textarea 
        name="description" 
        rows={3}
        className='border-2 border-gray-700 p-2 block w-full my-2'
        placeholder='Write the task description'
        onChange={handleChange}
        ></textarea>

        <label htmlFor="" className='inline-flex items-center gap-x-2'>
          <input type="checkbox"
          className='h-5 w-5 text-indigo-600'
          onChange={(e) => setTask({...task, done: !task.done})}
       />
          <span>Done</span>
        </label>

        <button
        className='bg-indigo-500 px-3 block py-2 w-full'
        >
          Save
        </button>
      </form>
    </div>
  )
}
