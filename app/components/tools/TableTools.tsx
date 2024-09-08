import { getTools } from '@/app/actions/pedidos/get-tools';
import Link from 'next/link'
import React from 'react'

interface Tool {
  id: string;
  Name: string;
  Cantidad_disponible: number;
}

export default async function TableTools(){

  const {tools} = await getTools();


  return (
    <div className='m-16 flex-auto text-end'>
      <Link href="/pedidos/create" className='btn-primary rounded'>Agregar herramienta</Link>
    <div className='m-8 border-gray-300 border-2'>
      
       {tools.length > 0 ? (
        <table className='min-w-full text-sm rounded-sm'>
          <thead className='bg-gray-200'>
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">#ID</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Nombre</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Cantidad disponible</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool:Tool) => (
              <tr key={tool.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">{tool.id.split('-').at(-1)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">{tool.Name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">{tool.Cantidad_disponible}</td>
                <td className="text-sm text-gray-900 font-light px-6 text-center">
                  <Link href={`/pedidos/${tool.id}`} className="hover:underline">
                    Actualizar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-10">No hay herramientas disponibles.</p>
      )}
    </div>
      </div>


  )
}
