import { PanelComponent } from '../panel/panel.component';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { PresupuestoService } from '../Services/budgetCalculation.serivce';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  totalPrice: number = 0; // es del padre
  totalCostReceived: number = 0; // es del hijo
  totalFinalPrice: number = 0; // suma de padre + hijo  que se calcula en calculateTotalFinalPrice y lo llamamos en el HTML

  calculateTotalFinalPrice() {
    this.totalFinalPrice = this.totalCostReceived + this.totalPrice;
    /*  this.totalFinalPrice = 0  */

    /*     if (this.totalCostReceived !== 0) {
      this.totalCostReceived = 0; // Resetting totalCostReceived to 0 if it is not already 0
    } */
  }

  receiveTotalCost(totalCost: number) {
    this.totalCostReceived = totalCost;
    //console.log('desde de receiveTotalCost '+ totalCost )
    console.log('HE RECIBIDO ' + totalCost + ' ' + this.totalPrice);
    this.calculateTotalFinalPrice();
    //totalCost es de panel , this.totalPrice es del checkbox (las 3 casillas)
  }

  checkboxForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private presupuestoService: PresupuestoService
  ) {
    this.checkboxForm = this.formBuilder.group({
      checkedWebPage: false,
      checkedCampaingSeo: false,
      checkedCampaingAdvertisement: false,
      nombrePresupuesto: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.checkboxForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
      this.calculateTotalFinalPrice();
    });
  }

  goBackHome() {
    this.router.navigate(['']);
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    const formValue = this.checkboxForm.value;

    if (formValue.checkedWebPage) {
      this.totalPrice += 500;
    }

    if (formValue.checkedCampaingSeo) {
      this.totalPrice += 300;
    }

    if (formValue.checkedCampaingAdvertisement) {
      this.totalPrice += 200;
    }

    //console.log(' desde calculateTotalPrice ' + this.totalPrice);
  }

  agregarPresupuesto() {
    //console.log('hola desde agregarPresupuesto');
    const nombre = this.checkboxForm.get('nombrePresupuesto')!.value;
    const cliente = this.checkboxForm.get('cliente')!.value;
    const precio = this.totalFinalPrice;

    this.presupuestoService.agregarPresupuesto(nombre, cliente, precio);

    this.checkboxForm.reset();

    this.totalFinalPrice = 0;
    this.totalCostReceived = 0;

    // console.log('agregarPresupuesto '+ this.totalFinalPrice)
  }
}
