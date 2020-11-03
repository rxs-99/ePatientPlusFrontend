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

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selected_option: string): void {
    this.selected_option = selected_option;
  }

}
