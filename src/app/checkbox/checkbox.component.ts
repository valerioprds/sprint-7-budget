import { PanelComponent } from '../panel/panel.component';
import { Component,  Input } from '@angular/core'; //output y eventemitter
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  totalPrice: number = 0; // es del padre
  totalCostReceived: number = 0; // es del hijo
  totalFinalPrice: number = 0; // suma de padre + hijo  que se calcula en calculateTotalFinalPrice y lo llamamos en el HTML


  //  Ejercicio 6 para crear un array de presupuestos



  calculateTotalFinalPrice() {
    this.totalFinalPrice = this.totalCostReceived + this.totalPrice

  }


  receiveTotalCost(totalCost: number) {
    this.totalCostReceived = totalCost
    //console.log('HE RECIBIDO ' + totalCost + ' ' + this.totalPrice);
  this.calculateTotalFinalPrice()
    //totalCost es de panel , this.totalPrice es del checkbox (las 3 casillas)
  }

  checkboxForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.checkboxForm = this.formBuilder.group({
      checkedWebPage: false,
      checkedCampaingSeo: false,
      checkedCampaingAdvertisement: false,
      nombrePresupuesto: ['', Validators.required],
      cliente: ['', Validators.required]
    });





  }





  ngOnInit(): void {
    this.checkboxForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
      this.calculateTotalFinalPrice()
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

    //console.log(this.totalPrice);
  }


}
