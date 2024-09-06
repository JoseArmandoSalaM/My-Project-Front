"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { LuMountain } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

import { useUIStore } from '@/app/store/ui-store';

import { logout } from '@/app/actions';
import { useSession } from 'next-auth/react';



export const MenuTop = () =>  {

  const onLogout = async () => {
    await logout();
    window.location.replace('/')
  }

  const { data: session} = useSession();
  const isAuthenticated = !!session?.user;
   
    const  openSideMenu = useUIStore(state => state.openSideMenu);

  return (

<div className="w-full bg-background shadow md:col-span-3">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <LuMountain className="h-6 w-6" />
          <span className="text-lg font-bold">SoftDev A&G</span>
        </Link>
        <div className='hidden justify-end gap-6 text-sm font-medium md:flex'>

        

        <Link href="/tasks" className="hover:text-primary-foreground">
            Tasks
          </Link>
          <Link href="/pedidos" className="hover:text-primary-foreground">
            Pedidos
          </Link>

          <Link href="/tools" className="hover:text-primary-foreground">
            Herramientas
          </Link>


            {isAuthenticated && (
          
                <Link href="/profile" className="block text-gray-800 hover:bg-gray-100">Profile</Link>
            
            )} 

              {!isAuthenticated && (
                <Link href="/auth" className="block text-gray-800 hover:bg-gray-100">
                  Login
                </Link>
              )} 
              
              {isAuthenticated && (
                <Link href="/"
              onClick={() => {
                onLogout();
              } }
              className="block text-gray-800 hover:bg-gray-100">
              Logout
            </Link>
          )}
          <div className='block md:hidden'>
                  <button className="md:hidden">
                    <IoMenu
                      className="h-6 w-6 md:hidden"
                      onClick={openSideMenu} />

                    <span className="sr-only">Toggle navigation menu</span>
                  </button>

                </div>
              </div>
    </div>
    </div>
  )
}
