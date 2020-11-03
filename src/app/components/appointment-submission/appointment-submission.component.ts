import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment-submission',
  templateUrl: './appointment-submission.component.html',
  styleUrls: ['./appointment-submission.component.css']
})
export class AppointmentSubmissionComponent implements OnInit {
  apptCreateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apptCreateForm = this.formBuilder.group({
      "doctor": "",
      "datetime": "",
      "comments": ""
    });
  }

  createAppointment(apptData: any): void {

  }
}
