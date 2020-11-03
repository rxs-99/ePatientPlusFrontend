import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Medication } from 'src/app/models/Medication';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MedicationService } from 'src/app/services/medication.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  thead: string[] = ["ID", "Name", "Date", "Status", "Comment"];

  appointments: Appointment[];
  appointments_length: number = 0;
  selectedAppointment: Appointment;

  searchText: string;
  dosage: number;
  medications: Medication[];
  medications_length: number;
  selectedMedication: Medication;

  constructor(private appointmentService: AppointmentService, private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.getAllAppointments();
    if(this.appointmentService.subsVar === undefined){
      this.appointmentService.subsVar = this.appointmentService.invokeDeleteSelected.subscribe((appointment: Appointment) => {
        this.deleteSelected(appointment);
      });
    }
  }

  getAllAppointments(): void{
    this.appointmentService.getAll().subscribe(
      data => {
        this.appointments = data;
        this.appointments_length = this.appointments.length;
        console.log(this.appointments);
      },
      () => {console.log("Uh-Oh, Couldn't fetch appointments! Please try again!")}
    )
  }

  onSelect(selectedAppointment: Appointment): void{
    this.selectedAppointment = selectedAppointment;
    console.log(this.selectedAppointment);
    this.appointmentService.selectedAppointment(selectedAppointment);
  }

  deleteSelected(appointment: Appointment): void{
    

    for(let i: number = 0; i < this.appointments_length; i++){
      if(this.appointments[i].id === this.selectedAppointment.id){
        this.appointments.splice(i,1);
        this.appointments_length--;
        
        break;
      }
    }

    //this.appointmentService.update(this.selectedAppointment).subscribe(val => console.log(val));
    this.selectedAppointment = null;
  }

  onClickDeny(): void{
    this.selectedAppointment.status = "denied";
    this.deleteSelected(this.selectedAppointment);
    console.log(this.selectedAppointment);
  }

  getAllMedications(): void{
    this.medicationService.getAll().subscribe(
      data => {
        this.medications = data;
        this.medications_length = this.medications.length;
        console.log(this.medications);
      },
      () => {console.log("Uh-Oh!, Couldn't fectch medications! Please try again!")}
    )
  }

  onSelectMedication(medication: Medication): void{
    this.selectedMedication = medication;
    console.log(this.selectedMedication);
  }

}
