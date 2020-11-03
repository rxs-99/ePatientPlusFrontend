import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  options: string[] = [
    "Appointments",
    "Medications",
  ];

  selected_option: string;

  appointmentsVisibility: boolean;
  medicationsVisibility: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selected_option: string): void {
    this.selected_option = selected_option;

    if(selected_option === 'Appointments'){
      this.appointmentsVisibility = true;
      this.medicationsVisibility = false;
    } else {
      this.medicationsVisibility = true;
      this.appointmentsVisibility = false;
    }
  }

}
