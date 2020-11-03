import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';
import { Person } from 'src/app/models/person';
import { AppointmentService } from 'src/app/services/appointment.service';
import { GetPatientService } from 'src/app/services/get-patient.service';

@Component({
  selector: 'app-appointment-submission',
  templateUrl: './appointment-submission.component.html',
  styleUrls: ['./appointment-submission.component.css']
})
export class AppointmentSubmissionComponent implements OnInit {
  apptCreateForm: FormGroup;
  doctorList: Person[];

  constructor(private apptService: AppointmentService, private personService: GetPatientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apptCreateForm = this.formBuilder.group({
      "doctor": "",
      "date": "",
      "time": "",
      "comments": ""
    });
    this.getDoctors();
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
    // TODO: people need to change.
    let appt: Appointment = new Appointment(0, this.doctorList[0], this.doctorList[0], apptData.date, "pending", apptData.comments)
    this.apptService.createAppointment(appt).subscribe(
      () => {
        console.dir(appt);
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }
}
