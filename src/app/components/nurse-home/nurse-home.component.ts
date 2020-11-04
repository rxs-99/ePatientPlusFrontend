import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { Person } from 'src/app/models/person';
import { AppointmentService } from 'src/app/services/appointment.service';
import {GetPatientService} from 'src/app/services/get-patient.service'

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {

  constructor(private appointmentService:AppointmentService, private patientService:GetPatientService) { }

  ngOnInit(): void {
    this.getAllAppointments()
    this.getAllPatients()
  }

  appointments:Appointment[] = [];

  allAppointments:Appointment[] = [];

  allPatients:Person[] = [];


  showAllAppointments:boolean = false;
  showPending:boolean = true;
  showPatients:boolean = false;
  

  handleChoice(choice:String)
  {
    switch(choice)
    {
      case 'all':
        {
          this.showAllAppointments = true;
          this.showPending = false;
          this.showPatients = false;
          break;
        }

      case 'pending':
        {
          this.showAllAppointments = false;
          this.showPending = true;         
          this.showPatients = false;
          break;
        }
        
      case 'patients':
        {
          this.showAllAppointments = false;
          this.showPending = false;         
          this.showPatients = true;
          break;
        }
    }
  }


  approve(index:number) : void
  {
    console.log("approve" + index);

    let tempId:number = this.appointments[index].id; 
    this.appointments[index].status = "approved"
    this.updateAppointmentStatusLocally(tempId, "approved")
    this.appointmentService.updateAppointment(this.appointments[index]).subscribe(()=>{
      console.log(this.appointments[index])
      this.appointments.splice(index, 1)
    });
  }
  
  deny(index:number) : void
  {
    console.log("deny" + index);

    let tempId:number = this.appointments[index].id; 
    this.appointments[index].status= "denied"
    this.updateAppointmentStatusLocally(tempId, "denied")
    this.appointmentService.updateAppointment(this.appointments[index]).subscribe(()=>{
      console.log(this.appointments[index])
      this.appointments.splice(index, 1)
    });
  }



  updateAppointmentStatusLocally(id:number, status:string){
    this.allAppointments.forEach(e => {
      if(e.id == id)
      {
        e.status = status;
      }
    })
  }

  getAllAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(
     
      (data) => {
        console.log(data)
        this.allAppointments = data
        this.appointments = this.allAppointments.filter((v, i, a) => v.status === "pending")
      
      });

  }


  getAllPatients(): void {
    this.patientService.getAllPatients().subscribe(
     
      (data) => {
        console.log(data)
        this.allPatients = data;
      });

  }

}
