
import { profile } from "@/app/api/login";
import { auth } from "@/app/auth.config"
import { FaCircleUser } from "react-icons/fa6";



export const InfoProfile = async () => {

    const session = await auth();
    const token = session?.user?.token;

    if(!token) return <p>No session available</p>;
    
    if(token === null && token === undefined) return <p>No available token</p>
    

    const response = await profile(token);

    if(!response.ok) return <p>Failed to fetch profile data</p>;


    const userProfile = await response.json();
   

   return (
    <div className="grid grid-cols-5 items-center">
        <div className="col-span-2 grid items-end">
            <p className="font-bold ">Informacion de perfil</p>
            <p>Actualice la información de su cuenta y la dirección de correo electrónico.</p>
            </div>
        

    
    <div className="max-w-sm mx-auto mt-5 col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
    <div className="bg-black p-4 flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
        <FaCircleUser className="w-8 h-8 text-gray-600" />
      </div>
      <h2 className="mt-4 text-white text-xl font-semibold">{userProfile.name}</h2>
      <p className="text-gray-400">{userProfile.email}</p>
      <p className="text-gray-400">{userProfile.role}</p>
    </div>
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="current-password" className="block text-gray-700">
          Current Password
        </label>
        <input
          id="current-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="new-password" className="block text-gray-700">
          New Password
        </label>
        <input
          id="new-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password" className="block text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Update Password</button>
    </div>
  </div>
  </div>
   )
        


        
     
}