import { auth } from "@/app/auth.config";
import { FormTools, MenuTop, Sidebar } from "@/app/components";
import { redirect } from "next/navigation";


interface Props {
  params: {
    id: string;
  }
}

export default async function page({params}: Props) {
  const {id} = params;

    const session = await auth(); 

    if(!session?.user){
      redirect('/')
    }

  return (
    <div>
    <MenuTop/>
    <Sidebar/>

    <FormTools id={id}/>

  </div>
  )
}
