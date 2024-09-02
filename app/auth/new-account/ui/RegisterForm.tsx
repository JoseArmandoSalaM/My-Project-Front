'use client';
import { authenticate, login } from '@/app/actions';
import { createUser } from '@/app/api/login';
import clsx from 'clsx';
import Link from 'next/link'
import React, { useState } from 'react'
import { useFormState } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';


type FormInputs = {
    name: string;
    email: string;
    password: string;
  }

export const RegisterForm = () => {


 
  const [state, dispatch] = useFormState(
    authenticate,
    undefined
  );

  
  const [errorMessage, setErrorMessage] = useState('')
  const {register, handleSubmit, formState:{errors}} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async(data) =>{


        //server actions
        const resp = await createUser(data);

        if(!resp.ok) return <p>faile to create user</p>


        const {name, email, password} = data;

        await login(email.toLowerCase(), password);
        window.location.replace('/');
        

    }

 



  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col">


        <label htmlFor="email">Nombre completo</label>
        <input
          className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5",
                {
                    'border-red-500': errors.name
                }
            )
          }
          type="text" 
          {...register('name', {required: true })}
          autoFocus
          />

      <label htmlFor="email">Correo electronico</label>
              <input
                className={
                    clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5",
                        {
                            'border-red-500': errors.email
                        }
                    )
                  }
                type="email"
                {...register('email', {required: true, pattern: /^\S+@\S+$/i })}
                />


        <label htmlFor="email">Contraseña</label>
        <input
          className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5",
                {
                    'border-red-500': errors.password
                }
            )
          }
          type="password"
          {...register('password', {required: true, minLength:6})}
          />

          <span className='text-red-500'>{errorMessage}</span>

        <button
          
          className="btn-primary">
          Crear cuenta
        </button>


        {/* divisor l ine */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth" 
          className="btn-secondary text-center">
          Ingresar
        </Link>

      </form>
  )
}
