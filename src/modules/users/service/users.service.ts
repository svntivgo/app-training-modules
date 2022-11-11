import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getSaludoUsers(): string {
    return 'Hola desde el servicio de Users';
  }
}
