import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto, UserPatchDto } from '../model/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  usuario1: UserDto = new UserDto('Pepito', 'pepito@email.com', 'Garcia');
  usuario2: UserDto = new UserDto('Juanito', 'juanito@email.com', 'Garcia');
  usuario3: UserDto = new UserDto('Maria', 'maria@email.com');

  constructor() {
    this.users.push(this.usuario1);
    this.users.push(this.usuario2);
    this.users.push(this.usuario3);
  }

  getSaludoUsers(): string {
    return 'Hola desde el servicio de Users';
  }

  getAllUsers(): UserDto[] {
    return this.users;
  }

  getUserById(id: string): UserDto | undefined {
    try {
      const user = this.users.find((user) => user.uuid === id);
      if (user === undefined) {
        throw new Error('No se encontró un usuario con ese id');
      }
      return user ? user : undefined;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  createUser(user: UserDto): UserDto | string {
    if (!user.name || !user.email) return 'Debe enviar nombre y email';
    const nuevoUser: UserDto = new UserDto(
      user.name,
      user.email,
      user.lastName,
    );
    this.users.push(nuevoUser);
    return nuevoUser;
  }

  updateUser(id: string, user: UserDto): UserDto | string {
    if (!user.name || !user.email) return 'Debe enviar nombre y email';
    const userFound = this.users.find((user) => user.uuid === id);
    if (!userFound) return 'Usuario no existe';
    userFound.name = user.name;
    userFound.email = user.email;
    userFound.lastName = user.lastName ?? userFound.lastName;
    return userFound;
  }

  patchUser(id: string, user: UserPatchDto): UserDto | string {
    const userFound = this.users.find((user) => user.uuid === id);
    if (!userFound) return 'Usuario no existe';
    userFound.name = user.name ?? userFound.name;
    userFound.email = user.email ?? userFound.email;
    userFound.lastName = user.lastName ?? userFound.lastName;
    return userFound;
  }

  deleteUserById(id: string): boolean {
    const valor = this.users.find((user, i) => {
      if (user?.uuid === id) {
        this.users.splice(i, 1);
        return user;
      }
    });
    return valor ? true : false;
  }
}
