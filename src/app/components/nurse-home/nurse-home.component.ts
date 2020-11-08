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

  allCancelableAppointments:Appointment[] = [];

  showModal:boolean = false;


  showAllAppointments:boolean = false;
  showPending:boolean = true;
  showPatients:boolean = false;
  showCancelApproved:boolean = false;

  showMustHaveReason:boolean = false
  
  chosen:number = -1;
  reason:string;


  toggleModal(index: number)
  {
    this.showModal = !this.showModal;
    this.chosen = index;
  }

  cancelApp()
  {
    if(this.reason === undefined || this.reason === '')
    {
      this.showMustHaveReason = true;
      return;
    }


    this.allCancelableAppointments[this.chosen].comment += ("  Cancelled for: " + this.reason)
    this.cancel(this.chosen)

    this.reason = undefined;
    this.showMustHaveReason = false;

    this.chosen = -1;
    this.showModal = false;
  }

  handleChoice(choice:String)
  {
    this.showAllAppointments = choice === 'all'
    this.showPending = choice === 'pending'
    this.showPatients = choice === 'patients'
    this.showCancelApproved = choice === 'approved'
  }


  approve(index:number) : void
  {
    console.log("approve" + index);

    let tempId:number = this.appointments[index].id; 
    this.updateAppointmentStatusLocally(tempId, "approved")
    this.appointmentService.updateAppointment(this.appointments[index]).subscribe(()=>{
      console.log(this.appointments[index])
     
      let date:Date = new Date(this.appointments[index].date)
      let currentDate:Date = new Date()

      if(date > currentDate)
        this.allCancelableAppointments.push(this.appointments[index])

        this.appointments.splice(index, 1)
      
      
    });
  }
  
  deny(index:number) : void
  {
    console.log("deny" + index);

    let tempId:number = this.appointments[index].id; 
    this.updateAppointmentStatusLocally(tempId, "denied")
    this.appointmentService.updateAppointment(this.appointments[index]).subscribe(()=>{
      console.log(this.appointments[index])
      this.appointments.splice(index, 1)
    });
  }

  cancel(index:number) : void
  {
    console.log("cancel" + index);

    let tempId:number = this.allCancelableAppointments[index].id 
    this.updateAppointmentStatusLocally(tempId, "cancelled")
    this.appointmentService.updateAppointment(this.allCancelableAppointments[index]).subscribe(()=>{
      console.log(this.appointments[index])
      this.allCancelableAppointments.splice(index, 1)
    });
  }



  updateAppointmentStatusLocally(id:number, status:string){
    this.allAppointments.forEach(e => {
      if(e.id == id)
      {
        e.status = status;
      }
    })

    this.appointments.forEach(e => {
      if(e.id == id)
      {
        e.status = status;
      }
    })

    this.allCancelableAppointments.forEach(e => {
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

        let current:Date = new Date();

        this.allCancelableAppointments = this.allAppointments.filter((v, i, a) => {
          console.log(current + ":" + v.date + ':' +new Date(v.date))
          v.status === "approved" && new Date(v.date) > current
        })
      
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
