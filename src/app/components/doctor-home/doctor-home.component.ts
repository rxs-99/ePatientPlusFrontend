import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  options: string[] = [
    "Appointments",
    "Medications",
    "Log Out"
  ];

  selected_option: string;

  appointmentsVisibility: boolean;
  medicationsVisibility: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSelect(selected_option: string): void {
    this.selected_option = selected_option;

    if (selected_option === 'Appointments') {
      this.appointmentsVisibility = true;
      this.medicationsVisibility = false;
    } else if (selected_option === 'Medications') {
      this.medicationsVisibility = true;
      this.appointmentsVisibility = false;
    } else if (selected_option === 'Log Out') {
      this.logout();
    }
  }

  logout(): void {
    this.authService.logOut();
  }

}
