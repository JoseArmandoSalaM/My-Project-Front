'use client';

import { authenticate } from "@/app/actions";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";


export const LoginForm = () => {

    const [state, dispatch] = useFormState(
        authenticate,
        undefined,
      );

      useEffect(() =>{
        if(state === 'Success'){
          // router.replace('/');
          window.location.replace('/');
        
        }
      },[state])



    return(
        <form action={dispatch} className="flex flex-col">

        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
          name="email"
          required 
          autoComplete="email"
          />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
          name="password" 
          required
          autoComplete="current-password"
        />


        <div className="flex h8 items-end apce-x-1"
          aria-live="polite"
          aria-atomic="true"
          >

            {state === "Invalid credentials." && (
                <div className="flex flex-row mb-2">
                    <IoInformationOutline className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">Credenciales incorrectas</p>
                </div>
            )}

            {state === "Something went wrong." && (
                <div className="flex flex-row mb-2">
                    <IoInformationOutline className="h-5 w-5 text-yellow-500" />
                    <p className="text-sm text-yellow-500">Algo salió mal. Intenta nuevamente.</p>
                </div>
            )}

          </div>

        
        



          <LoginButton/>


        {/* divisor l ine */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/new-account" 
          className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>

      </form>
    );
};


function LoginButton(){
  const {pending} = useFormStatus();


  return (
    
    <button
    type="submit"
    className={
      clsx({
        "btn-primary": !pending,
        "btn-disabled": pending
      })
    }
    disabled={pending}
    >
    Ingresar
  </button>
  )
}