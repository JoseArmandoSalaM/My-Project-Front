import React from 'react'
import {MenuTop, Sidebar,TaskForm,TaskList} from '@/app/components'

import { auth } from "../../auth.config";
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default async function Tasks(){

  const session = await auth();
    const token = session?.user.role;

  if(token !== "admin"){
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
