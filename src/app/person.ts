import { position } from './position';

export interface Person {
    id: number;
    email: string;
    name: string;
    phone: string;
    position: position;
}