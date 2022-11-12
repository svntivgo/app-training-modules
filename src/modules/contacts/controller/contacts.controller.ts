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
import { Contact } from 'src/modules/contacts/model/contacts.model';
import { ContactsService } from '../service/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('message')
  getSaludoContacts(): string {
    return this.contactsService.getSaludoContacts();
  }

  @Get('')
  getAllContacts(): Contact[] {
    return this.contactsService.getAllContacts();
  }

  @Get(':id')
  getContactById(@Param('id') id: string): Contact | string {
    return this.contactsService.getContactById(id);
  }

  @Post()
  createContact(@Body() contact: Contact): Contact | string {
    return this.contactsService.createContact(contact);
  }

  @Put(':id')
  updateContact(
    @Param('id') id: string,
    @Body() contact: Contact,
  ): Contact | string {
    return this.contactsService.updateContact(id, contact);
  }

  @Patch(':id')
  patchContact(
    @Param('id') id: string,
    @Body() contact: Contact,
  ): Contact | string {
    return this.contactsService.patchContact(id, contact);
  }

  @Delete(':id')
  deleteContactById(@Param('id') id: string): boolean {
    return this.contactsService.deleteContactById(id);
  }
}
