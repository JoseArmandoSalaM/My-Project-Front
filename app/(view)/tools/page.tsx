import React from 'react'
import {MenuTop, Sidebar} from '@/app/components'

import { auth } from "../../auth.config";
import { redirect } from 'next/navigation';
import TableTools from '@/app/components/tools/TableTools';

export default async function Tasks(){

  const session = await auth(); 

  if(!session?.user){
    redirect('/')
  }


  return (
    <div>
      <MenuTop/>
      <Sidebar/>
    
      <TableTools/>


    </div>

  )
}
