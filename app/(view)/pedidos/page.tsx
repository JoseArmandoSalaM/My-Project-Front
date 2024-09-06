import React from 'react'

import { auth } from "../../auth.config";
import { redirect } from 'next/navigation';
import { MenuTop, Sidebar } from '@/app/components';

export default async function pedidos(){

  const session = await auth(); 

  if(!session?.user){
    redirect('/')
  }


  return (
    <div>
      <MenuTop/>
      <Sidebar/>

    </div>
  )
}