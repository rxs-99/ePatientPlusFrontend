import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorAppointmentActionComponent } from './components/doctor/doctor-appointment-action/doctor-appointment-action.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: "login", component: LoginComponent},
	{ path: "patient", component: PatientHomeComponent },
	{ path: "nurse", component: NurseHomeComponent },
	{ path: "doctor", component: DoctorHomeComponent },
	{ path: "doctors", component: DoctorComponent},
	{ path: "doctor/appointments", component: DoctorAppointmentActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
