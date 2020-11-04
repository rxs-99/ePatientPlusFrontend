import { OnInit } from '@angular/core';
import { Person } from './person';

export class Appointment {
    id: number;
    comment: string;
    date: Date;
    doctor: Person;
    patient: Person;
    status: string

    getId(): number {
        return this.id;
    }

    getComment(): string {
        return this.comment;
    }

    getDate(): Date {
        return new Date(this.date);
    }

    getDoctor(): Person {
        return this.doctor;
    }

    getPatient(): Person {
        return this.patient;
    }

    getStatus(): string {
        return this.status;
    }
}