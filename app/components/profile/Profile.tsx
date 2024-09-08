"use client";

import { updateProfile } from "@/app/api/login";
import { UserProfile } from "@/app/interface/userProfile";
import { DateTime } from "next-auth/providers/kakao";
import { useForm } from "react-hook-form";

export interface FormInputs{ 
    name: string;
    email: string;
}


interface Props{
    userProfile: UserProfile;
    token: string;
}

export const Profile = ({userProfile, token}: Props) => {

    const {
        handleSubmit,
        register,
        formState: {isValid},
    } = useForm<FormInputs>({
        defaultValues:{
            ...userProfile
        }
    });


    const onSubmit = async(data: FormInputs)=>{
      const id = userProfile.id;
      const { name, email } = data;
       const user = await updateProfile(id,token,name, email);

      if(!user.ok) return 'No se pudo actualizar';

      return 'Success';
    }
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-6 items-center" >
        <div className="col-span-1 sm:col-span-2 sm:col-start-2">
            <p className="font-bold ">Informacion de perfil</p>
            <p>Actualice la información de su cuenta y la dirección de correo electrónico.</p>
        </div>
        

    
        <form className="mt-5 col-span-1 sm:col-span-2 bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-4">Editar Perfil</h2>

        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            id="name"
            type="text"
            {...register('name', {required: true})}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>

  <div className="mb-5">
    <label htmlFor="email" className="block text-sm  font-medium text-gray-700">Correo Electrónico</label>
    <input 
    id="email"
    type="email"
    {...register('email', {required: true})}
    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
    />
  </div>

  <button
    type="submit"
    className="mt-4 text-sm bg-indigo-600 text-white rounded-lg py-2 px-4 font-semibold hover:bg-indigo-700 transition duration-300"
  >
    Guardar Cambios
  </button>
</form>
  </div>
    )
}