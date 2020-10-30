import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
