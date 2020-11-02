import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.getPendingAppointments()
  }

  appointments:Appointment[] = [];


  getPendingAppointments(): void {
    this.appointmentService.getAllPendingAppointments().subscribe(
     
      (data) => {
        console.log(data)
        this.appointments = data});

  }



}
