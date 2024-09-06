"use client";

import { Tasks } from "@/app/interface";
import { tasksStore } from "@/app/store/tasksStore";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";

interface Props {
    task: Tasks
}

export function TaskItem({task}: Props){

    const {deleteTask, updateTask} = tasksStore()

    return (
        <div key={task.id} className="bg-black p-2 flex justify-between hover:cursor-pointer">
       <div>
       <h1 className="text-white">{task.title}</h1>
       <p className="text-white">{task.description}</p>
       </div>
       <div className="flex gap-x-2">
       
        {
            task.done ? ( 
            <IoCheckmarkDone
            className="text-blue-500"
                onClick={async() => {
                    await updateTask(task.id,{
                        done: !task.done
                    })
                }}
                />) : (
                    <IoCheckmarkDone
                    className="text-gray-500"
                    onClick={async() => {
                        await updateTask(task.id,{
                            done: !task.done
                        })
                    }}
                    />
                )
        }
       
        <IoTrash
        className="text-red-700"
        onClick={async() => {
            if(!window.confirm("Are you sure you want to delete this task?")) return;
            await deleteTask(task.id)
        }}
        />
       </div>
      </div>
    )
}