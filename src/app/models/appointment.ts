import { ThrowStmt } from '@angular/compiler';
import { Person } from './Person';

export class Appointment{

    public id:number;
    public patient:Person;
    public doctor:Person;
    public date:Date;
    public status:String;
    public comment:String;

    constructor(id:number,  patient:Person, doctor:Person, date:Date, status:String, comment:String)
    {
        
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = status;
        this.comment = comment;
    }

}