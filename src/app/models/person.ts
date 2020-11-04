export class Person {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: any;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}