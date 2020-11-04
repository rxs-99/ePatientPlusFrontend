import { Position } from './position';

export class Person {
    constructor(
        private id: number,
        private email: string,
        private name: string,
        private phone: string,
        private position: Position
    ) {}

    getId(): number{
        return this.id;
    } 

    getEmail(): string{
        return this.email;
    }

    getName(): string{
        return this.name;
    }

    getPhone(): string{
        return this.phone;
    }

    getPosition(): string{
        return this.position.getName();
    }
}