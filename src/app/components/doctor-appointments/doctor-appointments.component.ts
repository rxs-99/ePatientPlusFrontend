import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  thead: string[] = ["ID", "Name", "Date", "Status", "Comment"];

  appointments: Appointment[];
  len: number = 0;
  selectedAppointment: Appointment;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAllAppointments();
    if(this.appointmentService.subsVar === undefined){
      this.appointmentService.subsVar = this.appointmentService.invokeDeleteSelected.subscribe(() => {
        console.log("in nogoninint");
        console.log(this.selectedAppointment);
        
        this.deleteSelected();
      });
    }
  }

  getAllAppointments(): void{
    this.appointmentService.getAll().subscribe(
      data => {
        this.appointments = data;
        this.len = this.appointments.length;
        console.log(this.appointments);
      },
      () => {console.log("Uh-Oh, Couldn't fetch appointments! Please try again!")}
    )
  }

  onSelect(selectedAppointment: Appointment): void{
    this.selectedAppointment = selectedAppointment;
    console.log(this.selectedAppointment);
  }

  deleteSelected(): void{
    console.log(this.len);
    console.log(this.selectedAppointment);
    console.log("deleted");
    for(let i: number = 0; i < this.len; i++){
      if(this.appointments[i].id === this.selectedAppointment.id){
        this.appointments.splice(i,1);
        this.len--;
        
        break;
      }
    }
    //this.appointmentService.update(this.selectedAppointment).subscribe(val => console.log(val));
    this.selectedAppointment = null;
  }

}
