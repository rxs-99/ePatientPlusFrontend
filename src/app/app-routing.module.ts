import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientProfileEditComponent } from './components/patient-profile-edit/patient-profile-edit.component';
import { AppointmentSubmissionComponent } from './components/appointment-submission/appointment-submission.component';
import { PrescriptionsInfoComponent } from './components/prescriptions-info/prescriptions-info.component';

const routes: Routes = [
	{
		path: "patient",
		component: PatientHomeComponent
	},
	{
		path: "nurse",
		component: NurseHomeComponent
	},
	{
		path: "doctor",
		component: DoctorHomeComponent
	},
	{
		path: "profile/:id",
		component: PatientInfoComponent
	},
	{
		path: "edit_profile/:id",
		component: PatientProfileEditComponent
	},
	{
		path: "create_appt",
		component: AppointmentSubmissionComponent
	},
	{
		path: "prescriptions/:id",
		component: PrescriptionsInfoComponent
	},
	{
		path: "",
		component: LoginComponent
	},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
