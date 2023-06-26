import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetCalculationService {
  calculateTotalCost(numberOfPages: number, numberOfLanguages: number): number {
    return numberOfPages * numberOfLanguages * 30;
  }
}
