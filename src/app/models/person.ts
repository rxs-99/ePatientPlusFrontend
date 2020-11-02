export class Person {
  private id: number;
  private name: string;
  private email: string;
  private phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  setId(newId: number): void {
    this.id = newId;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  setPhone(newPhone: string): void {
    this.phone = newPhone;
  }
}