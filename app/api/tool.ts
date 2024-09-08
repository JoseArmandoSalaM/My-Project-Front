
const API = 'http://localhost:4000/api';


interface Tool {
    id?: string
    Name?: string;
    Cantidad_disponible?: number;
}

export async function updateTool(data: Tool, token: string | undefined){

    const {id, ...rest} = data;



   if(id){
       const tool = await fetch(`${API}/tools/${id}`,{
           method: 'PATCH',
           headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(rest)
        })

        return tool;
   } else {
    console.log(rest)

     const tool = await fetch(`${API}/tools/`,{
         method: 'POST',
         headers: {
             'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(rest)
      })

      return tool;

   }

}

export async function deleteTool(id:string, token: string) {
    console.log(id)

    const response = await fetch(`${API}/tools/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`, 
        }
    })

    if (response.ok) {
        return { message: 'Herramienta eliminada exitosamente' };
      } else {
        return { message: 'Error al eliminar la herramienta' };
      }
    
}

