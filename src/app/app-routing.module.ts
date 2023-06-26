import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes : Routes = [
  {
    component: CheckboxComponent, // home
    path: 'checkbox'
  },
  {
    component: WelcomeComponent,
    path: ''
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



