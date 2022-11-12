import { Injectable } from '@nestjs/common';
import { Contact } from '../model/contacts.model';

@Injectable()
export class ContactsService {
  contacts: Contact[] = [];

  contacto1: Contact = new Contact(
    'id1',
    'juanito',
    '3123403',
    'juanito@email.com',
    'garcia',
  );
  contacto2: Contact = new Contact(
    'id2',
    'maria',
    '3129856',
    'maria@email.com',
    'herrera',
  );
  contacto3: Contact = new Contact(
    'id1',
    'camilo',
    '9633403',
    'camilo@email.com',
    'garcia',
  );

  constructor() {
    this.contacts.push(this.contacto1);
    this.contacts.push(this.contacto2);
    this.contacts.push(this.contacto3);
  }

  getSaludoContacts(): string {
    return 'Hola desde el servicio de Contacts';
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: string): Contact | string {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact ? contact : 'Tarea no existe';
  }

  createContact(contact: Contact): Contact | string {
    if (
      !contact.userId ||
      !contact.nombre ||
      !contact.telefono ||
      !contact.email
    )
      return 'Debe enviar id usuario, nombre, telefono, email';
    const nuevocontact: Contact = new Contact(
      contact.userId,
      contact.nombre,
      contact.telefono,
      contact.email,
      contact.apellidos,
    );
    this.contacts.push(nuevocontact);
    return nuevocontact;
  }

  updateContact(id: string, contact: Contact): Contact | string {
    if (
      !contact.userId ||
      !contact.nombre ||
      !contact.telefono ||
      !contact.email
    )
      return 'Debe enviar id usuario, nombre, telefono, email';
    const contactFound = this.contacts.find((contact) => contact.id === id);
    if (!contactFound) return 'Contacto no existe';
    contactFound.userId = contact.userId ?? contactFound.userId;
    contactFound.nombre = contact.nombre ?? contactFound.nombre;
    contactFound.telefono = contact.telefono ?? contactFound.telefono;
    contactFound.email = contact.email ?? contactFound.email;
    contactFound.apellidos = contact.apellidos ?? contactFound.apellidos;
    return contactFound;
  }

  patchContact(id: string, contact: Contact): Contact | string {
    const contactFound = this.contacts.find((contact) => contact.id === id);
    if (!contactFound) return 'Contacto no existe';
    contactFound.userId = contact.userId ?? contactFound.userId;
    contactFound.nombre = contact.nombre ?? contactFound.nombre;
    contactFound.telefono = contact.telefono ?? contactFound.telefono;
    contactFound.email = contact.email ?? contactFound.email;
    contactFound.apellidos = contact.apellidos ?? contactFound.apellidos;
    return contactFound;
  }

  deleteContactById(id: string): boolean {
    const valor = this.contacts.find((contact, i) => {
      if (contact?.id === id) {
        this.contacts.splice(i, 1);
        return contact;
      }
    });
    return valor ? true : false;
  }
}
