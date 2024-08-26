"use client";

import React from 'react'
import {TaskList, TaskForm} from './components'


export default function Tasks(){
  return (
    <div className='h-screen flex items-center justify-center'>
       <div className='w-2/5'>
        <TaskForm/>
        <TaskList/>
       </div>
    </div>
  )
}
