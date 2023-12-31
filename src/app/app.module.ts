import { PresupuestoService } from './Services/budgetCalculation.serivce';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ModalComponent } from './modal/modal.component';
import { PresupuestoListComponent } from './presupuesto-list/presupuesto-list.component';
import { ModalIdiomasComponent } from './modal-idiomas/modal-idiomas.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    PanelComponent,
    WelcomeComponent,
    ModalComponent,
    PresupuestoListComponent,
    ModalIdiomasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  bootstrap: [AppComponent],
  providers: [PresupuestoService],

})
export class AppModule { }
