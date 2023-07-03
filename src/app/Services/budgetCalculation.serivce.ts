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

  addBudget(name: string, customer: string, price: number) {
    const nuevoPresupuesto = {
      name: name,
      customer: customer,
      price: price,
      date: new Date()
    };

    this.presupuestos.push(nuevoPresupuesto);

    this.budget$.next(this.presupuestos)

//console.log('desde el servicio ' + this.budgets)
  }

  getPresupuestos() {
  return this.presupuestos
}
}
