import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestoService } from '../Services/budgetCalculation.serivce';

@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css'],
})
export class PresupuestoListComponent {

  // Declaración del tipo y asignación del objeto
  presupuestoForm: FormGroup;
  totalFinalPrice!: number

  constructor(
    public presupuestoService: PresupuestoService,
    private formBuilder: FormBuilder,
  ) {
    // Creación del FormGroup utilizando formBuilder.group()
    this.presupuestoForm = this.formBuilder.group({
      nombrePresupuesto: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }


  agregarPresupuesto() {
    console.log('hola desde agregarPresupuesto');
    const nombre = this.presupuestoForm.get('nombrePresupuesto')!.value;
    const cliente = this.presupuestoForm.get('cliente')!.value;
    const precio = this.totalFinalPrice;

    this.presupuestoService.agregarPresupuesto(nombre, cliente, precio);

    this.presupuestoForm.reset();
  }
}
