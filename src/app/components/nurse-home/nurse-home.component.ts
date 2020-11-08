import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { Person } from 'src/app/models/person';
import { AppointmentService } from 'src/app/services/appointment.service';
import {GetPatientService} from 'src/app/services/get-patient.service'
import { ResponseBubble } from 'src/app/ui/response_bubble';
import { ResponseBubbleService } from 'src/app/services/response-bubble.service';
import * as EmailValidator from 'email-validator';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {

  constructor(private appointmentService:AppointmentService, private patientService:GetPatientService, private responseBubbleService: ResponseBubbleService, 
    private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.getAllAppointments()
    this.getAllPatients()

    // code below involving forms is from patient-profile-edit credit to Matt

    this.responseBubble = this.responseBubbleService.getBubble();
    this.responseBubbleService.setBubble(null);

    this.personId = this.authService.getId();
    this.personEditForm = this.formBuilder.group({
      "name": "",
      "email": "",
      "phone": ""
    });

    this.patientService.getPerson(this.personId).subscribe(
      (person) => {
        this.person = person;
        this.personEditForm.setValue({
          "name": person.name,
          "email": person.email,
          "phone": person.phone
        })
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    );
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
  showProfile:boolean = false;

  showMustHaveReason:boolean = false;

  showChange:boolean = false;
  
  chosen:number = -1;
  reason:string;


  toggleModal(index: number)
  {
    if(this.showMustHaveReason)
    {
      this.showMustHaveReason = false
    }

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
    this.showProfile = choice === 'profile'
    this.showChange = false
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

 // code below is from patient-profile-edit credit to Matt

  responseBubble: ResponseBubble;

  personId: number;
  person: Person = new Person(0, "", "", "", null);
  personEditForm: FormGroup;

  
  editPersonInfo(personData: any): void {
    // Validation.
    // Regex created by Don Johnston.
	  // https://regexlib.com/REDetails.aspx?regexp_id=607
    let phoneRegex: RegExp = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/

    if(!personData.name) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid name.");
      return;
    } else if(!EmailValidator.validate(personData.email)) {
      console.dir(personData.email);
      this.responseBubble = new ResponseBubble(true, "Please enter a valid email address.");
      return;
    } else if(!phoneRegex.test(personData.phone)) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid phone.");
      return;


    }

    this.person.name = personData.name;
    this.person.email = personData.email;
    this.person.phone = personData.phone;

    this.showChange = false;
    
    this.patientService.setPerson(this.personId, this.person).subscribe(
      () => {
       // this.router.navigate(['/profile/' + this.personId])

        this.responseBubbleService.setBubble(new ResponseBubble(false, "Your profile was successfully changed."));
        this.showChange = true;
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }

  clearResponseBubble() {
    this.responseBubbleService.setBubble(null);
    this.responseBubble = null;
  }

}