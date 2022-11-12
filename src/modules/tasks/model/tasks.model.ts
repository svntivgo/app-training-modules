import { randomUUID } from 'crypto';
export class Task {
  id: string;
  userId?: string;
  task: string;

  constructor(task: string, userId?: string) {
    this.id = randomUUID();
    this.userId = userId;
    this.task = task;
  }
}
