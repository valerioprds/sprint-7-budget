import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BudgetCalculationService } from '../Services/budgetCalculation.serivce';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  webForm!: FormGroup; //puse ! porque sino me da error

  constructor(
    private fb: FormBuilder,
    private budgetCalculationService: BudgetCalculationService
  ) {}


  @Output() totalCostSent = new EventEmitter<number>();

  ngOnInit(): void {
    this.webForm = this.fb.group({
      numberOfPages: ['', Validators.required],
      // los validators sirve para otro ejercicio despues?
      numberOfLanguages: ['', Validators.required],
    });
    this.webForm.valueChanges.subscribe(() => {
      this.onSubmit();
    });
  }
  totalCost: number = 0;

  increaseQuantityofPages() {
    let quantityOfPages = this.webForm.get('numberOfPages')?.value;
    this.webForm.get('numberOfPages')?.setValue(++quantityOfPages)
  }

  reduceQuantityofPages() {
    let quantityOfPages = this.webForm.get('numberOfPages')?.value;

    if (quantityOfPages > 0){
      this.webForm.get('numberOfPages')?.setValue(--quantityOfPages)

    }
  }


  increaseQuantityofLanguages() {
    let quantityOfLanguages = this.webForm.get('numberOfLanguages')?.value;
    this.webForm.get('numberOfLanguages')?.setValue(++quantityOfLanguages)
  }


  reduceQuantityofLanguages() {
    let quantityOfLanguages = this.webForm.get('numberOfLanguages')?.value;

    if (quantityOfLanguages > 0){
      this.webForm.get('numberOfLanguages')?.setValue(--quantityOfLanguages)

    }
  }

  onSubmit() {
    const numberOfPages = this.webForm.value.numberOfPages;
    const numberOfLanguages = this.webForm.value.numberOfLanguages;
    const totalCost = this.budgetCalculationService.calculateTotalCost(
      numberOfPages,
      numberOfLanguages
    );
    this.totalCostSent.emit(totalCost);

    console.log('hola desde onsubmit' + totalCost);
  }
}
