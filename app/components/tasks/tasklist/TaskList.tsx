import { tasksStore } from '@/app/store/tasksStore';
import { useEffect } from 'react';
import { TaskItem } from './TaskItem';
import { getTaskRequest } from '@/app/api/tasks';
import { auth } from '@/app/auth.config';


interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}


export const TaskList = async () => {
// const {tasks} = useTasks()

const session = await auth()
const token = session?.user.token;

let tasks: Task[] = [];

 try {
  if(token !== undefined){
    const res = await getTaskRequest(token);
    tasks = await res.json();
  }
 } catch (error) {
  console.error(error);
 }
  



  return (
    <div className='mt-2'>
      {tasks && tasks.length > 0 ? (
        tasks.map((task: Task) => <TaskItem task={task} key={task.id} />)
      ) : (
        <p>No puedes ver las tareas</p>
      )}
    </div>
  )
}
