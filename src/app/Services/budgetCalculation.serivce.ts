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

  agregarPresupuesto(
    nombre: string,
    cliente: string,
    precio: number
  ) {
    const nuevoPresupuesto = {
      nombre: nombre,
      cliente: cliente,
      
      precio: precio,
    };

    this.presupuestos.push(nuevoPresupuesto);

    // Recalcular el costo total
    // Tu lógica para recalcular el costo total aquí

    // También podrías emitir un evento o utilizar un Subject/Observable
    // para notificar a otros componentes que se ha agregado un nuevo presupuesto
  }
}
