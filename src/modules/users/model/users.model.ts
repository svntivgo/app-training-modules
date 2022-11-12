import { randomUUID } from 'crypto';
import { IUser } from '../interface/IUser.interface';

export class User implements IUser {
  id: string;
  nombre: string;
  apellido?: string;
  email: string;

  constructor(nombre: string, email: string, apellido?: string) {
    this.id = randomUUID();
    this.nombre = nombre;
    this.email = email;
    this.apellido = apellido;
  }
}
