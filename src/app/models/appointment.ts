import { ThrowStmt } from '@angular/compiler';
import { Person } from './person';

export class Appointment{

    private id:number;
    private patient:Person;
    private doctor:Person;
    private date:Date;
    private status:String;
    private comment:String;

    constructor(id:number,  patient:Person, doctor:Person, date:Date, status:String, comment:String)
    {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = status;
        this.comment = comment;
    }



    // these were generated using vs code



    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $patient
     * @return {Person}
     */
	public get $patient(): Person {
		return this.patient;
	}

    /**
     * Getter $doctor
     * @return {Person}
     */
	public get $doctor(): Person {
		return this.doctor;
	}

    /**
     * Getter $date
     * @return {Date}
     */
	public get $date(): Date {
		return this.date;
	}

    /**
     * Getter $status
     * @return {String}
     */
	public get $status(): String {
		return this.status;
	}

    /**
     * Getter $comment
     * @return {String}
     */
	public get $comment(): String {
		return this.comment;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $patient
     * @param {Person} value
     */
	public set $patient(value: Person) {
		this.patient = value;
	}

    /**
     * Setter $doctor
     * @param {Person} value
     */
	public set $doctor(value: Person) {
		this.doctor = value;
	}

    /**
     * Setter $date
     * @param {Date} value
     */
	public set $date(value: Date) {
		this.date = value;
    }
    

    public getFormattedDate():String {

        return "cool"
    }

    /**
     * Setter $status
     * @param {String} value
     */
	public set $status(value: String) {
		this.status = value;
	}

    /**
     * Setter $comment
     * @param {String} value
     */
	public set $comment(value: String) {
		this.comment = value;
	}
    

}