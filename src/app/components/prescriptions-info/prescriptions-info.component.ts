import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescriptions-info',
  templateUrl: './prescriptions-info.component.html',
  styleUrls: ['./prescriptions-info.component.css']
})
export class PrescriptionsInfoComponent implements OnInit {
  patientId: number;
  patientPrescriptions: Prescription[] = [];

  constructor(private prescriptionService: PrescriptionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getPrescriptions(this.patientId);
  }

  getPrescriptions(id: number): void {
    this.prescriptionService.getAll().subscribe(
      (prescriptions) => {
        for(const prescription of prescriptions) {
          if(prescription.patient.id === id) {
            console.dir(prescription);
            this.patientPrescriptions.push(prescription);
          }
        }
      }, 
      () => {

      }
    )
  }
}
