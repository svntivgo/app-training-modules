import { Injectable } from '@nestjs/common';
import { User } from '../model/users.model';

@Injectable()
export class UsersService {
  users: User[] = [];

  usuario1: User = new User('Pepito', 'pepito@email.com', 'Garcia');
  usuario2: User = new User('Juanito', 'juanito@email.com', 'Garcia');
  usuario3: User = new User('Maria', 'maria@email.com');

  constructor() {
    this.users.push(this.usuario1);
    this.users.push(this.usuario2);
    this.users.push(this.usuario3);
  }

  getSaludoUsers(): string {
    return 'Hola desde el servicio de Users';
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | string {
    const user = this.users.find((user) => user.id === id);
    return user ? user : 'Usuario no existe';
  }

  createUser(user: User): User | string {
    if (!user.nombre || !user.email) return 'Debe enviar nombre y email';
    const nuevoUser: User = new User(user.nombre, user.email, user.apellido);
    this.users.push(nuevoUser);
    return nuevoUser;
  }

  updateUser(id: string, user: User): User | string {
    if (!user.nombre || !user.email) return 'Debe enviar nombre y email';
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound) return 'Usuario no existe';
    userFound.nombre = user.nombre ?? userFound.nombre;
    userFound.email = user.email ?? userFound.email;
    userFound.apellido = user.apellido ?? userFound.apellido;
    return userFound;
  }

  patchUser(id: string, user: User): User | string {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound) return 'Usuario no existe';
    userFound.nombre = user.nombre ?? userFound.nombre;
    userFound.email = user.email ?? userFound.email;
    userFound.apellido = user.apellido ?? userFound.apellido;
    return userFound;
  }

  deleteUserById(id: string): boolean {
    const valor = this.users.find((user, i) => {
      if (user?.id === id) {
        this.users.splice(i, 1);
        return user;
      }
    });
    return valor ? true : false;
  }
}
