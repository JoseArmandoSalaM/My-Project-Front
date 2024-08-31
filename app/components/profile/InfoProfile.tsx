import { profile } from "@/app/api/login";
import { auth } from "@/app/auth.config"
import { useEffect } from "react"


export const InfoProfile = async () => {
        try {
        const session = await auth();
        const token = session?.user?.token
        console.log(token); 
        if(token !== null && token !== undefined){
            const response = await profile(token);
            
            if(response.ok){
                const userProfile = await response.json();
                console.log(userProfile)
            }else{
                console.log('Failed to fetch profile data');
            }
            
        } else{
            console.log('No session available');
        }
       

        } catch (error) {
            console.error('An error occurred:', error);

        }  
}