import React from 'react'

import { auth } from "../../auth.config";
import { redirect } from 'next/navigation';
import { MenuTop, Sidebar } from '@/app/components';
import InfoProfile from '@/app/components/profile/InfoProfile';


export default async function profile(){

  const session = await auth(); 

  if(!session?.user){
    redirect('/')
  }


  return (
    <div>
      <MenuTop/>
      <Sidebar/>

      <InfoProfile/>


    </div>
  )
}