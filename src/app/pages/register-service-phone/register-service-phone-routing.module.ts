import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterServicePhonePage } from './register-service-phone.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterServicePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterServicePhonePageRoutingModule {}
