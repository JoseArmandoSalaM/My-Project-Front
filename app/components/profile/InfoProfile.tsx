
import { profile } from "@/app/api/login";
import { auth } from "@/app/auth.config"
import { Profile } from "./Profile";





export default async function InfoProfile(){
    const session = await auth();
    const token = session?.user?.token;
    //validacion de token
    if(!token) return <p>No session available</p>;
    if(token === null && token === undefined) return <p>No available token</p>
    //Llamada a la api
    const response = await profile(token);
    //Si la respues es erronea
    if(!response.ok) return <p>Failed to fetch profile data</p>;
    //Respues success
    const userProfile = await response.json();







   return (
    <Profile userProfile={userProfile} token={token}/>
   )
        


        
     
}