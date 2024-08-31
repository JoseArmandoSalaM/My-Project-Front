'use client';
import Link from "next/link";
import { IoAccessibility,IoShirtOutline } from "react-icons/io5"

import clsx from "clsx";
import { GrRestroomWomen } from "react-icons/gr";
import { BiSolidOffer } from "react-icons/bi";
import { FaHome, FaTasks } from "react-icons/fa";
import { useUIStore } from "@/app/store/ui-store";
import { MdCancel } from "react-icons/md";
import { logout } from "@/app/actions";
import { CiLogin, CiLogout } from "react-icons/ci";

export const Sidebar = () => {

   const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
   const closeMenu = useUIStore(state => state.closeSideMenu);



   return (
      <div>
         {/*Background black */}
         {
            isSideMenuOpen && (
               <div
                  className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
               />
            )
         }



         {/*Blur */}
         {
            isSideMenuOpen && (
               <div
                  onClick={closeMenu}
                  className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
               />
            )
         }


         {/* Side menu */}
         <nav
            className={
               clsx(
                  "fixed p-5 right-0 top-0 w-[200px] sm:w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                  {
                     "translate-x-full": !isSideMenuOpen
                  }
               )
            }>

            <MdCancel className="ml-auto" size={25} onClick={() => closeMenu()} />

   
            {/*Line separator */}
            <div className="w-full h-px bg-black my-5" />

            <Link
               onClick={() => closeMenu()}
               href="/tasks"
               className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
            >
               <FaTasks size={20} />
               <span className="ml-3 text-sm">Tasks</span>
            </Link>

            <Link 
            onClick={()=> closeMenu()}
            href="/auth"
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
            >
           <CiLogin size={20} />
           <span className="ml-3 text-sm">Login</span>
            </Link>

            <button
               onClick={() => logout()}
               className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
            >
               <CiLogout size={20} />
               <span className="ml-3 text-sm">Logout</span>
            </button>

           
     
           


         </nav>
      </div>
   )
}

