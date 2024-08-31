import React from 'react'
import {MenuTop, Sidebar,TaskForm,TaskList} from '@/app/components'

import { auth } from "../../auth.config";
import { redirect } from 'next/navigation';

export default async function Tasks(){

  const session = await auth(); 

  if(!session?.user){
    redirect('/')
  }


  return (
    <div>
      <MenuTop/>
      <Sidebar/>
    <div className='h-screen flex items-center justify-center'>
       <div className='w-2/5'>
        <TaskForm/>
        <TaskList/>
       </div>

    </div>
    </div>
  )
}
