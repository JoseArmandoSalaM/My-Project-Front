import { auth } from '@/app/auth.config'
import React from 'react'

const API = 'http://localhost:4000/api';

export const getTools = async () => {

    const session = await auth()
    const token = session?.user.token;

    const tools = await fetch(`${API}/tools`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const tool = await tools.json(); 

    return {
        tools: tool
    }


   
}
