import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TasksService {
    private TaskRepository;
    constructor(TaskRepository: TaskRepository);
    createTask(createTaskDto: CreateTaskDTO): Promise<Task>;
    getTaskById(id: number): Promise<Task>;
}
