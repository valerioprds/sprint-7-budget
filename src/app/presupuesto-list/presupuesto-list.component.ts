 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css'],
})
export class PresupuestoListComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }


}
