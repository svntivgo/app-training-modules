import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getSaludoTasks(): string {
    return 'Hola desde el servicio de Tasks';
  }
}
