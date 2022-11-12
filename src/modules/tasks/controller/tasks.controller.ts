import { TasksService } from './../service/tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from '../model/tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('message')
  getSaludoTasks(): string {
    return this.tasksService.getSaludoTasks();
  }

  @Get('')
  getAlltasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  gettaskById(@Param('id') id: string): Task | string {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createtask(@Body() task: Task): Task | string {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updatetask(@Param('id') id: string, @Body() task: Task): Task | string {
    return this.tasksService.updateTask(id, task);
  }

  @Patch(':id')
  patchtask(@Param('id') id: string, @Body() task: Task): Task | string {
    return this.tasksService.patchTask(id, task);
  }

  @Delete(':id')
  deletetaskById(@Param('id') id: string): boolean {
    return this.tasksService.deleteTaskById(id);
  }
}
