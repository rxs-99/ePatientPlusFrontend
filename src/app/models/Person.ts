import { Position } from './position';

export class Person {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public phone: string,
        public position: Position
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