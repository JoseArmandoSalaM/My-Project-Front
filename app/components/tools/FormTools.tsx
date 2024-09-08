import { getToolsById } from '@/app/actions/pedidos/get-tools'
import React from 'react'
import { useForm } from 'react-hook-form';
import ToolsForm from './ToolsForm';
import { auth } from '@/app/auth.config';


interface Props {
    id: string;
}


export const FormTools = async ({id}: Props) => {

   const tools = await getToolsById(id);


   
    const session = await auth();
    const token = session?.user.token;
    if(!token) return 'No puedes actualizar sin estar autenticado';
  return (
    <ToolsForm tools={tools ?? {}} token={token}/>
  )
}

