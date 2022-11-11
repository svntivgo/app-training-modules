import { TasksService } from './../service/tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('message')
  getSaludoTasks(): string {
    return this.tasksService.getSaludoTasks();
  }
}
