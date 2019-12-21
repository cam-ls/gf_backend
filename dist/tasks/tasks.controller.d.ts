import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTaskById(id: number): Promise<Task>;
    createTask(createTask: CreateTaskDTO): Promise<Task>;
}
