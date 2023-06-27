import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ModalComponent } from './modal/modal.component';

const routes : Routes = [
  {
    component: CheckboxComponent, // home
    path: 'checkbox'
  },
  {
    component: WelcomeComponent,
    path: ''
  },
  {
    component: ModalComponent,
    path: 'modal'
  }


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



