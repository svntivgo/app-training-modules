import { Controller, Get } from '@nestjs/common';
import { ContactsService } from '../service/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('message')
  getSaludoContacts(): string {
    return this.contactsService.getSaludoContacts();
  }
}
