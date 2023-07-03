import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { PresupuestoService } from '../Services/budgetCalculation.serivce';

@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css'],
})
export class PresupuestoListComponent implements OnInit {
  presupuestos: any[] = []; // Array para almacenar los presupuestos
  presupuestosFiltrados: any[] = [];
  searchTerm: string = '';

  totalFinalPrice!: number;
  orderByDate = false;
  orderByAlphabet = false;

  constructor(
    private formBuilder: FormBuilder,
    private presupuestoService: PresupuestoService
  ) {}

  ngOnInit(): void {
    //this.presupuestos = this.presupuestoService.presupuestos;
    this.presupuestoService.budget$.subscribe((resp) => {
      this.presupuestos = [...resp];
    });

    this.presupuestos = this.presupuestoService.getPresupuestos();
  }

  ordenarPorNombre() {
    this.presupuestos = this.presupuestos.sort((a, b) => {
      const nombreA = a.customer.toLowerCase();
      const nombreB = b.customer.toLowerCase();
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
    this.presupuestos = this.presupuestos.sort((a: any, b: any) => {
      return +new Date(b.date) - +new Date(a.date);
    });

    this.orderByDate = true;
    this.orderByAlphabet = false;
  }

  setIncialOrder(): void {
    //set nunca retorna sole setea
    this.presupuestos = [...this.presupuestoService.presupuestos];
    console.log('__presupuestos', this.presupuestos);
    console.log('__servicio', this.presupuestoService.presupuestos);
    this.orderByDate = false;
    this.orderByAlphabet = false;
  }

  buscarPresupuestos() {
    console.log('___Presupuestos filtrados: ', this.presupuestosFiltrados);
    if (this.searchTerm.trim() === '') {
      this.presupuestosFiltrados = this.presupuestos;
    } else {
      this.presupuestosFiltrados = this.presupuestos.filter((presupuesto) =>
        presupuesto.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if (this.presupuestosFiltrados.length === 0) {
      alert('not found');
    }
  }
}
