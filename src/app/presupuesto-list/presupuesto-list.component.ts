import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestoService } from '../Services/budgetCalculation.serivce';

@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css'],
})
export class PresupuestoListComponent  {

  // Declaración del tipo y asignación del objeto
  presupuestoForm: FormGroup;
  totalFinalPrice!: number

  orderByDate = false;
  orderByAlphabet = false;


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


  ordenarPorNombre() {
    this.presupuestoService.presupuestos.sort((a, b) => {
      const nombreA = a.cliente.toLowerCase();
      const nombreB = b.cliente.toLowerCase();
      //console.log('ordenarPorNombre ' + nombreA + nombreB )
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;

    });
    this.orderByDate = false;
    this.orderByAlphabet = true;


  }

  ordenarPorFecha() {
    this.presupuestoService.presupuestos.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      console.log(fechaA)
      console.log(fechaB)
      return fechaA.getTime() - fechaB.getTime();
    });
    this.orderByAlphabet = false;
    this.orderByDate = true;
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
