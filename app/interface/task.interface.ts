export interface Tasks{
    id: string;
    title: string;
    description: string;
    done?: boolean;
    createAt?: Date;
    updateAt?: Date;
} 

export type CreateTask = Omit<Tasks, 'id' | 'createAt' | 'updateAt'>

export type UpdateTasks = Partial<CreateTask>