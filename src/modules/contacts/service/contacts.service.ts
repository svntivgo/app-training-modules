import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getSaludoContacts(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
