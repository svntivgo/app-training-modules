import { Injectable } from '@nestjs/common';
import { Task } from '../model/tasks.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [];

  tarea1: Task = new Task('lavar', 'id1');
  tarea2: Task = new Task('jugar', 'id2');
  tarea3: Task = new Task('cantar', 'id1');

  constructor() {
    this.tasks.push(this.tarea1);
    this.tasks.push(this.tarea2);
    this.tasks.push(this.tarea3);
  }

  getSaludoTasks(): string {
    return 'Hola desde el servicio de Tasks';
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | string {
    const task = this.tasks.find((task) => task.id === id);
    return task ? task : 'Tarea no existe';
  }

  createTask(task: Task): Task | string {
    if (!task.task) return 'Debe enviar una tarea';
    const nuevoTask: Task = new Task(task.task, task.userId);
    this.tasks.push(nuevoTask);
    return nuevoTask;
  }

  updateTask(id: string, task: Task): Task | string {
    if (!task.task) return 'Debe enviar una tarea';
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) return 'Tarea no existe';
    taskFound.task = task.task ?? taskFound.task;
    return taskFound;
  }

  patchTask(id: string, task: Task): Task | string {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) return 'Usuario no existe';
    taskFound.task = task.task ?? taskFound.task;
    return taskFound;
  }

  deleteTaskById(id: string): boolean {
    const valor = this.tasks.find((task, i) => {
      if (task?.id === id) {
        this.tasks.splice(i, 1);
        return task;
      }
    });
    return valor ? true : false;
  }
}
