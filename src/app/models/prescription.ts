import { Medication } from './Medication';
import { Person } from './Person';

export class Prescription {

  id: number
  medication: Medication
  patient: Person
  doctor: Person
  dosage: number

  constructor(id:number, medication: Medication,  patient:Person, doctor:Person, dosage: number)
  {
      this.id = id;
      this.medication = medication;
      this.patient = patient;
      this.doctor = doctor;
      this.dosage = dosage;
  }

}