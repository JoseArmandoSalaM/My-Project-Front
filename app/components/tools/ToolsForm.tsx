"use client";

import { deleteTool, updateTool } from "@/app/api/tool";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";



interface Tool {
    id: string;
    Name: string;
    Cantidad_disponible: number;
}


interface Props{
    tools: Partial<Tool>;
    token: string;
}

export default function ToolsForm({tools, token}: Props) {


    const {
        handleSubmit,
        register,
        formState: {isValid},
    } = useForm<Tool>({
        defaultValues:{
           ...tools
           
        }
    });


    const onSubmit = async (data: Tool) => {

        const tool = await updateTool(data,token);

        if(tool?.ok){
           window.location.replace('/tools');
        } else {
            alert('Error')
        }
    }

    const handleDelete = async () => {
        if(tools.id){
            const response = await deleteTool(tools.id, token)
            alert(response.message);
        } else {
            alert('Error: ID no encontrado');
    }
}

  return (
    <div className="flex justify-center mt-10">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <div className="text-center mb-6">
      <h1 className="font-bold text-2xl">Agregar herramienta</h1>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label className="block text-left mb-1">Nombre de la herramienta:</label>
          <input 
          id="name"
          {...register('Name',{ required: true})}
            type="text" 
            className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div>
          <label className="block text-left mb-1">Cantidad:</label>
          <input 
          id="cantidad_disponible"
          {...register('Cantidad_disponible',{ required: true})}
            type="number" 
            className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div className="text-center mt-6">
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Agregar
          </button>

          <button
          onClick={() =>{
            if(window.confirm('¿Estas seguro que deseas eliminar este producto?')){
                handleDelete();
            }
          }}
          className="bg-red-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Eliminar
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
  );
}