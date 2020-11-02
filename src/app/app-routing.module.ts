import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
