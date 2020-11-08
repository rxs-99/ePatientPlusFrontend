import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Person } from 'src/app/models/person';
import { AppointmentService } from 'src/app/services/appointment.service';
import { GetPatientService } from 'src/app/services/get-patient.service';
import { ResponseBubbleService } from 'src/app/services/response-bubble.service';
import { ResponseBubble } from 'src/app/ui/response_bubble';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  responseBubble: ResponseBubble;

  personId: number;
  person: Person = new Person(0, "", "", "", null);
  personAppointments: Appointment[] = [];

  constructor(private personService: GetPatientService, private appointmentService: AppointmentService,
    private responseBubbleService: ResponseBubbleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.responseBubble = this.responseBubbleService.getBubble();
    this.responseBubbleService.setBubble(null);
    
    this.personId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getPersonInfo(this.personId);
    this.getPersonAppointments(this.personId);
  }

  getPersonInfo(id: number): void {
    this.personService.getPerson(id).subscribe(
      (person) => {
        this.person = person;
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }

  getPersonAppointments(id: number): void {
    this.appointmentService.getAllAppointments().subscribe(
      (appointments) => {
        for(let appt of appointments) {
          if(appt.patient.id === id) {
            this.personAppointments.push(appt);
          }
        }
      }, 
      () =>{
        console.log("An error has occurred when retrieving appointments.");
      }
    )
  }

  cancelAppointment(id: number) {
    for(let appt of this.personAppointments) {
      if(appt.id === id) {
        if(appt.status === "pending") {
          appt.status = "cancelled by patient";
          this.appointmentService.update(appt).subscribe(
            () => {
              this.responseBubble = new ResponseBubble(false, "Appointment successfully cancelled.");
            }, 
            () => {
              this.responseBubble = new ResponseBubble(true, "There was an error cancelling your appointment.");
            }
          )
         
        }
      }
    }
  }

  clearResponseBubble() {
    this.responseBubbleService.setBubble(null);
    this.responseBubble = null;
  }
}
