"use client";

import Link from 'next/link'
import React from 'react'
import { LuMountain } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

import { useUIStore } from '@/app/store/ui-store';

import { logout } from '@/app/actions';


export const MenuTop = () =>  {
   
    const  openSideMenu = useUIStore(state => state.openSideMenu);

  return (

<div className="w-full bg-background shadow md:col-span-3">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <LuMountain className="h-6 w-6" />
          <span className="text-lg font-bold">SoftDev A&G</span>
        </Link>
        <div className='hidden justify-end gap-6 text-sm font-medium md:flex'>

        <Link href="/profile" className="hover:text-primary-foreground">
            Profile
          </Link>

          <Link href="/tasks" className="hover:text-primary-foreground">
            Tasks
          </Link>

          <Link href="/auth" className="hover:text-primary-foreground">
          Login
          </Link>

          <button onClick={() => logout()} className="hover:text-primary-foreground">
          Logout
          </button>
         

        </div>


        <div className='block md:hidden'>
          <div>
            <button variant="outline" size="icon" className="md:hidden">
              <IoMenu 
              className="h-6 w-6 md:hidden"
              onClick={openSideMenu}
              />
              
              <span className="sr-only">Toggle navigation menu</span>
            </button>
            
          </div>
    </div>
    </div>
    </div>
  )
}
