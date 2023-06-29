import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetCalculationService {
  calculateTotalCost(numberOfPages: number, numberOfLanguages: number): number {
    return numberOfPages * numberOfLanguages * 30;

  }
}

export class PresupuestoService {
  presupuestos: any[] = []; // Array para almacenar los presupuestos

  constructor() {}

  agregarPresupuesto(nombre: string, cliente: string, precio: number) {
    const nuevoPresupuesto = {
      nombre: nombre,
      cliente: cliente,
      precio: precio,
      fecha: new Date()
    };

    this.presupuestos.push(nuevoPresupuesto);

console.log('desde el servicio ' + this.presupuestos)
  }


}
