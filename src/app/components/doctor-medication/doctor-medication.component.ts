import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Medication } from 'src/app/models/Medication';
import { MedicationService } from 'src/app/services/medication.service';

@Component({
  selector: 'app-doctor-medication',
  templateUrl: './doctor-medication.component.html',
  styleUrls: ['./doctor-medication.component.css']
})
export class DoctorMedicationComponent implements OnInit {

  medications: Medication[] = [];
  len: number = 0;

  thead: string[] = ["ID", "Name", "Supplier", "Amount"];

  selectedMedication: Medication;
  restockSelectedMedicationName: string;
  restockSelectedMedication: Medication;

  newMedicationForm: FormGroup;
  stockMedicationForm: FormGroup;

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.getMedications();

    this.newMedicationForm = new FormGroup({
      name: new FormControl(''),
      supplier: new FormControl(''),
      amountStored: new FormControl('')
    });

    this.stockMedicationForm = new FormGroup({
      name: new FormControl(''),
      amountStored: new FormControl('')
    });
  }

  getMedications(): void {
    this.medicationService.getAll().subscribe(
      data => {
        this.medications = data;
        this.len = this.medications.length;
        console.log(this.medications);
      },
      () => {console.log("Uh-Oh!, Couldn't fectch medications! Please try again!")}
    )
  }

  onSelect(medication: Medication){
    this.selectedMedication = medication;
    console.log(this.selectedMedication);
  }

  add(): void{
    this.medicationService.add(this.newMedicationForm.value).subscribe(
      val => {
        console.log(val);
      },
      () => {console.log("Uh-Oh!, Couldn't add new medication! Please try again!")}
    )
  }

  restock(): void{
    this.restockSelectedMedication.amountStored += this.stockMedicationForm.value.amountStored;
    this.medicationService.update(this.restockSelectedMedication).subscribe(
      val => {
        console.log(val);
      },
      () => {console.log("Uh-Oh!, Couldn't fectch medications! Please try again!")}
    )
  }

  restock_select(medicationName: string): void{
    this.restockSelectedMedication = this.medications.filter(
      (data) => data.name.includes(medicationName)
    )[0];
  }

  
}
