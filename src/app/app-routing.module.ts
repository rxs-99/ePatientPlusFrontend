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
import { DoctorGuard } from './guards/doctor.guard';
import { PatientGuard } from './guards/patient.guard';
import { NurseGuard } from './guards/nurse.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { AuthTokenNotFoundComponent } from './components/auth-token-not-found/auth-token-not-found.component';
import { AuthTokenExpiredComponent } from './components/auth-token-expired/auth-token-expired.component';

const routes: Routes = [
	{
		path: "patient",
		component: PatientHomeComponent,
		canActivate: [PatientGuard]
	},
	{
		path: "nurse",
		component: NurseHomeComponent,
		canActivate: [NurseGuard]
	},
	{
		path: "doctor",
		component: DoctorHomeComponent,
		canActivate: [DoctorGuard]
	},
	{
		path: "profile/:id",
		component: PatientInfoComponent,
		canActivate: [PatientGuard]
	},
	{
		path: "edit_profile/:id",
		component: PatientProfileEditComponent,
		canActivate: [PatientGuard]
	},
	{
		path: "create_appt",
		component: AppointmentSubmissionComponent,
		canActivate: [PatientGuard]
	},
	{
		path: "prescriptions/:id",
		component: PrescriptionsInfoComponent,
		canActivate: [PatientGuard]
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: "notAuthorized",
		component: NotAuthorizedComponent
	},
	{
		path: "authTokenNotFound",
		component: AuthTokenNotFoundComponent
	},
	{
		path: "authTokenExpired",
		component: AuthTokenExpiredComponent
	},
	{
		path: "**",
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
