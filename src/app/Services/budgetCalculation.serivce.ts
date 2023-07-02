import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
  budget$:Subject<any> = new Subject<any>
  constructor() {}

  agregarPresupuesto(nombre: string, cliente: string, precio: number) {
    const nuevoPresupuesto = {
      nombre: nombre,
      cliente: cliente,
      precio: precio,
      fecha: new Date()
    };

    this.presupuestos.push(nuevoPresupuesto);

    this.budget$.next(this.presupuestos)

console.log('desde el servicio ' + this.presupuestos)
  }


}
