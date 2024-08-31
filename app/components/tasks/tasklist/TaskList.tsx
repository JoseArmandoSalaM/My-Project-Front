"use client"; 

import { tasksStore } from '@/app/store/tasksStore';
import { useEffect } from 'react';
import { TaskItem } from './TaskItem';


export const TaskList = () => {
// const {tasks} = useTasks()

  const {getPosts,tasks} = tasksStore()

   useEffect(()=>{
     getPosts()
   },[]);



  return (
    <div className='mt-2'>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task.id}/ > 
        ))
      }
    </div>
  )
}
