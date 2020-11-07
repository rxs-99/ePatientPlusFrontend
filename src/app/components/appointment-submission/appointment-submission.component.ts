import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Person } from 'src/app/models/person';
import { AppointmentService } from 'src/app/services/appointment.service';
import { GetPatientService } from 'src/app/services/get-patient.service';
import { ResponseBubbleService } from 'src/app/services/response-bubble.service';
import { ResponseBubble } from 'src/app/ui/response_bubble';

@Component({
  selector: 'app-appointment-submission',
  templateUrl: './appointment-submission.component.html',
  styleUrls: ['./appointment-submission.component.css']
})
export class AppointmentSubmissionComponent implements OnInit {
  responseBubble: ResponseBubble;
  
  apptCreateForm: FormGroup;
  applicant: Person;
  doctorList: Person[];

  constructor(private apptService: AppointmentService, private personService: GetPatientService, private formBuilder: FormBuilder,
    private router: Router, private responseBubbleService: ResponseBubbleService) { }

  ngOnInit(): void {
    this.apptCreateForm = this.formBuilder.group({
      "doctor": "",
      "date": "",
      "time": "",
      "comments": ""
    });
    this.getApplicant();
    this.getDoctors();
  }

  getApplicant(): void {
    this.personService.getPerson(parseInt(localStorage.getItem("person_id"))).subscribe(
      (person) => {
        this.applicant = person;
      },
      () => {
        console.log("The getApplicant method call failed.");
      }
    )
  }

  getDoctors(): void {
    this.personService.getDoctors().subscribe(
      (doctors) => {
        this.doctorList = doctors;
      },
      () => {
        console.log("The getDoctors method call failed.");
      }
    )
  }

  createAppointment(apptData: any): void {
    // Validation
    if(!apptData.doctor) {
      this.responseBubble = new ResponseBubble(true, "Please select a doctor.");
      return;
    } else if(!apptData.date) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid date.");
      return;
    } else if(!apptData.time) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid time.");
      return;
    }

    let appt: Appointment = new Appointment(0, this.applicant, this.getDoctorById(parseInt(apptData.doctor)), apptData.date, "pending", apptData.comments)
    this.apptService.createAppointment(appt).subscribe(
      () => {
        this.router.navigate(['/profile/' + localStorage.getItem("person_id")]);
        this.responseBubbleService.setBubble(new ResponseBubble(false, "Your appointment was successfully submitted!"));
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }

  private getDoctorById(id: number): Person {
    for(const doctor of this.doctorList) {
      if(doctor.id === id) {
        return doctor;
      }
    }

    return null;
  }

  clearResponseBubble() {
    this.responseBubbleService.setBubble(null);
    this.responseBubble = null;
  }
}
