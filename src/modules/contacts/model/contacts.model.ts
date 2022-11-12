export class Contact {
  id: string;
  userId: string;
  nombre: string;
  apellidos?: string;
  telefono: string;
  email: string;

  constructor(
    userId: string,
    nombre: string,
    telefono: string,
    email: string,
    apellidos?: string,
  ) {
    this.userId = userId;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.apellidos = apellidos;
  }
}
