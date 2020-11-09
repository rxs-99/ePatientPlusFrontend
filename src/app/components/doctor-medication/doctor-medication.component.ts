import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Medication } from 'src/app/models/medication';
import { MedicationService } from 'src/app/services/medication.service';

@Component({
  selector: 'app-doctor-medication',
  templateUrl: './doctor-medication.component.html',
  styleUrls: ['./doctor-medication.component.css']
})
export class DoctorMedicationComponent implements OnInit {

  pleaseWaitFlag: boolean = false;
  addMedicationFeedbackFlag: boolean = false;
  errorFlag: boolean = false;
  updateMedicationFeedbackFlag: boolean = false;
  updateErrorFlag: boolean = false;

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
        this.pleaseWaitFlag = false;
      },
      () => { console.log("Uh-Oh!, Couldn't fectch medications! Please try again!") }
    );
    this.pleaseWaitFlag = true;
  }

  onSelect(medication: Medication) {
    this.selectedMedication = medication;
    console.log(this.selectedMedication);
  }

  invalidNameFlag: boolean = false;
  invalidSupplierFlag: boolean = false;
  minAmountFlag: boolean = false;
  maxAmountFlag: boolean = false;
  invalidAmtFlag: boolean = false;
  duplicateMedFlag: boolean = false;
  add(): void {
    this.setInputFlagsFalse();

    if (!(/^[a-zA-Z][a-zA-Z\s]*$/.test(this.newMedicationForm.value.name)))
      this.invalidNameFlag = true;
    if (!(/^[a-zA-Z][a-zA-Z\s]*$/.test(this.newMedicationForm.value.supplier)))
      this.invalidSupplierFlag = true;
    if (!(/^[0-9]*$/.test(this.newMedicationForm.value.amountStored)))
      this.invalidAmtFlag = true;
    else {
      if (this.newMedicationForm.value.amountStored < 1)
        this.minAmountFlag = true;
      if (this.newMedicationForm.value.amountStored > 100)
        this.maxAmountFlag = true;
    }

    for(let med of this.medications){
      if(med.name === this.newMedicationForm.value.name){
        this.duplicateMedFlag = true;
        break;
      }
    }


    if (!this.minAmountFlag && !this.invalidNameFlag && !this.invalidSupplierFlag && !this.maxAmountFlag && !this.invalidAmtFlag && !this.duplicateMedFlag) {
      this.medicationService.add(this.newMedicationForm.value).subscribe(
        val => {
          console.log(val);
        },
        () => {
          console.log("Uh-Oh!, Couldn't add new medication! Please try again!")
          this.errorFlag = true;
          setTimeout(() => { this.errorFlag = false }, 5000);
        }
      )
      this.newMedicationForm.reset();
      setTimeout(() => { this.addMedicationFeedbackFlag = true }, 1000);
      setTimeout(() => { this.addMedicationFeedbackFlag = false }, 5000);
    }
  }

  invalidRestockNameFlag: boolean = false;
  minAmountRestockFlag: boolean = false;
  maxAmountRestockFlag: boolean = false;
  invalidRestockAmtFlag: boolean = false;
  restock(): void {
    this.setInputFlagsFalse();

    this.invalidRestockNameFlag = true;
    for(let med of this.medications){
      if(med.name === this.stockMedicationForm.value.name){
        this.invalidRestockNameFlag = false;
        break;
      }
    }
    // if (!(this.medications.includes(this.stockMedicationForm.value.name))){
    //   console.log("weeeeeeeeeeeeeeeeeeeeeee");
    //   this.invalidRestockNameFlag = true;
    // }
    if (!(/^[0-9]*$/.test(this.stockMedicationForm.value.amountStored)))
      this.invalidRestockAmtFlag = true;
    else {
      if (this.stockMedicationForm.value.amountStored > 100)
        this.maxAmountRestockFlag = true;
      if (this.stockMedicationForm.value.amountStored < 1)
        this.minAmountRestockFlag = true;
    }

    if (!this.invalidRestockNameFlag && !this.minAmountRestockFlag && !this.maxAmountRestockFlag && !this.invalidRestockAmtFlag) {
      this.restockSelectedMedication.amountStored += this.stockMedicationForm.value.amountStored;
      this.medicationService.update(this.restockSelectedMedication).subscribe(
        val => {
          console.log(val);
        },
        () => {
          console.log("Uh-Oh!, Couldn't fectch medications! Please try again!")
          this.updateErrorFlag = true;
          setTimeout(() => { this.updateErrorFlag = false }, 5000);
        }
      );
      this.stockMedicationForm.reset();
      setTimeout(() => { this.updateMedicationFeedbackFlag = true }, 1000);
      setTimeout(() => { this.updateMedicationFeedbackFlag = false }, 5000);
    }
  }

  restock_select(medicationName: string): void {
    this.restockSelectedMedication = this.medications.filter(
      (data) => data.name.includes(medicationName)
    )[0];
  }

  onRefresh(): void {
    this.ngOnInit();
  }

  setInputFlagsFalse(): void {
    this.invalidNameFlag = false;
    this.invalidSupplierFlag = false;
    this.minAmountFlag = false;
    this.maxAmountFlag = false;
    this.invalidAmtFlag = false;
    this.invalidRestockNameFlag = false;
    this.minAmountRestockFlag = false;
    this.maxAmountRestockFlag = false;
    this.invalidRestockAmtFlag = false;
    this.duplicateMedFlag = false;
  }
}
